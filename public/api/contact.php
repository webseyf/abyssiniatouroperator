<?php
/**
 * ==============================================================================
 * Abyssinian Tour Operator — Master Tour Inquiry & Expedition Handler
 * Compatible with cPanel Shared Hosting (PHP 7.4 - 8.3+)
 * Location: public_html/api/contact.php
 * ==============================================================================
 */

header('Content-Type: application/json; charset=UTF-8');

// Include global mail configuration & SMTP engine
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

// Helper to sanitize arrays of checkboxes
function sanitize_array($arr) {
    if (empty($arr) || !is_array($arr)) return [];
    $cleaned = [];
    foreach ($arr as $item) {
        $cleaned[] = htmlspecialchars(trim($item), ENT_QUOTES, 'UTF-8');
    }
    return $cleaned;
}

// ==============================================================================
// 1. TRAVELER / PARTNER INFORMATION
// ==============================================================================
$full_name      = filter_input(INPUT_POST, 'fullName', FILTER_SANITIZE_SPECIAL_CHARS);
$company_name   = filter_input(INPUT_POST, 'companyName', FILTER_SANITIZE_SPECIAL_CHARS) ?: 'Direct Private Traveler';
$email          = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$phone          = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_SPECIAL_CHARS);
$country        = filter_input(INPUT_POST, 'country', FILTER_SANITIZE_SPECIAL_CHARS) ?: 'Not provided';
$guide_language = filter_input(INPUT_POST, 'guideLanguage', FILTER_SANITIZE_SPECIAL_CHARS) ?: 'English';
$age_range      = filter_input(INPUT_POST, 'ageRange', FILTER_SANITIZE_SPECIAL_CHARS) ?: 'Not specified';

// Validate core required fields
if (empty($full_name) || !$email || empty($phone)) {
    http_response_code(400);
    echo json_encode([
        'status' => 'error',
        'message' => 'Please provide your Full Name, valid Email Address, and Phone / WhatsApp number.'
    ]);
    exit;
}

// ==============================================================================
// 2. TRAVEL DATES & GROUP COMPOSITION
// ==============================================================================
$arrival_date   = filter_input(INPUT_POST, 'arrivalDate', FILTER_SANITIZE_SPECIAL_CHARS) ?: 'Flexible';
$departure_date = filter_input(INPUT_POST, 'departureDate', FILTER_SANITIZE_SPECIAL_CHARS) ?: 'Flexible';
$duration       = filter_input(INPUT_POST, 'duration', FILTER_SANITIZE_SPECIAL_CHARS) ?: 'To be advised';
$adults         = filter_input(INPUT_POST, 'adults', FILTER_SANITIZE_NUMBER_INT) ?: '2';
$children       = filter_input(INPUT_POST, 'children', FILTER_SANITIZE_SPECIAL_CHARS) ?: '0';
$dates_flexible = filter_input(INPUT_POST, 'datesFlexible', FILTER_SANITIZE_SPECIAL_CHARS) ?: 'No (Fixed)';
$flexible_days  = filter_input(INPUT_POST, 'flexibleDays', FILTER_SANITIZE_SPECIAL_CHARS);
if ($dates_flexible === 'Yes' && !empty($flexible_days)) {
    $dates_flexible .= " (± {$flexible_days} days)";
}

// ==============================================================================
// 3. DESTINATIONS & TOUR INTERESTS
// ==============================================================================
$regions    = sanitize_array($_POST['regions'] ?? []);
$regions_str = !empty($regions) ? implode(', ', $regions) : 'Tailor-Made Route to be proposed';

$tour_style = sanitize_array($_POST['tourStyle'] ?? []);
$tour_style_str = !empty($tour_style) ? implode(', ', $tour_style) : 'Private Tailor-Made';

$target_tour = filter_input(INPUT_POST, 'tourName', FILTER_SANITIZE_SPECIAL_CHARS) ?: 'Bespoke Custom Expedition';

