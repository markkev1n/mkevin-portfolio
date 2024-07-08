<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Set recipient and subject
    $to = "markkevincacho@gmail.com";
    $subject = "Contact Form Submission from $name";

    // Construct email body
    $email_body = "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Message:\n$message\n";

    // Send email
    if (mail($to, $subject, $email_body)) {
        echo "<script>alert('Message sent successfully!');</script>";
    } else {
        echo "<script>alert('Failed to send message.');</script>";
    }
}
?>
