<?php
//variable setting
$name = $_REQUEST['fname'];
$email = $_REQUEST['Email'];
$phone = $_REQUEST['phone'];
$message = $_REQUEST['message'];

mail('gulshanaggarwal333@gmail.com' ,"My website" ,$message ,"From: $name <$email> <$phone>");
echo "<script type='text/javascript'>
alert('Your message sent succesfully');
window.history.log(-1); 
</script>";

