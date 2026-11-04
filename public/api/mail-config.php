<?php
/**
 * ==============================================================================
 * Abyssinian Tour Operator — Email & SMTP Configuration
 * Location: public_html/api/mail-config.php
 * ==============================================================================
 *
 * WHERE TO SET YOUR EMAIL PASSWORD:
 * ------------------------------------------------------------------------------
 * Look below at SECTION 2 ("SMTP PASSWORD & CREDENTIALS"):
 *
 * 1. Change:
 *    define('SMTP_AUTH_ENABLED', true);
 *
 * 2. Put your cPanel / Webmail / Google password in:
 *    define('SMTP_PASSWORD', 'YourActualPasswordHere');
 *
 * 3. Verify the username is your actual email address:
 *    define('SMTP_USERNAME', 'info@abyssiniatouroperator.com');
 *
 * 4. Verify host and port:
 *    Host: mail.abyssiniatouroperator.com
 *    Port: 465 (SSL) or 587 (TLS)
 */

// ==============================================================================
// 1. RECIPIENT EMAIL ADDRESSES
// ==============================================================================
define('ABYSSINIAN_INFO_EMAIL',   'info@abyssiniatouroperator.com');
define('ABYSSINIAN_B2B_EMAIL',    'b2b@abyssiniatouroperator.com');
define('ABYSSINIAN_BACKUP_EMAIL', 'abyssiniantouroperator@gmail.com');

// Sender identity
define('ABYSSINIAN_FROM_EMAIL',   'info@abyssiniatouroperator.com');
define('ABYSSINIAN_FROM_NAME',    'Abyssinian Tour Operator');


// ==============================================================================
// 2. SMTP PASSWORD & CREDENTIALS (SET YOUR PASSWORD HERE)
// ==============================================================================
// Set to TRUE to use SMTP authentication with password.
// Set to FALSE to use server native mail() without password.
define('SMTP_AUTH_ENABLED', false);

// Your mail server hostname (e.g., mail.abyssiniatouroperator.com)
define('SMTP_HOST', 'mail.abyssiniatouroperator.com');

// SMTP Port: 465 (for SSL) or 587 (for TLS)
define('SMTP_PORT', 465);

// Encryption mode: 'ssl' or 'tls'
define('SMTP_ENCRYPTION', 'ssl');

// Mailbox username (the full email address in cPanel)
define('SMTP_USERNAME', 'info@abyssiniatouroperator.com');

// >>>>> ENTER YOUR EMAIL PASSWORD HERE <<<<<
define('SMTP_PASSWORD', 'YOUR_EMAIL_PASSWORD_HERE');


// ==============================================================================
// 3. DISPATCH LOGIC & DEBUG LOGGING
// ==============================================================================

/**
 * Universal mail dispatch function with fallback and debug logging
 */
function abyssinian_dispatch_mail($to, $subject, $body, $reply_name = '', $reply_email = '') {
    $recipients = is_array($to) ? $to : array_map('trim', explode(',', $to));
    $log_file = __DIR__ . '/mail_debug.log';
    
    // 1. Try Authenticated SMTP if enabled and password is set
    if (defined('SMTP_AUTH_ENABLED') && SMTP_AUTH_ENABLED === true && SMTP_PASSWORD !== 'YOUR_EMAIL_PASSWORD_HERE') {
        $smtp_result = send_via_socket_smtp($recipients, $subject, $body, $reply_name, $reply_email);
        if ($smtp_result['success']) {
            @file_put_contents($log_file, "[" . date('Y-m-d H:i:s') . "] SUCCESS: SMTP email sent to " . implode(', ', $recipients) . "\n", FILE_APPEND | LOCK_EX);
            return true;
        } else {
            @file_put_contents($log_file, "[" . date('Y-m-d H:i:s') . "] SMTP FAILED: " . $smtp_result['error'] . ". Attempting fallback to mail()...\n", FILE_APPEND | LOCK_EX);
        }
    }
    
    // 2. Fallback to PHP native mail()
    $to_string = implode(', ', $recipients);
    $headers = [];
    $headers[] = 'From: ' . ABYSSINIAN_FROM_NAME . ' <' . ABYSSINIAN_FROM_EMAIL . '>';
    if (!empty($reply_email)) {
        $headers[] = 'Reply-To: ' . (!empty($reply_name) ? $reply_name . ' ' : '') . '<' . $reply_email . '>';
    }
    $headers[] = 'X-Mailer: PHP/' . phpversion();
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-Type: text/plain; charset=UTF-8';
    
    $extra_params = '-f' . ABYSSINIAN_FROM_EMAIL;
    $sent = @mail($to_string, $subject, $body, implode("\r\n", $headers), $extra_params);
    if (!$sent) {
        $sent = @mail($to_string, $subject, $body, implode("\r\n", $headers));
    }
    
    if ($sent) {
        @file_put_contents($log_file, "[" . date('Y-m-d H:i:s') . "] SUCCESS: PHP mail() accepted email for " . $to_string . "\n", FILE_APPEND | LOCK_EX);
    } else {
        @file_put_contents($log_file, "[" . date('Y-m-d H:i:s') . "] ERROR: PHP mail() returned false for " . $to_string . ". (Host might have disabled mail() or requires SMTP auth)\n", FILE_APPEND | LOCK_EX);
    }
    
    return $sent;
}

