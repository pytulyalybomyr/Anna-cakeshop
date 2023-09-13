var insectionInput = document.querySelector(".insection1");
$(".insection1").click(function () {
    $(".s1item1").click(function () {
        // $(".insection1").vlas(document.querySelector('.s1item1').textContent)
        console.log(insectionInput.value)
        insectionInput.value = document.querySelector('.s1item1').textContent.trim()
    })
    $(".s1item2").click(function () {
        console.log(insectionInput.value)
        insectionInput.value = document.querySelector('.s1item2').textContent.trim()
    })
    $(".s1item3").click(function () {
        console.log(insectionInput.value)
        insectionInput.value = document.querySelector('.s1item3').textContent.trim()
    })

    if (!$(".menusection1").hasClass("input-active")) {
        $(".menusection1").addClass("input-active")
    } else {
        $(".menusection1").removeClass("input-active")
    }
})

var insectionInput2 = document.querySelector(".insection2");
$(".insection2").click(function () {
    $(".s2item1").click(function () {
        console.log(insectionInput.value)
        insectionInput2.value = document.querySelector('.s2item1').textContent.trim()
    })
    $(".s2item2").click(function () {
        console.log(insectionInput.value)
        insectionInput2.value = document.querySelector('.s2item2').textContent.trim()
    })
    $(".s2item3").click(function () {
        console.log(insectionInput.value)
        insectionInput2.value = document.querySelector('.s2item3').textContent.trim()
    })
    $(".s2item4").click(function () {
        console.log(insectionInput.value)
        insectionInput2.value = document.querySelector('.s2item4').textContent.trim()
    })
    $(".s2item5").click(function () {
        console.log(insectionInput.value)
        insectionInput2.value = document.querySelector('.s2item5').textContent.trim()
    })
    $(".s2item6").click(function () {
        console.log(insectionInput.value)
        insectionInput2.value = document.querySelector('.s2item6').textContent.trim()
    })

    if (!$(".menusection2").hasClass("input-active")) {
        $(".menusection2").addClass("input-active")
    } else {
        $(".menusection2").removeClass("input-active")
    }
})
// $(".insection1").click(function () {
//     $(".s1item1").click(function () {
//         $(".insection1").html(document.querySelector('.s1item1').textContent)
//     })
//     $(".s1item2").click(function () {
//         $(".insection1").html(document.querySelector('.s1item2').textContent);
//     })
//     $(".s1item3").click(function () {
//         $(".insection1").html(document.querySelector('.s1item3').textContent);
//     })

//     if(!$(".menusection1").hasClass("input-active")) {
//         $(".menusection1").addClass("input-active")
//     }else{
//         $(".menusection1").removeClass("input-active")
//     }
// })


// $(".insection2").click(function () {
//     $(".s2item1").click(function () {
//         $(".insection2").html(document.querySelector('.s2item1').textContent)
//     })
//     $(".s2item2").click(function () {
//         $(".insection2").html(document.querySelector('.s2item2').textContent);
//     })
//     $(".s2item3").click(function () {
//         $(".insection2").html(document.querySelector('.s2item3').textContent);
//     })
//     $(".s2item4").click(function () {
//         $(".insection2").html(document.querySelector('.s2item4').textContent)
//     })
//     $(".s2item5").click(function () {
//         $(".insection2").html(document.querySelector('.s2item5').textContent);
//     })
//     $(".s2item6").click(function () {
//         $(".insection2").html(document.querySelector('.s2item6').textContent);
//     })

//     if(!$(".menusection2").hasClass("input-active")) {
//         $(".menusection2").addClass("input-active")
//     }else{
//         $(".menusection2").removeClass("input-active")
//     }
// })