/**
 * Created by jf on 2018/4/1.
 */
function login(){
    var req = getReq("login");

    var username = $("#username").val();
    var password = $("#password").val();
    var data = {
        userName:username,
        password:password
    };

    $.ajax({
        url:req.url,
        type:req.type,
        dataType:"json",
        data:data,
        async:false,
        success:function(res){
        /*    {
                "result": 1,
                "role": 1,
                "token": ""
            }*/
            console.log(res);
            toPage("/mycase.html");
        },
        error:function(e){
            console.log(e)
            toPage("/mycase.html");
        }
    });
}


function toRegister(){
    toPage("/register.html");
}

function toLogin() {
    toPage("/index.html");
}


