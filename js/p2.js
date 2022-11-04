





var p3Link = './port3.html'
var p1Link = './port1.html'

$(document).keyup(function(event){
    if(event.which === 13) {
        window.location.href = p3Link;
    }
})

$(document).keyup(function(event){
    if(event.which === 39) {
        window.location.href = p3Link;
    }
})

$(document).keyup(function(event){
    if(event.which === 37) {
        window.location.href = p1Link;
    }
})




// 좌 : 37
// 상 : 38
// 우 : 39
// 하 : 40
