function cart() {
    $(".cart-scroll").click(function () {
        $(".popup").css("display", "block")
        $("body").addClass("stop-scrolling")
    })
    // $(".order-block__button").click(function () {
    //     $(".popup").css("display", "block")
    //     $("body").addClass("stop-scrolling")
    // })
    $(".popup-click__header").click(function () {
        $(".popup").css("display", "block")
        $("body").addClass("stop-scrolling")
    })
    $(document).mouseup( function (e) { 
        var popup = $('.popup-block');
        if (e.target != popup[0] && popup.has(e.target).length === 0){
            $(".popup").css("display", "none")
            $("body").removeClass("stop-scrolling")
        }
    });
    $(".popup-x").click(function () {
        $(".popup").css("display", "none")
        $("body").removeClass("stop-scrolling")
    })
}

cart()
