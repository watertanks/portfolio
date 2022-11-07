



var p5Link = './port5.html'
var p3Link = './port3.html'

$(document).keyup(function(event){
    if(event.which === 13) {
        window.location.href = p5Link;
    }
})

$(document).keyup(function(event){
    if(event.which === 39) {
        window.location.href = p5Link;
    }
})

$(document).keyup(function(event){
    if(event.which === 37) {
        window.location.href = p3Link;
    }
})


    let num=0;
$('.main-5-2 > span:nth-of-type(1) button').on('click',function(){
            
    if(num > 0 && num < 16){ num-- }

    $('.main-5-3').animate({
        marginLeft : -$('.main-5-3 div').width()*num
    },{queue:false})

})


$('.main-5-2 > span:nth-of-type(2) button').on('click',function(){
    if(num < 15 ){ num++ }

    $('.main-5-3').animate({
        marginLeft : -$('.main-5-3 div').width()*num
    },{queue:false})
})