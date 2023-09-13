<?php


// here we check if all fields are filled.
$required = array('name', 'email', 'number', 'city', 'choiceca', 'choicefill', 'count', 'wishes');
$error = false;
foreach ($required as $field) {
	if (empty($_REQUEST[$field])) {
		$error = true;
	}
}

//if something is not filled(empty) and error is true
if ($error) {
	echo 'this is miss';
}
// if everything is filled then we execute the mail function
else {

	$name = $_REQUEST['name'];
	$email = $_REQUEST['email'];
	$number = $_REQUEST['number'];
	$city = $_REQUEST['city'];
	$choiceca = $_REQUEST['choiceca'];
	$choicefill = $_REQUEST['choicefill'];
	$count = $_REQUEST['count'];
	$wishes = $_REQUEST['wishes'];

	$msg = "
Ім'я: $name
Номер: $number 
Місто: $city

Який торт: $choiceca
Який смак: $choicefill
Кількість: $count 
Побажання: $wishes";

	// Set your email address where you want to receive emails.
	$to = 'Pytulya@outlook.com';
	$subject = 'E-MAIL.COM';
	$send_email = mail($to, $subject, $msg, $email);


	if ($send_email == false) {
		echo 'this is error';
	} else {
		echo 'this is success';
	}
}
