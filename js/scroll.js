$(window).scroll(function(){
    if($(window).scrollTop()>250) {
        $(".cart-scroll").addClass("vision")
    }else{
        $(".cart-scroll").removeClass("vision")
    }
    
})