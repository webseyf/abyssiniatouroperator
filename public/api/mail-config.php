<?php
/**
 * ==============================================================================
 * ABYSSINIAN TOUR OPERATOR — PRODUCTION EMAIL & SMTP CONFIGURATION
 * Location: public_html/api/mail-config.php
 * Website: abyssiniatouroperator.com
 * ==============================================================================
 */

// ==============================================================================
// 0. SECURITY: Prevent direct browser execution
// ==============================================================================
if (
    isset($_SERVER['SCRIPT_FILENAME']) &&
    realpath($_SERVER['SCRIPT_FILENAME']) === realpath(__FILE__)
) {
    http_response_code(403);
    exit('Forbidden');
}

// ==============================================================================
// 1. RECIPIENT & SENDER IDENTITIES
// ==============================================================================
define('ABYSSINIAN_INFO_EMAIL',   'info@abyssiniatouroperator.com');
define('ABYSSINIAN_B2B_EMAIL',    'b2b@abyssiniatouroperator.com');
define('ABYSSINIAN_BACKUP_EMAIL', 'abyssiniantouroperator@gmail.com');

define('ABYSSINIAN_FROM_EMAIL',   'info@abyssiniatouroperator.com');
define('ABYSSINIAN_FROM_NAME',    'Abyssinian Tour Operator');

// ==============================================================================
// 2. SMTP PRODUCTION CREDENTIALS
// ==============================================================================
define('SMTP_AUTH_ENABLED', true);
define('SMTP_HOST',         'mail.abyssiniatouroperator.com');
define('SMTP_PORT',         465);
define('SMTP_ENCRYPTION',   'ssl');
define('SMTP_USERNAME',     'info@abyssiniatouroperator.com');
define('SMTP_PASSWORD',     '1234@abyssinia');
define('SMTP_TIMEOUT',      15);

// ==============================================================================
// 3. INTERNAL LOGGING
// ==============================================================================
function abyssinian_mail_log($message) {
    $log_file = __DIR__ . '/mail_debug.log';
    $entry = '[' . date('Y-m-d H:i:s') . '] ' . str_replace(["\r", "\n"], ' ', $message) . PHP_EOL;
    @file_put_contents($log_file, $entry, FILE_APPEND | LOCK_EX);
    if (file_exists($log_file)) {
        @chmod($log_file, 0600);
    }
}

// ==============================================================================
// 4. LOW-LEVEL SMTP HELPERS (RFC 5321 COMPLIANT)
// ==============================================================================
function abyssinian_smtp_read($socket) {
    $response = '';
    while (($line = fgets($socket, 515)) !== false) {
        $response .= $line;
        // In SMTP, a space after the 3-digit code indicates the last line of a multi-line response
        if (strlen($line) >= 4 && $line[3] === ' ') {
            break;
        }
    }
    return $response;
}

function abyssinian_smtp_write($socket, $data) {
    $length = strlen($data);
    $written = 0;
    while ($written < $length) {
        $result = fwrite($socket, substr($data, $written));
        if ($result === false || $result === 0) {
            throw new Exception('Failed to write data to SMTP server socket.');
        }
        $written += $result;
    }
    return true;
}

function abyssinian_smtp_command($socket, $command, $expected_codes) {
    if ($command !== null) {
        abyssinian_smtp_write($socket, $command . "\r\n");
    }
    $response = abyssinian_smtp_read($socket);
    $code = (int) substr($response, 0, 3);
    if (!in_array($code, $expected_codes, true)) {
        throw new Exception("SMTP error $code: " . trim($response));
    }
    return $response;
}

