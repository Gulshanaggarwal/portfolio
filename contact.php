<?php
if($_POST["submit"]){
	$name = $_POST['fname'];
	$sendermail = $_POST['Email'];
    $phone = $_POST['phone'];
    $Message = $_POST['message'];
    $to="gulshanaggarwal333@gmail.com";
    $subject='My website message';

    //mail body

    $mailbody=" Name: $name\n Email: $sender_mail\n Phone_number: $phone\n\n$Message";

    //mail function
    mail($to, $subject, $mailbody,"From: $name <$sendermail>");


}
?>

