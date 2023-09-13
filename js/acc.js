var faqall = document.querySelectorAll('.FAQ-block');
var headerMain = document.querySelectorAll(".FAQ-block-acc");

for (faq of faqall) {

    faq.addEventListener("click", function() {   
        $("*").children(".FAQ-block-acc").removeClass("act");
        $("*").children(".FAQ-block__text-img").removeClass("actImg");

        // if (!$(".FAQ-block-acc").hasClass('act')){
        $(this).children(".FAQ-block-acc").addClass("act");
        var header_main = $(this).children(".FAQ-block__text")
        header_main.children(".FAQ-block__text-img").addClass("actImg");
    })
}



var faqall2 = document.querySelectorAll('.FAQ-block2');
var headerMain = document.querySelectorAll(".FAQ-block2-acc2");

for (faq2 of faqall2) {

    faq2.addEventListener("click", function() {   
        $("*").children(".FAQ-block2-acc2").removeClass("act2");
        $("*").children(".FAQ-block2__text2-img2").removeClass("actImg2");

        // if (!$(".FAQ-block-acc").hasClass('act')){
        $(this).children(".FAQ-block2-acc2").addClass("act2");
        var header_main = $(this).children(".FAQ-block2__text2")
        header_main.children(".FAQ-block2__text2-img2").addClass("actImg2");
    })
}