// ==============================================================================
// 4. ACCOMMODATION, TRANSPORT & MEAL PLAN PREFERENCES
// ==============================================================================
$accommodation = sanitize_array($_POST['accommodation'] ?? []);
$accommodation_str = !empty($accommodation) ? implode(', ', $accommodation) : 'Mid-Range / Best Available';

$room_config = sanitize_array($_POST['roomConfig'] ?? []);
$room_config_str = !empty($room_config) ? implode(', ', $room_config) : 'Double / Twin';

$meal_plan = filter_input(INPUT_POST, 'mealPlan', FILTER_SANITIZE_SPECIAL_CHARS) ?: 'Full Board (B, L, D)';
$domestic_flights = filter_input(INPUT_POST, 'domesticFlights', FILTER_SANITIZE_SPECIAL_CHARS) ?: 'Yes (Ethiopian Airlines)';
$budget = filter_input(INPUT_POST, 'budget', FILTER_SANITIZE_SPECIAL_CHARS) ?: 'Standard Quotation';
$vehicle_pref = filter_input(INPUT_POST, 'vehiclePreference', FILTER_SANITIZE_SPECIAL_CHARS) ?: 'Toyota Land Cruiser 4x4';

// ==============================================================================
// 5. DIETARY REQUIREMENTS, HEALTH & MOBILITY NEEDS
// ==============================================================================
$dietary = sanitize_array($_POST['dietary'] ?? []);
$dietary_str = !empty($dietary) ? implode(', ', $dietary) : 'No Restrictions';

$dietary_notes = filter_input(INPUT_POST, 'dietaryNotes', FILTER_SANITIZE_SPECIAL_CHARS) ?: 'None reported';
$health_notes  = filter_input(INPUT_POST, 'healthMobilityNotes', FILTER_SANITIZE_SPECIAL_CHARS) ?: 'None reported';

// ==============================================================================
// 6. SPECIAL OCCASIONS, EQUIPMENT & CUSTOM REQUESTS
// ==============================================================================
$special_occasions = sanitize_array($_POST['specialOccasions'] ?? []);
$special_occasions_str = !empty($special_occasions) ? implode(', ', $special_occasions) : 'Standard Expedition';

$notes           = filter_input(INPUT_POST, 'notes', FILTER_SANITIZE_SPECIAL_CHARS) ?: 'None provided';
$referral_source = filter_input(INPUT_POST, 'referralSource', FILTER_SANITIZE_SPECIAL_CHARS) ?: 'Website Direct';
$signature_date  = filter_input(INPUT_POST, 'signatureDate', FILTER_SANITIZE_SPECIAL_CHARS) ?: date('Y-m-d');
$signature       = filter_input(INPUT_POST, 'signature', FILTER_SANITIZE_SPECIAL_CHARS) ?: $full_name;

// ==============================================================================
// BUILD COMPREHENSIVE DOSSIER EMAIL BODY
// ==============================================================================
$subject = "TOUR INQUIRY: {$full_name} — {$target_tour} ({$arrival_date})";

$message_body = "======================================================================\n";
$message_body .= "ABYSSINIA TOUR OPERATOR — OFFICIAL TOUR INQUIRY DOSSIER\n";
$message_body .= "International Client & B2B Partner Request\n";
$message_body .= "======================================================================\n\n";

$message_body .= "1. TRAVELER / PARTNER INFORMATION\n";
$message_body .= "----------------------------------------------------------------------\n";
$message_body .= "• Primary Contact Name:  " . $full_name . "\n";
$message_body .= "• Company / Agency:      " . $company_name . "\n";
$message_body .= "• Email Address:         " . $email . "\n";
$message_body .= "• Phone / WhatsApp:      " . $phone . "\n";
$message_body .= "• Nationality / Country: " . $country . "\n";
$message_body .= "• Preferred Guide Lang:  " . $guide_language . "\n";
$message_body .= "• Age Range of Group:    " . $age_range . "\n\n";

