

var frm = document.frmCart.chk;
var chked = eval(frm.value(), ",");





var p6Link = './port6.html'
var p4Link = './port4.html'

$(document).keyup(function(event){
    if(event.which === 13) {
        window.location.href = p6Link;
    }
})

$(document).keyup(function(event){
    if(event.which === 39) {
        window.location.href = p6Link;
    }
})

$(document).keyup(function(event){
    if(event.which === 37) {
        window.location.href = p4Link;
    }
})

var swiper = new Swiper(".main-5", {
    loop: true,
    navigation: {
    nextEl: ".slide_R",
    prevEl: ".slide_L",
    },
});







