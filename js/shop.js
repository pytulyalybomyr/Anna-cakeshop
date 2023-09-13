var cart = {}; //моя корзина

$('document').ready(function () {
    loadGoods();
    checkCart();
    showMiniCart();
});

function loadGoods() {
    //загружаю товары на страницу
    $.getJSON('../json/list.json', function (data) {
        console.log(data);
        var out = '';
        for (var key in data) {
            out += '<div class="katalog-card" data-cart="biskit">';
            out += '<div class="katalog-card_out">';
            out += '<img class="katalog-card__img" src="' + data[key].image + '" alt="">';
            out += '<div class="katalog-card__text">';
            out += '<h1><span>' + data[key].nameS + '</span>' + data[key].name + '</h1>';
            out += '<div class="katalog-card__text-stars">';
            out += '<img src="img/star.svg" alt="">';
            out += '<img src="img/star.svg" alt="">';
            out += '<img src="img/star.svg" alt="">';
            out += '<img src="img/star.svg" alt="">';
            out += '<img src="img/star.svg" alt="">';
            out += '</div>';
            out += '<div class="katalog-card__text-price">';
            out += '<h2>' + data[key].cost + 'UAN</h2>';
            out += '</div>';
            out += '<div class="katalog-card__text-main">';
            out += '<div class="katalog-card__text-button" data-art="' + key + '">';
            out += '</div>';
            out += '</div>';
            out += '</div>';
            out += '</div>';
            out += '</div>';
        }
        $('.katalog-cards').html(out);
        $('.katalog-card__text-button').on('click', addToCart);
    });
}

function addToCart() {
    //добавляем товар в корзину
    var articul = $(this).attr('data-art');
    if (cart[articul] != undefined) {
        cart[articul]++;
    } else {
        cart[articul] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    //console.log(cart);
    showMiniCart();
}

function checkCart() {
    //проверяю наличие корзины в localStorage;
    if (localStorage.getItem('cart') != null) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}

function showMiniCart() {
    cart = {}

    $.getJSON('/json/list.json', function (data) {
        var goods = data; //все товары в массиве
        // console.log(goods);
        checkCart();
        //console.log(cart);
        showCart(); //вывожу товары на страницу

        function showCart() {
            if ($.isEmptyObject(cart)) {
                //корзина пуста
                var out = 'Корзина пуста. Добавьте товар в корзину <a href="index.html">главная страница</a>';
                $('#my-cart').html(out);
            } else {
                var out = '';
                for (var key in cart) {
                    out += '<div class="popup__cart">';
                    out += '<img src="' + goods[key].image + '" alt="">';
                    out += '<input type="text" name="namefull[]" class="shop-input" value="' + goods[key].namafull + '" readonly>';
                    // out += '<h3><span>' + goods[key].nameS + '</span>' + goods[key].name + '</h3>';
                    out += '<input type="text" name="price[]" class="cost" value="' + cart[key] * goods[key].cost + 'UAN" readonly>';
                    // out += '<h3 class="cost">' + cart[key] * goods[key].cost + 'UAN</h3>';
                    out += '<div class="popup__cart-quintly">';
                    out += '<button class="minus" data-art="' + key + '">-</button>';
                    out += '<input class="popup__cart-quintly_number" type="text" name="count[]" value="' + cart[key] + '" readonly>'
                    // out += '<div class="popup__cart-quintly_number">' + cart[key] + '</div>';
                    out += '<button class="plus" data-art="' + key + '">+</button>';
                    out += '</div>';
                    out += '<p class="delete" data-art="' + key + '">✖</p>';
                    out += '</div>';
                }
                $('#my-cart').html(out);
                $('.plus').on('click', plusGoods);
                $('.minus').on('click', minusGoods);
                $('.delete').on('click', deleteGoods);
            }
        }

        function plusGoods() {
            var articul = $(this).attr('data-art');
            if ((cart[articul] <= 8)) {
                cart[articul]++;
            } else {
                stop
            }

            saveCartToLS(); //сохраняю корзину в localStorage
            showCart();
        }

        function minusGoods() {
            var articul = $(this).attr('data-art');
            if (cart[articul] > 1) {
                cart[articul]--;
            } else {
                delete cart[articul];
            }
            saveCartToLS(); //сохраняю корзину в localStorage
            showCart();
        }

        function deleteGoods() {
            var articul = $(this).attr('data-art');
            delete cart[articul];
            saveCartToLS(); //сохраняю корзину в localStorage
            showCart();
        }


    });

    function checkCart() {
        //проверяю наличие корзины в localStorage;
        if (localStorage.getItem('cart') != null) {
            cart = JSON.parse(localStorage.getItem('cart'));
        }
    }

    function saveCartToLS() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}