/**
 * Pure PHP SMTP socket implementation
 */
function send_via_socket_smtp($recipients, $subject, $body, $reply_name, $reply_email) {
    $host_prefix = (SMTP_ENCRYPTION === 'ssl') ? 'ssl://' : '';
    $host = $host_prefix . SMTP_HOST;
    $port = SMTP_PORT;
    $timeout = 15;
    
    $socket = @fsockopen($host, $port, $errno, $errstr, $timeout);
    if (!$socket) {
        return ['success' => false, 'error' => "Cannot connect to $host on port $port: $errstr ($errno)"];
    }
    
    $greeting = fgets($socket, 515);
    
    fputs($socket, "EHLO " . ($_SERVER['SERVER_NAME'] ?? 'localhost') . "\r\n");
    while ($line = fgets($socket, 515)) {
        if (substr($line, 3, 1) === " ") break;
    }
    
    // STARTTLS if port 587
    if (SMTP_ENCRYPTION === 'tls') {
        fputs($socket, "STARTTLS\r\n");
        $res = fgets($socket, 515);
        if (substr($res, 0, 3) !== '220') {
            fclose($socket);
            return ['success' => false, 'error' => "STARTTLS rejected: $res"];
        }
        stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
        fputs($socket, "EHLO " . ($_SERVER['SERVER_NAME'] ?? 'localhost') . "\r\n");
        while ($line = fgets($socket, 515)) {
            if (substr($line, 3, 1) === " ") break;
        }
    }
    
    // AUTH LOGIN
    fputs($socket, "AUTH LOGIN\r\n");
    $res = fgets($socket, 515);
    if (substr($res, 0, 3) !== '334') { 
        fclose($socket); 
        return ['success' => false, 'error' => "AUTH LOGIN rejected: $res"]; 
    }
    
    fputs($socket, base64_encode(SMTP_USERNAME) . "\r\n");
    $res = fgets($socket, 515);
    if (substr($res, 0, 3) !== '334') { 
        fclose($socket); 
        return ['success' => false, 'error' => "Username rejected: $res"]; 
    }
    
    fputs($socket, base64_encode(SMTP_PASSWORD) . "\r\n");
    $res = fgets($socket, 515);
    if (substr($res, 0, 3) !== '235') { 
        fclose($socket); 
        return ['success' => false, 'error' => "Password rejected: $res"]; 
    }
    
    // MAIL FROM
    fputs($socket, "MAIL FROM: <" . SMTP_USERNAME . ">\r\n");
    $res = fgets($socket, 515);
    if (substr($res, 0, 3) !== '250') { 
        fclose($socket); 
        return ['success' => false, 'error' => "MAIL FROM rejected: $res"]; 
    }
    
    // RCPT TO
    foreach ($recipients as $to_addr) {
        fputs($socket, "RCPT TO: <" . $to_addr . ">\r\n");
        $res = fgets($socket, 515);
        if (substr($res, 0, 3) !== '250' && substr($res, 0, 3) !== '251') {
            fclose($socket);
            return ['success' => false, 'error' => "RCPT TO <$to_addr> rejected: $res"];
        }
    }
    
    // DATA
    fputs($socket, "DATA\r\n");
    $res = fgets($socket, 515);
    if (substr($res, 0, 3) !== '354') { 
        fclose($socket); 
        return ['success' => false, 'error' => "DATA rejected: $res"]; 
    }
    
    // Build Headers & Body
    $msg = "From: " . ABYSSINIAN_FROM_NAME . " <" . SMTP_USERNAME . ">\r\n";
    $msg .= "To: " . implode(', ', $recipients) . "\r\n";
    if (!empty($reply_email)) {
        $msg .= "Reply-To: " . (!empty($reply_name) ? $reply_name . " " : "") . "<" . $reply_email . ">\r\n";
    }
    $msg .= "Subject: " . $subject . "\r\n";
    $msg .= "Date: " . date('r') . "\r\n";
    $msg .= "MIME-Version: 1.0\r\n";
    $msg .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $msg .= "\r\n";
    $msg .= $body . "\r\n.\r\n";
    
    fputs($socket, $msg);
    $res = fgets($socket, 515);
    
    fputs($socket, "QUIT\r\n");
    fclose($socket);
    
    if (substr($res, 0, 3) === '250') {
        return ['success' => true, 'error' => ''];
    } else {
        return ['success' => false, 'error' => "Data delivery rejected: $res"];
    }
}
