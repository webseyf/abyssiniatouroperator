<?php
/**
 * ==============================================================================
 * Abyssinian Tour Operator — Email & SMTP Configuration
 * Location on server: public_html/api/mail-config.php
 * ==============================================================================
 * 
 * HOW EMAILS WORK:
 * ------------------------------------------------------------------------------
 * METHOD 1 (Recommended for cPanel — NO PASSWORD NEEDED):
 * Leave SMTP_AUTH_ENABLED set to false.
 * When the website is hosted on your cPanel account, PHP's built-in mail() 
 * system routes emails directly through your server without needing any password.
 * 
 * METHOD 2 (Authenticated SMTP with Username & Password):
 * If your hosting provider requires SMTP authentication, or if you are using an 
 * external SMTP service (Google Workspace, cPanel Webmail SMTP, SendGrid, etc.):
 * 1. Set SMTP_AUTH_ENABLED to true below.
 * 2. Fill in SMTP_HOST, SMTP_PORT, SMTP_USERNAME, and SMTP_PASSWORD.
 */

// ==============================================================================
// 1. RECIPIENT EMAIL ADDRESSES
// ==============================================================================
define('ABYSSINIAN_INFO_EMAIL',   'info@abyssiniatouroperator.com');
define('ABYSSINIAN_B2B_EMAIL',    'b2b@abyssiniatouroperator.com');
define('ABYSSINIAN_BACKUP_EMAIL', 'abyssiniantouroperator@gmail.com');

// Sender branding
define('ABYSSINIAN_FROM_EMAIL',   'noreply@abyssiniatouroperator.com');
define('ABYSSINIAN_FROM_NAME',    'Abyssinian Tour Operator Web Desk');


// ==============================================================================
// 2. SMTP PASSWORD & CREDENTIALS (OPTIONAL)
// ==============================================================================
// Set to true if you want to use SMTP with password. Set to false for default cPanel mail().
define('SMTP_AUTH_ENABLED', false);

// Your mail server host (usually mail.yourdomain.com or smtp.yourdomain.com)
define('SMTP_HOST', 'mail.abyssiniatouroperator.com');

// SMTP Port: 465 (SSL) or 587 (TLS/STARTTLS)
define('SMTP_PORT', 465);

// Encryption type: 'ssl' or 'tls'
define('SMTP_ENCRYPTION', 'ssl');

// Your mailbox email address (e.g. info@abyssiniatouroperator.com)
define('SMTP_USERNAME', 'info@abyssiniatouroperator.com');

// YOUR EMAIL PASSWORD (Enter the password for the email account above)
define('SMTP_PASSWORD', 'YOUR_EMAIL_PASSWORD_HERE');


// ==============================================================================
// 3. UNIVERSAL MAIL DISPATCH FUNCTION
// ==============================================================================
/**
 * Sends email via Authenticated SMTP if enabled, otherwise falls back to cPanel mail()
 */
function abyssinian_dispatch_mail($to, $subject, $body, $reply_name = '', $reply_email = '') {
    $recipients = is_array($to) ? $to : array_map('trim', explode(',', $to));
    
    // If SMTP authentication is enabled, attempt socket SMTP delivery
    if (defined('SMTP_AUTH_ENABLED') && SMTP_AUTH_ENABLED === true && SMTP_PASSWORD !== 'YOUR_EMAIL_PASSWORD_HERE') {
        $smtp_sent = send_via_socket_smtp($recipients, $subject, $body, $reply_name, $reply_email);
        if ($smtp_sent) {
            return true;
        }
    }
    
    // Default cPanel mail() dispatch (no password required)
    $to_string = implode(', ', $recipients);
    $headers = [];
    $headers[] = 'From: ' . ABYSSINIAN_FROM_NAME . ' <' . ABYSSINIAN_FROM_EMAIL . '>';
    if (!empty($reply_email)) {
        $headers[] = 'Reply-To: ' . (!empty($reply_name) ? $reply_name . ' ' : '') . '<' . $reply_email . '>';
    }
    $headers[] = 'X-Mailer: PHP/' . phpversion();
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-Type: text/plain; charset=UTF-8';
    
    $extra_params = '-f ' . ABYSSINIAN_FROM_EMAIL;
    $sent = @mail($to_string, $subject, $body, implode("\r\n", $headers), $extra_params);
    if (!$sent) {
        $sent = @mail($to_string, $subject, $body, implode("\r\n", $headers));
    }
    
    return $sent;
}

