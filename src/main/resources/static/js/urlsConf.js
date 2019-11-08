/**
 * Created by jf on 2018/4/1.
 */
var baseUrl = "";//"project.xjetry.top";

var urlWithType = {
    register:{//注册
        url:"/register",
        type:"get"
    },
    ifExist:{//检测用户名是否可用
        url:"/ifExist",
        type:"post"
    },
    login:{//登录
        url:"/login",
        type:"post"
    },
    doctor_status:{//医生状态
        url:"/doctor_status",
        type:"post"
    },

    getCase:{//获取病例列表
        url:"/getCase",
        type:"post"
    },
    addCase:{//添加病例
        url:"/addCase",
        type:"post"
    },
    removeCase:{//删除病例
        url:"removeCase",
        type:"post"
    },
    lockCase:{//锁定病例
        url:"lockCase",
        type:"post"
    },
    getReplies:{//获取所有回复
        url:"/getReplies",
        type:"post"
    },
    addReply:{//新增回复
        url:"/addReply",
        type:"post"
    },
    delReply:{//删除回复
        url:"/delReply",
        type:"post"
    },
    verify:{//医生认证
        url:"/verify",
        type:"post"
    },
    admin_doctors_all:{//后台医生列表（所有）
        url:"/admin_doctors_all",
        type:"post"
    },
    admin_doctors:{//后台医生列表（待审核）
        url:"/admin_doctors",
        type:"post"
    },
    check_doctor:{//后台审核医生
        url:"check_doctor",
        type:"post"
    }
};

var getReq = function(funName){
    var obj = urlWithType[funName];
    return {
        url:baseUrl + obj.url,
        type:obj.type
    };
};

var template = {
    "baseFile":"/html/template",
    "添加病例":"/addCase",
    "":""
};
var getTemplateUrl = function(name){
    return getParentDirPath() + template["baseFile"] + template[name] + ".html";
};