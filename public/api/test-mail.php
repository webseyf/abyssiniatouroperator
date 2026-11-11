<?php
/**
 * Abyssinian Tour Operator — Email Diagnostics & Live Test
 * Visit this in your browser: https://abyssiniatouroperator.com/api/test-mail.php
 */

header('Content-Type: text/html; charset=UTF-8');
require_once __DIR__ . '/mail-config.php';

$test_action = $_GET['send'] ?? '';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Email Configuration Test — Abyssinian Tour Operator</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #FAF5EE; color: #231C16; padding: 2rem; margin: 0; }
    .box { max-width: 700px; margin: 0 auto; background: #FFFFFF; border: 1px solid #D8C7B5; border-radius: 8px; padding: 2rem; box-shadow: 0 4px 15px rgba(0,0,0,0.08); }
    h1 { color: #8C6226; font-size: 1.5rem; margin-top: 0; }
    .status-badge { display: inline-block; padding: 0.35rem 0.75rem; border-radius: 4px; font-weight: bold; margin-bottom: 1rem; }
    .ok { background: #D1E7DD; color: #0F5132; }
    .warn { background: #FFF3CD; color: #664D03; }
    .err { background: #F8D7DA; color: #842029; }
    table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.92rem; }
    th, td { text-align: left; padding: 0.65rem 0.5rem; border-bottom: 1px solid #EAE0D5; }
    th { color: #7B6856; width: 40%; }
    .code { font-family: monospace; background: #F4EBE1; padding: 0.2rem 0.4rem; border-radius: 3px; }
    .btn { display: inline-block; background: #1E5E44; color: #FFFFFF; padding: 0.75rem 1.5rem; text-decoration: none; border-radius: 4px; font-weight: bold; }
    .btn:hover { background: #164834; }
    pre { background: #231C16; color: #E5C158; padding: 1rem; border-radius: 6px; overflow-x: auto; font-size: 0.85rem; }
  </style>
</head>
<body>
<div class="box">
  <h1>Abyssinian Tour Operator — Email Diagnostics</h1>
  <p>Use this tool to test email dispatch directly on your hosting server.</p>

  <table>
    <tr>
      <th>PHP mail() Function:</th>
      <td>
        <?php if (function_exists('mail')): ?>
          <span class="status-badge ok">Enabled</span>
        <?php else: ?>
          <span class="status-badge err">Disabled by host</span>
        <?php endif; ?>
      </td>
    </tr>
    <tr>
      <th>SMTP Authentication:</th>
      <td>
        <?php if (defined('SMTP_AUTH_ENABLED') && SMTP_AUTH_ENABLED): ?>
          <span class="status-badge ok">Enabled (Using Host: <?= htmlspecialchars(SMTP_HOST) ?>)</span>
        <?php else: ?>
          <span class="status-badge warn">Disabled (Using cPanel native mail)</span>
        <?php endif; ?>
      </td>
    </tr>
    <tr>
      <th>Target Primary Recipient:</th>
      <td><span class="code"><?= htmlspecialchars(ABYSSINIAN_INFO_EMAIL) ?></span></td>
    </tr>
    <tr>
      <th>Target Backup Recipient:</th>
      <td><span class="code"><?= htmlspecialchars(ABYSSINIAN_BACKUP_EMAIL) ?></span></td>
    </tr>
    <tr>
      <th>Sender Address:</th>
      <td><span class="code"><?= htmlspecialchars(ABYSSINIAN_FROM_EMAIL) ?></span></td>
    </tr>
  </table>

  <?php if ($test_action === 'now'): ?>
    <h2>Test Execution Result</h2>
    <?php
      $subject = "Abyssinian Diagnostics Test Email — " . date('Y-m-d H:i:s');
      $body = "This is a diagnostic test email from Abyssinian Tour Operator website.\nTime: " . date('r') . "\nServer: " . ($_SERVER['SERVER_NAME'] ?? 'localhost') . "\n";
      
      $sent = abyssinian_dispatch_mail([ABYSSINIAN_INFO_EMAIL, ABYSSINIAN_BACKUP_EMAIL], $subject, $body, 'Diagnostic Tool', 'test@abyssiniatouroperator.com');
    ?>

    <?php if ($sent): ?>
      <div class="status-badge ok" style="font-size: 1.1rem; padding: 0.75rem 1rem;">
        &#10004; Test Email Dispatched Successfully!
      </div>
      <p>Check the inbox of <strong><?= htmlspecialchars(ABYSSINIAN_INFO_EMAIL) ?></strong> and <strong><?= htmlspecialchars(ABYSSINIAN_BACKUP_EMAIL) ?></strong> (also check Spam/Junk folder just in case).</p>
    <?php else: ?>
      <div class="status-badge err" style="font-size: 1.1rem; padding: 0.75rem 1rem;">
        &#10008; Test Email Failed to Send!
      </div>
      <p>Your server's native <code>mail()</code> was rejected or blocked. To fix this, enable SMTP in <code>public_html/api/mail-config.php</code> and enter your email password.</p>
    <?php endif; ?>

    <h3>Debug Log Contents (Last 10 lines):</h3>
    <pre><?php
      $log_file = __DIR__ . '/mail_debug.log';
      if (file_exists($log_file)) {
        $lines = array_slice(file($log_file), -10);
        echo htmlspecialchars(implode('', $lines));
      } else {
        echo "No debug logs recorded yet.";
      }
    ?></pre>

    <p><a href="test-mail.php" class="btn" style="background:#8C6226;">Back to Overview</a></p>
  <?php else: ?>
    <p style="margin: 2rem 0;">
      <a href="test-mail.php?send=now" class="btn">&#9658; Send Test Email Now</a>
    </p>
  <?php endif; ?>
</div>
</body>
</html>