/**
 * Lightweight pure-PHP SMTP client (no external library dependencies)
 */
function send_via_socket_smtp($recipients, $subject, $body, $reply_name, $reply_email) {
    $host = (SMTP_ENCRYPTION === 'ssl' ? 'ssl://' : '') . SMTP_HOST;
    $port = SMTP_PORT;
    $timeout = 15;
    
    $socket = @fsockopen($host, $port, $errno, $errstr, $timeout);
    if (!$socket) {
        return false;
    }
    
    $read = fgets($socket, 515);
    
    // HELO / EHLO
    fputs($socket, "EHLO " . ($_SERVER['SERVER_NAME'] ?? 'localhost') . "\r\n");
    while ($line = fgets($socket, 515)) {
        if (substr($line, 3, 1) == " ") break;
    }
    
    // STARTTLS if port 587
    if (SMTP_ENCRYPTION === 'tls') {
        fputs($socket, "STARTTLS\r\n");
        $res = fgets($socket, 515);
        if (substr($res, 0, 3) != '220') {
            fclose($socket);
            return false;
        }
        stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
        fputs($socket, "EHLO " . ($_SERVER['SERVER_NAME'] ?? 'localhost') . "\r\n");
        while ($line = fgets($socket, 515)) {
            if (substr($line, 3, 1) == " ") break;
        }
    }
    
    // AUTH LOGIN
    fputs($socket, "AUTH LOGIN\r\n");
    $res = fgets($socket, 515);
    if (substr($res, 0, 3) != '334') { fclose($socket); return false; }
    
    fputs($socket, base64_encode(SMTP_USERNAME) . "\r\n");
    $res = fgets($socket, 515);
    if (substr($res, 0, 3) != '334') { fclose($socket); return false; }
    
    fputs($socket, base64_encode(SMTP_PASSWORD) . "\r\n");
    $res = fgets($socket, 515);
    if (substr($res, 0, 3) != '235') { fclose($socket); return false; }
    
    // MAIL FROM
    fputs($socket, "MAIL FROM: <" . SMTP_USERNAME . ">\r\n");
    $res = fgets($socket, 515);
    if (substr($res, 0, 3) != '250') { fclose($socket); return false; }
    
    // RCPT TO
    foreach ($recipients as $to_addr) {
        fputs($socket, "RCPT TO: <" . $to_addr . ">\r\n");
        fgets($socket, 515);
    }
    
    // DATA
    fputs($socket, "DATA\r\n");
    $res = fgets($socket, 515);
    if (substr($res, 0, 3) != '354') { fclose($socket); return false; }
    
    // Headers & Payload
    $msg = "From: " . ABYSSINIAN_FROM_NAME . " <" . SMTP_USERNAME . ">\r\n";
    $msg .= "To: " . implode(', ', $recipients) . "\r\n";
    if (!empty($reply_email)) {
        $msg .= "Reply-To: " . (!empty($reply_name) ? $reply_name . " " : "") . "<" . $reply_email . ">\r\n";
    }
    $msg .= "Subject: " . $subject . "\r\n";
    $msg .= "MIME-Version: 1.0\r\n";
    $msg .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $msg .= "\r\n";
    $msg .= $body . "\r\n.\r\n";
    
    fputs($socket, $msg);
    $res = fgets($socket, 515);
    
    fputs($socket, "QUIT\r\n");
    fclose($socket);
    
    return substr($res, 0, 3) == '250';
}
