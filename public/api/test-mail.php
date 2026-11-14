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
    .box { max-width: 760px; margin: 0 auto; background: #FFFFFF; border: 1px solid #D8C7B5; border-radius: 8px; padding: 2rem; box-shadow: 0 4px 15px rgba(0,0,0,0.08); }
    h1 { color: #8C6226; font-size: 1.5rem; margin-top: 0; }
    .status-badge { display: inline-block; padding: 0.35rem 0.75rem; border-radius: 4px; font-weight: bold; margin-bottom: 1rem; }
    .ok { background: #D1E7DD; color: #0F5132; }
    .warn { background: #FFF3CD; color: #664D03; }
    .err { background: #F8D7DA; color: #842029; }
    table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.92rem; }
    th, td { text-align: left; padding: 0.65rem 0.5rem; border-bottom: 1px solid #EAE0D5; }
    th { color: #7B6856; width: 38%; }
    .code { font-family: monospace; background: #F4EBE1; padding: 0.2rem 0.4rem; border-radius: 3px; font-weight: bold; }
    .btn { display: inline-block; background: #1E5E44; color: #FFFFFF; padding: 0.75rem 1.25rem; text-decoration: none; border-radius: 4px; font-weight: bold; margin-right: 0.5rem; margin-bottom: 0.5rem; }
    .btn:hover { background: #164834; }
    .btn-gold { background: #8C6226; }
    .btn-gold:hover { background: #734f1e; }
    pre { background: #231C16; color: #E5C158; padding: 1rem; border-radius: 6px; overflow-x: auto; font-size: 0.85rem; }
  </style>
</head>
<body>
<div class="box">
  <h1>Abyssinian Tour Operator — Dual Mailbox Diagnostics</h1>
  <p>Test authenticated SSL SMTP dispatch for both <strong>info@</strong> and <strong>b2b@</strong> mailboxes.</p>

  <table>
    <tr>
      <th>SMTP Server Host:</th>
      <td><span class="code"><?= htmlspecialchars(SMTP_HOST) ?>:<?= SMTP_PORT ?> (SSL)</span></td>
    </tr>
    <tr>
      <th>Mailbox 1 (General &amp; Tour Inquiry):</th>
      <td><span class="code"><?= htmlspecialchars(SMTP_INFO_USERNAME) ?></span></td>
    </tr>
    <tr>
      <th>Mailbox 2 (B2B Partner Desk):</th>
      <td><span class="code"><?= htmlspecialchars(SMTP_B2B_USERNAME) ?></span></td>
    </tr>
    <tr>
      <th>Backup Mirror Email:</th>
      <td><span class="code"><?= htmlspecialchars(ABYSSINIAN_BACKUP_EMAIL) ?></span></td>
    </tr>
    <tr>
      <th>PHP OpenSSL Extension:</th>
      <td>
        <?php if (extension_loaded('openssl')): ?>
          <span class="status-badge ok">&#10003; OpenSSL Enabled</span>
        <?php else: ?>
          <span class="status-badge err">&#10008; OpenSSL Disabled</span>
        <?php endif; ?>
      </td>
    </tr>
  </table>

  <?php if (!empty($test_action)): ?>
    <h2>Test Execution Result</h2>
    <?php
      $results = [];

      if ($test_action === 'info' || $test_action === 'all' || $test_action === 'now') {
        $subj = "Test from info@abyssiniatouroperator.com — " . date('Y-m-d H:i:s');
        $body = "Diagnostic test from info@ mailbox.\nTime: " . date('r') . "\nHost: " . SMTP_HOST . "\n";
        $sent_info = abyssinian_dispatch_mail([ABYSSINIAN_INFO_EMAIL, ABYSSINIAN_BACKUP_EMAIL], $subj, $body, 'Info Test', 'test@abyssiniatouroperator.com', 'info');
        $results['info'] = $sent_info;
      }

      if ($test_action === 'b2b' || $test_action === 'all') {
        $subj = "Test from b2b@abyssiniatouroperator.com — " . date('Y-m-d H:i:s');
        $body = "Diagnostic test from b2b@ mailbox.\nTime: " . date('r') . "\nHost: " . SMTP_HOST . "\n";
        $sent_b2b = abyssinian_dispatch_mail([ABYSSINIAN_B2B_EMAIL, ABYSSINIAN_BACKUP_EMAIL], $subj, $body, 'B2B Test', 'test@abyssiniatouroperator.com', 'b2b');
        $results['b2b'] = $sent_b2b;
      }
    ?>

    <?php foreach ($results as $channel => $sent): ?>
      <div style="margin-bottom: 1rem;">
        <strong>Mailbox <?= strtoupper($channel) ?> (<?= htmlspecialchars($channel === 'b2b' ? SMTP_B2B_USERNAME : SMTP_INFO_USERNAME) ?>):</strong><br>
        <?php if ($sent): ?>
          <span class="status-badge ok" style="padding: 0.5rem 0.85rem; margin-top: 0.35rem;">
            &#10004; Message Transmitted Successfully!
          </span>
        <?php else: ?>
          <span class="status-badge err" style="padding: 0.5rem 0.85rem; margin-top: 0.35rem;">
            &#10008; Message Transmission Failed!
          </span>
        <?php endif; ?>
      </div>
    <?php endforeach; ?>

    <h3>Debug Log Contents (Last 12 lines):</h3>
    <pre><?php
      $log_file = __DIR__ . '/mail_debug.log';
      if (file_exists($log_file)) {
        $lines = array_slice(file($log_file), -12);
        echo htmlspecialchars(implode('', $lines));
      } else {
        echo "No debug logs recorded yet.";
      }
    ?></pre>

    <p><a href="test-mail.php" class="btn btn-gold">Back to Overview</a></p>
  <?php else: ?>
    <div style="margin: 2rem 0; display: flex; flex-wrap: wrap; gap: 0.75rem;">
      <a href="test-mail.php?send=info" class="btn">&#9658; Test info@ Mailbox</a>
      <a href="test-mail.php?send=b2b" class="btn">&#9658; Test b2b@ Mailbox</a>
      <a href="test-mail.php?send=all" class="btn btn-gold">&#9658; Test Both Mailboxes</a>
    </div>
  <?php endif; ?>
</div>
</body>
</html>
