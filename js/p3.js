




var p4Link = './port4.html'
var p2Link = './port2.html'

$(document).keyup(function(event){
    if(event.which === 13) {
        window.location.href = p4Link;
    }
})

$(document).keyup(function(event){
    if(event.which === 39) {
        window.location.href = p4Link;
    }
})

$(document).keyup(function(event){
    if(event.which === 37) {
        window.location.href = p2Link;
    }
})