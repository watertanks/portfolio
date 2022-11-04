





    let passReg = /hello world/

    var p1Link = './port1.html'
    
$('.btn').on('click',function(){
    event.preventDefault()
    if( !passReg.test($('input[name=passWord]').val()) ){
        alert('접속코드가 틀렸습니다.')
        $('input[name=passWord]').focus();
        return;
    }else{
        // console.log(0)
        window.location.href = p1Link;
    }
})

