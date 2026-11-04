<?php
/**
 * Abyssinian Tour Operator — B2B Partner Application Handler
 * Direct dispatch to b2b@abyssiniatouroperator.com
 */

header('Content-Type: application/json; charset=UTF-8');

$to_emails = [
    'b2b@abyssiniatouroperator.com',
    'abyssiniantouroperator@gmail.com'
];
$to_email = implode(', ', $to_emails);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'status' => 'error',
        'message' => 'Method Not Allowed.'
    ]);
    exit;
}

$agency_name     = filter_input(INPUT_POST, 'agencyName', FILTER_SANITIZE_SPECIAL_CHARS);
$contact_name    = filter_input(INPUT_POST, 'contactName', FILTER_SANITIZE_SPECIAL_CHARS);
$email           = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$phone           = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_SPECIAL_CHARS);
$country         = filter_input(INPUT_POST, 'country', FILTER_SANITIZE_SPECIAL_CHARS);
$client_market   = filter_input(INPUT_POST, 'clientMarket', FILTER_SANITIZE_SPECIAL_CHARS) ?: 'Global';
$passengers      = filter_input(INPUT_POST, 'annualPassengers', FILTER_SANITIZE_SPECIAL_CHARS) ?: '1-10 Pax';
$inquiry_details = filter_input(INPUT_POST, 'inquiryDetails', FILTER_SANITIZE_SPECIAL_CHARS) ?: 'NET tariff book request';

if (empty($agency_name) || empty($contact_name) || !$email || empty($phone)) {
    http_response_code(400);
    echo json_encode([
        'status' => 'error',
        'message' => 'Please provide Agency Name, Contact Person, Business Email, and Phone number.'
    ]);
    exit;
}

$subject = "B2B Partner Registration & NET Tariff Request: " . $agency_name;

$message_body = "====================================================\n";
$message_body .= "ABYSSINIAN TOUR OPERATOR — B2B PARTNER APPLICATION\n";
$message_body .= "====================================================\n\n";
$message_body .= "AGENCY DETAILS:\n";
$message_body .= "• Agency / Brand Name: " . $agency_name . "\n";
$message_body .= "• Contact Person & Title: " . $contact_name . "\n";
$message_body .= "• Business Email: " . $email . "\n";
$message_body .= "• Phone / WhatsApp: " . $phone . "\n";
$message_body .= "• Operating Country / City: " . $country . "\n";
$message_body .= "• Primary Client Market: " . $client_market . "\n";
$message_body .= "• Estimated Annual Passengers: " . $passengers . "\n\n";

$message_body .= "INQUIRY / COOPERATION DETAILS:\n";
$message_body .= $inquiry_details . "\n\n";
$message_body .= "====================================================\n";
$message_body .= "Submission Timestamp: " . date('Y-m-d H:i:s') . " (EAT)\n";
$message_body .= "Agent IP: " . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown') . "\n";

$headers = [];
$headers[] = 'From: Abyssinian B2B Portal <noreply@abyssiniatouroperator.com>';
$headers[] = 'Reply-To: ' . $contact_name . ' <' . $email . '>';
$headers[] = 'X-Mailer: PHP/' . phpversion();
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';

$mail_sent = @mail($to_email, $subject, $message_body, implode("\r\n", $headers));

echo json_encode([
    'status' => 'success',
    'message' => 'Thank you, ' . htmlspecialchars($contact_name) . '! Your B2B partner application for ' . htmlspecialchars($agency_name) . ' has been registered. Dessiew Abunie Dejenie will dispatch your confidential NET Tariff Book within 12 hours.'
]);
?>

