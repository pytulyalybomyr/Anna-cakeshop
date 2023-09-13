<?php
$requiredFields = array('namefull', 'count', 'price');
$error = false;
$errorMessage = '';

// Перевірка на заповненість обов'язкових полів для кожного товару
foreach ($_POST['namefull'] as $index => $namefull) {
    foreach ($requiredFields as $field) {
        if (empty($_POST[$field][$index])) {
            $error = true;
            $errorMessage .= "Field $field is missing for product $index.\n";
        }
    }
}

if ($error) {
    echo 'Вкажіть усі поля для всіх товарів.';
} else {
    // Формування повідомлення для електронної пошти
    $msg = "Замовлення:\n\n";
    foreach ($_POST['namefull'] as $index => $namefull) {
        $namefull = $_POST['namefull'][$index];
        $count = $_POST['count'][$index];
        $price = $_POST['price'][$index];

        $msg .= "Товар: $namefull\n";
        $msg .= "Кількість: $count\n";
        $msg .= "Загальна ціна: $price\n\n";
    }

    // Додаткові поля для користувача
    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];

    $msg .= "Ім'я: $name\n";
    $msg .= "Номер: $number\n";
    $msg .= "Пошта: $email\n";

    $to = 'Pytulya@outlook.com';
    $subject = 'E-MAIL.COM';

    // Додавання необхідних заголовків
    $headers = "Content-type: text/plain; charset=UTF-8\r\n";
    $headers .= "From: $name\r\n";

    $send_email = mail($to, $subject, $msg, $headers);

    if ($send_email) {
        echo 'Замовлення відправлено!';
    } else {
        echo 'Помилка відправки.';
    }
}
