



    let passReg = 'hello world'
$('.logIn input[name=passWord]').on('push',function(){
    if( !passReg.test($('input[name=passWord]').val()) ){
        alert('비밀번호가 틀렸습니다.')
        $('input[name=password]').focus();
        return;
    }else{
        window.HTML(src="./port1.html")
    }
})
