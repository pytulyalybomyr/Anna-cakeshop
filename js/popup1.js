function order() {
    $(".order-block__button").click(function () {
        $(".popup1").css("display", "block")
        $("body").addClass("stop-scrolling1")
    })
    $(".popup1-click__header").click(function () {
        $(".popup").css("display", "block")
        $("body").addClass("stop-scrolling1")
    })
    $(document).mouseup( function (e1) { 
        var popup1 = $('.popup1-block');
        if (e1.target != popup1[0] && popup1.has(e1.target).length === 0){
            $(".popup1").css("display", "none")
            $("body").removeClass("stop-scrolling1")
        }
    });
    $(".popup1-x").click(function () {
        $(".popup1").css("display", "none")
        $("body").removeClass("stop-scrolling1")
    })
}

order()