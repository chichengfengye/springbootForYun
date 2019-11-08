/**
 * Created by jf on 2018/4/1.
 */

function register() {
    var req = getReq("register");

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
        },
        error:function(e){
            console.log(e)
        }
    });
}
