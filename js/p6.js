



var p7Link = './port7.html'
var p5Link = './port5.html'

$(document).keyup(function(event){
    if(event.which === 13) {
        window.location.href = p7Link;
    }
})

$(document).keyup(function(event){
    if(event.which === 39) {
        window.location.href = p7Link;
    }
})

$(document).keyup(function(event){
    if(event.which === 37) {
        window.location.href = p5Link;
    }
})