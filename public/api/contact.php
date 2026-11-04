<?php
/**
 * Abyssinian Tour Operator — Contact & Expedition Inquiry Handler
 * Compatible with cPanel Shared Hosting (PHP 7.4 - 8.3+)
 */

header('Content-Type: application/json; charset=UTF-8');

// Include global mail configuration
require_once __DIR__ . '/mail-config.php';

// Prevent non-POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'status' => 'error',
        'message' => 'Method Not Allowed. Please submit the form via POST.'
    ]);
    exit;
}

// Anti-Spam Honeypot check (silently drop bot submissions)
if (!empty($_POST['website_hp_check'])) {
    echo json_encode([
        'status' => 'success',
        'message' => 'Your inquiry has been received.'
    ]);
    exit;
}

// Sanitize & Validate Inputs
$full_name     = filter_input(INPUT_POST, 'fullName', FILTER_SANITIZE_SPECIAL_CHARS);
$email         = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$phone         = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_SPECIAL_CHARS);
$country       = filter_input(INPUT_POST, 'country', FILTER_SANITIZE_SPECIAL_CHARS) ?: 'Not provided';
$inquiry_type  = filter_input(INPUT_POST, 'inquiryType', FILTER_SANITIZE_SPECIAL_CHARS) ?: 'General Private Inquiry';
$tour_name     = filter_input(INPUT_POST, 'tourName', FILTER_SANITIZE_SPECIAL_CHARS) ?: 'Custom Tour / General';
$travel_dates  = filter_input(INPUT_POST, 'travelDates', FILTER_SANITIZE_SPECIAL_CHARS) ?: 'Flexible';
$duration      = filter_input(INPUT_POST, 'duration', FILTER_SANITIZE_SPECIAL_CHARS) ?: 'Not specified';
$adults        = filter_input(INPUT_POST, 'adults', FILTER_SANITIZE_NUMBER_INT) ?: '2';
$children      = filter_input(INPUT_POST, 'children', FILTER_SANITIZE_NUMBER_INT) ?: '0';
$notes         = filter_input(INPUT_POST, 'notes', FILTER_SANITIZE_SPECIAL_CHARS) ?: 'None provided';

// Desired services array handling
$services = [];
if (!empty($_POST['services']) && is_array($_POST['services'])) {
    foreach ($_POST['services'] as $svc) {
        $services[] = htmlspecialchars(trim($svc), ENT_QUOTES, 'UTF-8');
    }
}
$services_list = !empty($services) ? implode(', ', $services) : 'Standard private ground handling';

// Validate required fields
if (empty($full_name) || !$email || empty($phone)) {
    http_response_code(400);
    echo json_encode([
        'status' => 'error',
        'message' => 'Please provide your full name, valid email address, and phone/WhatsApp number.'
    ]);
    exit;
}

// Build Email Subject & Body
$subject = "New Expedition Inquiry: " . $full_name . " — " . $tour_name;

$message_body = "====================================================\n";
$message_body .= "ABYSSINIAN TOUR OPERATOR — EXPEDITION INQUIRY\n";
$message_body .= "====================================================\n\n";
$message_body .= "CLIENT DETAILS:\n";
$message_body .= "• Full Name / Company: " . $full_name . "\n";
$message_body .= "• Email Address: " . $email . "\n";
$message_body .= "• Phone / WhatsApp: " . $phone . "\n";
$message_body .= "• Country of Residence: " . $country . "\n";
$message_body .= "• Inquiry Category: " . $inquiry_type . "\n\n";

$message_body .= "EXPEDITION REQUIREMENTS:\n";
$message_body .= "• Selected Tour / Circuit: " . $tour_name . "\n";
$message_body .= "• Estimated Dates / Month: " . $travel_dates . "\n";
$message_body .= "• Target Duration: " . $duration . "\n";
$message_body .= "• Number of Travelers: Adults: " . $adults . " | Children: " . $children . "\n";
$message_body .= "• Requested Services: " . $services_list . "\n\n";

$message_body .= "ADDITIONAL NOTES / SPECIAL REQUESTS:\n";
$message_body .= $notes . "\n\n";
$message_body .= "====================================================\n";
$message_body .= "Submission Timestamp: " . date('Y-m-d H:i:s') . " (EAT / Server)\n";
$message_body .= "Client IP: " . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown') . "\n";

// ALWAYS save a local backup log on the server so no inquiry is ever lost
$log_entry = "[" . date('Y-m-d H:i:s') . "] INQUIRY from $full_name <$email>, Phone: $phone, Tour: $tour_name, Dates: $travel_dates\n";
@file_put_contents(__DIR__ . '/inquiries_backup.log', $log_entry, FILE_APPEND | LOCK_EX);

// Recipients list
$recipients = [
    ABYSSINIAN_INFO_EMAIL,
    ABYSSINIAN_BACKUP_EMAIL
];

// Dispatch email
$mail_sent = abyssinian_dispatch_mail($recipients, $subject, $message_body, $full_name, $email);

echo json_encode([
    'status' => 'success',
    'mail_delivered' => $mail_sent,
    'message' => 'Thank you, ' . htmlspecialchars($full_name) . '! Your expedition inquiry has been securely delivered to Dessiew Abunie Dejenie and our Addis Ababa operations desk. We will send your custom proposal within 12 hours.'
]);
?>
