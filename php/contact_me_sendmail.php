<?php
/**
 * This example shows making an SMTP connection with authentication.
 */

//SMTP needs accurate times, and the PHP time zone MUST be set
//This should be done in your php.ini, but this is how to do it if you don't have access to that
date_default_timezone_set('Etc/UTC');

require 'PHPMailerAutoload.php';

//sumbission data
$ipaddress = $_SERVER['REMOTE_ADDR'];
$date = date('Y.m.d');
$time = date('H:i:s');

//form data	
$name = $_POST['name'];
$phone = $_POST['phone'];
$email_address = $_POST['email'];
$message = $_POST['message'];

// create email body and send it
$to = 'richardw@astoriaadvertising.com'; // put your email!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
$from = isset($_POST["email"]) ? $_POST["email"] : "";
$subject = "CONTACT REQUEST FROM ALLEGION WEBSITE from:  $name";

$bodyHtml = '<p>You have recieved a new message from the contact form on your website.</p>';
$bodyHtml.= '<p><strong>Name: </strong>'.$name.'<br>';
$bodyHtml.= '<strong>Phone: </strong>'.$phone.'<br>';
$bodyHtml.= '<strong>Email: </strong>'.$email_address.'<br>';
$bodyHtml.= '<strong>Message: </strong>'.$message.'</p>';
$bodyHtml.= '<p>This message was sent from the IP Address: '.$ipaddress.' on '.$date.' at '.$time.'</p>';

//Create a new PHPMailer instance
$mail = new PHPMailer;
$mail->CharSet = "UTF-8";
// Set PHPMailer to use the sendmail transport
$mail->isSendmail();
//Set who the message is to be sent from
$mail->setFrom($from, $name);
//Set an alternative reply-to address
$mail->addReplyTo($email_address, $name);
//Set who the message is to be sent to
$mail->addAddress($to);
//Set the subject line
$mail->Subject = $subject;
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->MsgHTML($bodyHtml);

//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}