// ==============================================================================
// 5. DIRECT SOCKET SMTP TRANSMISSION
// ==============================================================================
function abyssinian_smtp_send($recipients, $subject, $body, $reply_name = '', $reply_email = '') {
    $socket = null;
    try {
        if (!SMTP_AUTH_ENABLED) {
            throw new Exception('SMTP authentication disabled.');
        }
        if (empty(SMTP_PASSWORD) || SMTP_PASSWORD === 'YOUR_EMAIL_PASSWORD_HERE') {
            throw new Exception('SMTP password has not been configured.');
        }
        if (!extension_loaded('openssl')) {
            throw new Exception('PHP OpenSSL extension is not enabled on this server.');
        }

        // Stream context configured for cPanel SSL / self-signed / hostns.io compatibility
        $context = stream_context_create([
            'ssl' => [
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true,
                'SNI_enabled' => true
            ]
        ]);

        $socket = @stream_socket_client(
            'ssl://' . SMTP_HOST . ':' . SMTP_PORT,
            $errno,
            $errstr,
            SMTP_TIMEOUT,
            STREAM_CLIENT_CONNECT,
            $context
        );

        if (!$socket) {
            throw new Exception("SMTP connection failed: $errstr ($errno)");
        }

        stream_set_timeout($socket, SMTP_TIMEOUT);

        // 1. Read Greeting (Handles multi-line 220 banner from Exim)
        abyssinian_smtp_command($socket, null, [220]);

        // 2. Identify Client
        $hostname = preg_replace('/[^a-zA-Z0-9.-]/', '', $_SERVER['SERVER_NAME'] ?? 'localhost');
        if (empty($hostname)) {
            $hostname = 'localhost';
        }
        $ehlo_response = abyssinian_smtp_command($socket, 'EHLO ' . $hostname, [250]);

        // 3. Authenticate
        if (stripos($ehlo_response, 'LOGIN') !== false) {
            abyssinian_smtp_command($socket, 'AUTH LOGIN', [334]);
            abyssinian_smtp_command($socket, base64_encode(SMTP_USERNAME), [334]);
            abyssinian_smtp_command($socket, base64_encode(SMTP_PASSWORD), [235]);
        } elseif (stripos($ehlo_response, 'PLAIN') !== false) {
            $auth_string = base64_encode("\0" . SMTP_USERNAME . "\0" . SMTP_PASSWORD);
            abyssinian_smtp_command($socket, 'AUTH PLAIN ' . $auth_string, [235, 334]);
        } else {
            throw new Exception('SMTP server does not support AUTH LOGIN or AUTH PLAIN.');
        }

        // 4. Sender Address
        abyssinian_smtp_command($socket, 'MAIL FROM:<' . ABYSSINIAN_FROM_EMAIL . '>', [250]);

        // 5. Recipient Addresses
        foreach ($recipients as $recipient) {
            if (!filter_var($recipient, FILTER_VALIDATE_EMAIL)) {
                throw new Exception("Invalid recipient email: $recipient");
            }
            abyssinian_smtp_command($socket, 'RCPT TO:<' . $recipient . '>', [250, 251]);
        }

        // 6. Data Stream
        abyssinian_smtp_command($socket, 'DATA', [354]);

        $clean_subject = str_replace(["\r", "\n"], '', $subject);
        $encoded_subject = '=?UTF-8?B?' . base64_encode($clean_subject) . '?=';

        $headers = [];
        $headers[] = 'Date: ' . date('r');
        $headers[] = 'From: ' . ABYSSINIAN_FROM_NAME . ' <' . ABYSSINIAN_FROM_EMAIL . '>';
        $headers[] = 'To: ' . implode(', ', $recipients);
        $headers[] = 'Subject: ' . $encoded_subject;
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-Type: text/plain; charset=UTF-8';
        $headers[] = 'Content-Transfer-Encoding: 8bit';

        if (!empty($reply_email) && filter_var($reply_email, FILTER_VALIDATE_EMAIL)) {
            $clean_reply_name = str_replace(["\r", "\n"], '', $reply_name);
            $headers[] = 'Reply-To: ' . (!empty($clean_reply_name) ? $clean_reply_name . ' ' : '') . '<' . $reply_email . '>';
        }

        // Body normalization & dot-stuffing
        $norm_body = str_replace(["\r\n", "\r"], "\n", $body);
        $norm_body = str_replace("\n", "\r\n", $norm_body);
        $norm_body = preg_replace('/^\./m', '..', $norm_body);

        $message = implode("\r\n", $headers) . "\r\n\r\n" . $norm_body . "\r\n.\r\n";
        abyssinian_smtp_write($socket, $message);

        // 7. Verify Acceptance
        $response = abyssinian_smtp_read($socket);
        if ((int) substr($response, 0, 3) !== 250) {
            throw new Exception('SMTP rejected message: ' . trim($response));
        }

        @fwrite($socket, "QUIT\r\n");
        @fclose($socket);
        $socket = null;

        return ['success' => true, 'response' => trim($response)];
    } catch (Throwable $e) {
        if (is_resource($socket)) {
            @fclose($socket);
        }
        return ['success' => false, 'error' => $e->getMessage()];
    }
}

// ==============================================================================
// 6. MAIN EMAIL DISPATCH FUNCTION (SMTP WITH NATIVE FALLBACK)
// ==============================================================================
function abyssinian_dispatch_mail($to, $subject, $body, $reply_name = '', $reply_email = '') {
    $raw_recipients = is_array($to) ? $to : explode(',', $to);
    $recipients = array_values(array_unique(array_filter(array_map('trim', $raw_recipients))));

    if (empty($recipients)) {
        abyssinian_mail_log('ERROR: No email recipients supplied.');
        return false;
    }

    // Step 1: Attempt Authenticated Socket SMTP
    if (defined('SMTP_AUTH_ENABLED') && SMTP_AUTH_ENABLED === true) {
        $result = abyssinian_smtp_send($recipients, $subject, $body, $reply_name, $reply_email);
        if ($result['success']) {
            abyssinian_mail_log('SUCCESS: SMTP accepted message for ' . implode(', ', $recipients) . ' (' . ($result['response'] ?? '250 OK') . ')');
            return true;
        } else {
            abyssinian_mail_log('SMTP FAILED: ' . $result['error'] . '. Initiating PHP mail() fallback...');
        }
    }

    // Step 2: Fallback to PHP native mail()
    $to_string = implode(', ', $recipients);
    $clean_subject = str_replace(["\r", "\n"], '', $subject);
    $encoded_subject = '=?UTF-8?B?' . base64_encode($clean_subject) . '?=';

    $headers = [];
    $headers[] = 'From: ' . ABYSSINIAN_FROM_NAME . ' <' . ABYSSINIAN_FROM_EMAIL . '>';
    if (!empty($reply_email) && filter_var($reply_email, FILTER_VALIDATE_EMAIL)) {
        $clean_reply_name = str_replace(["\r", "\n"], '', $reply_name);
        $headers[] = 'Reply-To: ' . (!empty($clean_reply_name) ? $clean_reply_name . ' ' : '') . '<' . $reply_email . '>';
    }
    $headers[] = 'X-Mailer: PHP/' . phpversion();
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-Type: text/plain; charset=UTF-8';

    $extra_params = '-f' . ABYSSINIAN_FROM_EMAIL;
    $sent = @mail($to_string, $encoded_subject, $body, implode("\r\n", $headers), $extra_params);
    if (!$sent) {
        $sent = @mail($to_string, $encoded_subject, $body, implode("\r\n", $headers));
    }

    if ($sent) {
        abyssinian_mail_log('SUCCESS: Native mail() fallback dispatched message to ' . $to_string);
    } else {
        abyssinian_mail_log('ERROR: Both SMTP and native mail() failed for ' . $to_string);
    }

    return $sent;
}
