
var p8Link = './port8.html'
var p6Link = './port6.html'

$(document).keyup(function(event){
    if(event.which === 13) {
        window.location.href = p8Link;
    }
})

$(document).keyup(function(event){
    if(event.which === 39) {
        window.location.href = p8Link;
    }
})

$(document).keyup(function(event){
    if(event.which === 37) {
        window.location.href = p6Link;
    }
})