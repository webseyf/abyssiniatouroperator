<?php
/**
 * Abyssinian Tour Operator — Mail Configuration & Dispatch Helper
 * Configured for cPanel Shared Hosting (PHP 7.4 - 8.3+)
 * 
 * Instructions for Server Administrator:
 * By default, this script uses PHP's native mail() function, which works out of the box
 * on standard cPanel environments when the domain abyssiniatouroperator.com is hosted.
 * If you prefer authenticated SMTP, you can configure your credentials below.
 */

// Define global recipients
define('ABYSSINIAN_INFO_EMAIL', 'info@abyssiniatouroperator.com');
define('ABYSSINIAN_B2B_EMAIL', 'b2b@abyssiniatouroperator.com');
define('ABYSSINIAN_BACKUP_EMAIL', 'abyssiniantouroperator@gmail.com');
define('ABYSSINIAN_FROM_EMAIL', 'noreply@abyssiniatouroperator.com');
define('ABYSSINIAN_FROM_NAME', 'Abyssinian Tour Operator Web Desk');

/**
 * Universal mail dispatch function
 *
 * @param string|array $to Recipients
 * @param string $subject Email subject line
 * @param string $body Plain text message body
 * @param string $reply_name Reply-to person/company
 * @param string $reply_email Reply-to email address
 * @return bool
 */
function abyssinian_dispatch_mail($to, $subject, $body, $reply_name = '', $reply_email = '') {
    $to_string = is_array($to) ? implode(', ', $to) : $to;
    
    // Construct compliant RFC 822 email headers
    $headers = [];
    $headers[] = 'From: ' . ABYSSINIAN_FROM_NAME . ' <' . ABYSSINIAN_FROM_EMAIL . '>';
    if (!empty($reply_email)) {
        $headers[] = 'Reply-To: ' . (!empty($reply_name) ? $reply_name . ' ' : '') . '<' . $reply_email . '>';
    }
    $headers[] = 'X-Mailer: PHP/' . phpversion();
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-Type: text/plain; charset=UTF-8';
    
    // cPanel sendmail envelope sender flag (-f) ensures deliverability and passes SPF/DKIM
    $extra_params = '-f ' . ABYSSINIAN_FROM_EMAIL;
    
    // Execute mail send with error suppression, fallback without extra params if restricted
    $sent = @mail($to_string, $subject, $body, implode("\r\n", $headers), $extra_params);
    if (!$sent) {
        $sent = @mail($to_string, $subject, $body, implode("\r\n", $headers));
    }
    
    return $sent;
}
