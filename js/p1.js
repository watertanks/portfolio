





    let passReg = /hello world/

$('.btn').on('click',function(){
    if( !passReg.test($('input[name=passWord]').val()) ){
        alert('접속코드가 틀렸습니다.')
        $('input[name=passWord]').focus();
        return;
    }else{
        window.HTML("./port1.html")
    }
})