$message_body .= "2. TRAVEL DATES & GROUP COMPOSITION\n";
$message_body .= "----------------------------------------------------------------------\n";
$message_body .= "• Estimated Arrival:     " . $arrival_date . "\n";
$message_body .= "• Estimated Departure:   " . $departure_date . "\n";
$message_body .= "• Total Duration:        " . $duration . "\n";
$message_body .= "• Adults:                " . $adults . "\n";
$message_body .= "• Children (with Ages):  " . $children . "\n";
$message_body .= "• Dates Flexible:        " . $dates_flexible . "\n\n";

$message_body .= "3. DESTINATIONS & TOUR INTERESTS\n";
$message_body .= "----------------------------------------------------------------------\n";
$message_body .= "• Target Circuit/Tour:   " . $target_tour . "\n";
$message_body .= "• Preferred Regions:     " . $regions_str . "\n";
$message_body .= "• Tour Style & Pace:     " . $tour_style_str . "\n\n";

$message_body .= "4. ACCOMMODATION, TRANSPORT & MEAL PLAN\n";
$message_body .= "----------------------------------------------------------------------\n";
$message_body .= "• Accommodation Level:   " . $accommodation_str . "\n";
$message_body .= "• Room Configuration:    " . $room_config_str . "\n";
$message_body .= "• Preferred Meal Plan:   " . $meal_plan . "\n";
$message_body .= "• Domestic Flights:      " . $domestic_flights . "\n";
$message_body .= "• Est. Budget Per Pax:   " . $budget . "\n";
$message_body .= "• Vehicle Preference:    " . $vehicle_pref . "\n\n";

$message_body .= "5. DIETARY, HEALTH & MOBILITY NEEDS\n";
$message_body .= "----------------------------------------------------------------------\n";
$message_body .= "• Dietary Restrictions:  " . $dietary_str . "\n";
$message_body .= "• Allergies/Diet Notes:  " . $dietary_notes . "\n";
$message_body .= "• Health/Mobility Notes: " . $health_notes . "\n\n";

$message_body .= "6. SPECIAL OCCASIONS, EQUIPMENT & CUSTOM REQUESTS\n";
$message_body .= "----------------------------------------------------------------------\n";
$message_body .= "• Occasions / Permits:   " . $special_occasions_str . "\n";
$message_body .= "• Custom Itinerary Notes:\n" . $notes . "\n";
$message_body .= "• Referral Source:       " . $referral_source . "\n";
$message_body .= "• Signature / Ack:       " . $signature . " (Dated: " . $signature_date . ")\n\n";

$message_body .= "======================================================================\n";
$message_body .= "Submission Timestamp:    " . date('Y-m-d H:i:s') . " (EAT)\n";
$message_body .= "Client IP Address:       " . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown') . "\n";
$message_body .= "======================================================================\n";

// ALWAYS save a local backup log on the server so no inquiry is ever lost
$log_entry = "[" . date('Y-m-d H:i:s') . "] INQUIRY from {$full_name} <{$email}>, Phone: {$phone}, Arrival: {$arrival_date}, Route: {$regions_str}\n";
@file_put_contents(__DIR__ . '/inquiries_backup.log', $log_entry, FILE_APPEND | LOCK_EX);

// Recipients list
$recipients = [
    ABYSSINIAN_INFO_EMAIL,
    ABYSSINIAN_BACKUP_EMAIL
];

// Dispatch email via authenticated SMTP
$mail_sent = abyssinian_dispatch_mail($recipients, $subject, $message_body, $full_name, $email, 'info');

echo json_encode([
    'status' => 'success',
    'mail_delivered' => $mail_sent,
    'message' => 'Thank you, ' . htmlspecialchars($full_name) . '! Your official Tour Inquiry Form has been securely delivered to Dessiew Abunie Dejenie and our Addis Ababa operations desk. Our team will review your group requirements and dispatch a custom quotation and logistics plan within 12 hours.'
]);
?>
