// Ваші функції для завантаження товарів на сторінку, додавання до кошика та зміни кількості товарів
// (не приводжу повністю, бо ви вже маєте їх)
// ...

// Функція для відправки кошика на сервер
function sendCartToServer(cartData) {
    $.ajax({
        url: "php/sender-cart.php",
        method: "POST",
        data: cartData,
        success: function (result) {
            // Виводимо повідомлення про результат відправки
            $('.output_message').text(result);
        },
        error: function () {
            $('.output_message').text('Помилка відправки');
        }
    });
}

// Функція для збору даних з кошика та відправки їх на сервер
function submitCart() {
    // Отримуємо дані з кошика
    var cartData = {
        name: $('[name="name"]').val(),
        email: $('[name="email"]').val(),
        number: $('[name="number"]').val(),
        namefull: [],
        count: [],
        price: []
    };

    $('.popup__cart').each(function () {
        cartData.namefull.push($(this).find('.shop-input').val());
        cartData.count.push($(this).find('.popup__cart-quintly_number').val());
        cartData.price.push($(this).find('.cost').val());
    });

    // Відправляємо дані на сервер
    sendCartToServer(cartData);
}

// Виклик функції submitCart при відправці форми
$('document').ready(function () {
    $('.myform-cart').on('submit', function (e) {
        e.preventDefault();
        submitCart();
    });
});

// Функції для завантаження товарів, додавання до кошика, зміни кількості товарів та відображення кошика
// (не приводжу повністю, бо ви вже маєте їх)
// ...