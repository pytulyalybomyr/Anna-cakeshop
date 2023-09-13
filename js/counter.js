var splashInput = document.querySelector(".splash-input");
var splashVal = parseFloat(splashInput.value);
document.querySelector(".counter-elem__plus").onclick = function () {
    splashInput.value = ++splashVal + "кг";
}
document.querySelector(".counter-elem__minus").onclick = function () {
    if (splashVal > 0) {
        splashInput.value = --splashVal + "кг";
    } 
    if ((splashVal < 1)) {
        splashInput.value =  "500 грам";
    }
}