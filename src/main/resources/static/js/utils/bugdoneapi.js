//生成验证码
function getCheckCode(imgid, type) {
    var imgNode = document.getElementById(imgid);
    imgNode.src = "/VerifyCode.aspx?type=" + type + "&t=" + (new Date()).valueOf();
}
//登陆
function apiUserLogin(pEmail, pPassword,ischeck,from) {
    $.get("/Service/UserService.ashx?time=" + new Date().toString(),
    {
        Method: 'UserLogin',
        Email: pEmail,
        Password: pPassword,
        ischeck:ischeck,
        platform:from
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg('登录中...');
                setTimeout(function () { 
                    window.location.href = "/projects";
                }, 1000);
            }
            else {
                //失败后的处理
                layer.msg("登录失败,用户邮箱或密码错误！");
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//退出
function apiUserLogout() {
    $.get("/Service/UserService.ashx?time=" + new Date().toString(),
    {
        Method: 'UserLogout'
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
                // var i=jQuery.cookie('bugdone_loginfrom');
                // if(i==2)
                //     window.location.href = "/login?from=1";
                // else
                //     window.location.href = "/login";
                // if(loginfrom==2)
                // {
                //     window.location.href = "/login?from=1";
                //     //调用客户端方法
                // }else
                // {
                    window.location.href = "/login";
                // }
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//注册新用户
function apiRegisterUser(pEmail, pUserName, pPassword, pInviteCode, pVerifyCode, pCode) {
    $.get("/Service/UserService.ashx?time=" + new Date().toString(),
    {
        Method: 'RegisterUser',
        Email: pEmail,
        RealName: pUserName,
        Password: pPassword,
        InviteCode: pInviteCode,
        VerifyCode: pVerifyCode,
        Code: pCode 
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                // layer.msg(result.Message); 
                layer.msg("注册成功，正跳转到用户首页");
                // window.location.href = "/projects";
                setTimeout(function () { 
                    window.location.href = "/projects";
                }, 1000);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//取回密码
function apiFindPassword(email) {
    $.get("/Service/UserService.ashx?time=" + new Date().toString(),
    {
        Method: 'FindPassword',
        Email: email
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//修改密码
function apiChangePassword(userid, password) {
    $.get("/Service/UserService.ashx?time=" + new Date().toString(),
    {
        Method: 'ChangePassword',
        UserId: userid,
        Password: password
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message,{time: 500 });
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//重置密码
function apiReSetPassword(email, password, verifyCode) {
    $.get("/Service/UserService.ashx?time=" + new Date().toString(),
    {
        Method: 'ReSetPassword',
        Email: email,
        Password: password,
        VerifyCode: verifyCode
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
                // if(loginfrom==2)
                // {
                //     window.location.href = "/login?from=1";
                //     //调用客户端方法
                // }else
                // {
                //     window.location.href = "/login";
                // }
                window.location.href = "/login";
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//取我的信息
function apiGetUserInfo() {
    // $.get("/Service/UserService.ashx?time=" + new Date().toString(),
    $.get("/Service/BugListService.ashx?time=" + new Date().toString(),
    {
        Method: 'GetUserInfo'
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result!= "1") {
                //成功后的处理
                bindUserInfo(result);
            }
            else {
                //失败后的处理
                alert("无法获取登录用户的信息，请重新登录！");
                // if(loginfrom==2)
                // {
                //     window.location.href = "/login?from=1";
                //     //调用客户端方法
                // }else
                // {
                    window.location.href = "/login";
                // }
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//修改邮箱
function apiChangeEmail(pEmail, pPassword) {
    $.get("/Service/UserService.ashx?time=" + new Date().toString(),
    {
        Method: 'ChangeEmail',
        Email: pEmail,
        Password: pPassword
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
                btnClose_Click();
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//修改密码
function apiChangePassword(pPassword0, pPassword1) {
    $.get("/Service/UserService.ashx?time=" + new Date().toString(),
    {
        Method: 'ChangePassword',
        Password0: pPassword0,
        Password1: pPassword1
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg("密码修改成功，请使用新密码重新登录。",{time: 1000 },function(){
                    parent.location.href = "/login";
                    // if(loginfrom==2)
                    // {
                    //     parent.location.href = "/login?from=1";
                    //     //调用客户端方法
                    // }else
                    // {
                    //     parent.location.href = "/login";
                    // }
                });
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//修改邮箱
function apiChangeName(pUserName) {
    $.get("/Service/UserService.ashx?time=" + new Date().toString(),
    {
        Method: 'ChangeName',
        RealName: pUserName
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
                btnClose_Click();
                parent.$("#lblUser").text(pUserName);
                parent.$("#imgUser").attr("alt", datas.RealName);
                parent.$("#imgUserEdit").attr("alt", datas.RealName);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//修改头像
function apiChangePhoto(pHeadImgUrl) {
    $.get("/Service/UserService.ashx?time=" + new Date().toString(),
    {
        Method: 'ChangePhoto',
        HeadImgUrl: pHeadImgUrl
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
                btnClose_Click();
                parent.$("#imgUser").attr("src", pHeadImgUrl);
                parent.$("#imgUserEdit").attr("src", pHeadImgUrl);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//取我的项目
function apiGetProjects() {
    $.get("/Service/ProjectService.ashx?time=" + new Date().toString(),
    {
        Method: 'GetProjects',
        type: $("#hidtype").val()
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                bindProjects(result.ReturnObj);
            }
            else if (result.Result == "2") {
                //失败后的处理
                layer.msg(result.Message);
                // if(loginfrom==2)
                // {
                //     window.location.href = "/login?from=1";
                //     //调用客户端方法
                // }else
                // {
                    window.location.href = "/login";
                // }
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//取项目信息
function apiGetProjectInfo(pid) {
    
    $.get("/Service/ProjectService.ashx?time=" + new Date().toString(),
    {
        Method: 'GetProjectInfo',
        ProjectId: pid
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                bindProjectInfo(result.ReturnObj);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
                parent.window.location.href = "/projects";
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//取项目配置项信息
function apiGetProjectConfig(pid) {

    $.get("/Service/ProjectService.ashx?time=" + new Date().toString(),
    {
        Method: 'GetProjectConfig',
        ProjectId: pid
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                bindProjectConfig(result.ReturnObj);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
                parent.window.location.href = "/projects";
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//取项目信息(包含其它相关信息)
function GetProjectInfoAll(pid) {
    $.get("/Service/ProjectService.ashx?time=" + new Date().toString(),
    {
        Method: 'GetProjectInfoAll',
        ProjectId: pid
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                bindProjectInfo(result.ReturnObj);
            }
            else if (result.Result == "2") {
                //失败后的处理
                layer.msg(result.Message);
                window.location.href = "/login";
                // if(loginfrom==2)
                // {
                //     window.location.href = "/login?from=1";
                //     //调用客户端方法
                // }else
                // {
                //     window.location.href = "/login";
                // }
            }
            else {
                //失败后的处理
                layer.msg("该项目已关闭", { time: 1000 }, function () {
                    // parent.parent.apiGetProjects();
                    window.location.href = "/projects";
                });
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//取项目成员
function apiGetProjectUsers(pid,status) {
    $.get("/Service/ProjectUserService.ashx?time=" + new Date().toString(),
    {
        Method: 'GetProjectUsers',
        ProjectId: pid,
        status:status
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                bindProjectUsers(result.ReturnObj);
            }
            else if (result.Result == "2") {
                //失败后的处理
                layer.msg(result.Message);
                window.location.href = "/login";
                // if(loginfrom==2)
                // {
                //     window.location.href = "/login?from=1";
                //     //调用客户端方法
                // }else
                // {
                //     window.location.href = "/login";
                // }
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//取项目角色和成员
function apiGetProjectRolesAndUsers(pid,status) {
    $.get("/Service/ProjectUserService.ashx?time=" + new Date().toString(),
    {
        Method: 'GetProjectRolesAndUsers',
        ProjectId: pid,
        status: status
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                bindProjectUsers(result.ReturnObj);
            }
            else if (result.Result == "2") {
                //失败后的处理
                layer.msg(result.Message);
                window.location.href = "/login";
                // if(loginfrom==2)
                // {
                //     window.location.href = "/login?from=1";
                //     //调用客户端方法
                // }else
                // {
                //     window.location.href = "/login";
                // }
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//添加新项目 修改已有项目
function apiEditProject(pProjectId, pProjectName, pDescription,pProjectImg) {
    $.get("/Service/ProjectService.ashx?time=" + new Date().toString(),
    {
        Method: 'EditProject',
        ProjectId: pProjectId,
        ProjectName: pProjectName,
        Description: pDescription,
        pProjectImg: pProjectImg
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                if (pProjectId == "")
                    layer.msg("创建成功，您现在可以添加产品及成员!");
                else
                    layer.msg(result.Message);
                parent.getcanaddproject();
                onCompleteEditProject(result.ReturnObj);
            }
            else if (result.Result == "2") {
                //失败后的处理
                layer.msg(result.Message);
                parent.window.location.href = "/login";
                // if(loginfrom==2)
                // {
                //     parent.window.location.href = "/login?from=1";
                //     //调用客户端方法
                // }else
                // {
                //     parent.window.location.href = "/login";
                // }
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
            getcanaddproject();
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//修改图片
function apiChangeProjectImg(pProjectId, pProjectImg) {
    $.get("/Service/ProjectService.ashx?time=" + new Date().toString(),
    {
        Method: 'ChangeProjectImg',
        ProjectId: pProjectId,
        ProjectImg: pProjectImg
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
                parent.bindProjectImg(pProjectImg);
                parent.parent.apiGetProjects();
                btnClose_Click();
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//变更拥有者
function apiChangeProjectUser(pProjectId, pUserId) {
    $.get("/Service/ProjectService.ashx?time=" + new Date().toString(),
    {
        Method: 'ChangeProjectUser',
        ProjectId: pProjectId,
        UserId: pUserId
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
                parent.parent.apiGetProjects();
                parent.parent.getcanaddproject();
                btnClose_Click();
                parent.btnClosePage_Click();
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//关闭项目
function apiCloseProject(id) {
    $.get("/Service/ProjectService.ashx?time=" + new Date().toString(),
    {
        Method: 'CloseProject',
        ProjectId: id
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg("该项目已关闭", { time: 1500 }, function () {
                    // parent.parent.apiGetProjects();
                    btnClosePage_Click();
                    parent.location.href='/projects'
                });
               
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//隐藏项目
function apiHideProject(id) {
    $.get("/Service/ProjectService.ashx?time=" + new Date().toString(),
    {
        Method: 'HideProject',
        ProjectId: id,
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                apiGetProjects();
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//恢复状态
function apiOpenProject(id) {
    $.get("/Service/ProjectService.ashx?time=" + new Date().toString(),
    {
        Method: 'OpenProject',
        ProjectId: id,
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                apiGetProjects();
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//删除项目
function apiDeleteProject(id) {
    $.get("/Service/ProjectService.ashx?time=" + new Date().toString(),
    {
        Method: 'DeleteProject',
        ProjectId: id
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                apiGetProjects();
                getcanaddproject();
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}


//加入项目
function apiJoinProject(pProjectId, pEmail,roleId) {
    $.get("/Service/ProjectUserService.ashx?time=" + new Date().toString(),
    {
        Method: 'JoinProject',
        ProjectId: pProjectId,
        Email: pEmail,
        roleId: roleId
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                //apiGetProjects();
                layer.msg(result.Message);
                getcanaddprojectuser();
                apiGetProjectRolesAndUsers(pProjectId)
            } else if (result.Result == "3") {
                //没有用户的处理
                layer.confirm('不存在邮箱为 ' + pEmail + ' 的用户，是否立即发邮件邀请？', {
                    btn: ['确认', '取消'] //按钮
                }, function () {
                    //确认时的处理                    
                    apiSendInvitationMail(pProjectId, pEmail, roleId);
                   getcanaddprojectuser();
                }, function () {
                    //取消时的处理                
                });
            } else if (result.Result == "4") {
                //有用户的处理
                layer.confirm('已存在邮箱为 ' + pEmail + ' 的用户,但不在本项目中，是否立即发邮件邀请？', {
                    btn: ['确认', '取消'] //按钮
                }, function () {
                    //确认时的处理                    
                    apiSendUserInvitationMail(pProjectId, pEmail, roleId);
                    getcanaddprojectuser();
                }, function () {
                    //取消时的处理                
                });
            }
            else if (result.Result == "2") {
                //有用户的处理
                layer.confirm('该用户已邀请，正等待接受，是否再次邀请？', {
                    btn: ['确认', '取消'] //按钮
                }, function () {
                    //确认时的处理                    
                    apiSendUserInvitationMail(pProjectId, pEmail, roleId);
                    getcanaddprojectuser();
                }, function () {
                    //取消时的处理                
                });
            }
           /* else if (result.Result == "1") {
                //有用户的处理
                layer.confirm('该用户已邀请，正等待接受，是否再次邀请？', {
                    btn: ['确认', '取消'] //按钮
                }, function () {
                    //确认时的处理                    
                    apiSendInvitationMail(pProjectId, pEmail, roleId);
                    getcanaddprojectuser();
                }, function () {
                    //取消时的处理                
                });
            }*/
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//发邀请邮件
function apiSendInvitationMail(pProjectId, pEmail, roleId) {
    $.get("/Service/UserService.ashx?time=" + new Date().toString(),
    {
        Method: 'SendInvitationMail',
        projectId: pProjectId,
        mailTo: pEmail,
        roleId: roleId
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
                onCompleteGetILink(result.ReturnObj)
                apiGetProjectRolesAndUsers(pProjectId)
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//发邀请已存在用户邮件
function apiSendUserInvitationMail(pProjectId, pEmail, roleId) {
    $.get("/Service/UserService.ashx?time=" + new Date().toString(),
    {
        Method: 'SendUserInvitationMail',
        projectId: pProjectId,
        mailTo: pEmail,
        roleId: roleId
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
                apiGetProjectRolesAndUsers(pProjectId)
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//获取邀请链接
function apiGetInviteLink(pProjectId, pEmail) {
    $.get("/Service/ProjectUserService.ashx?time=" + new Date().toString(),
    {
        Method: 'GetInviteLink',
        projectId: pProjectId,
        email: pEmail,       
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                onCompleteGetILink(result.ReturnObj)
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//退出项目
function apiExitProject(pProjectId, pUserId) {
    $.get("/Service/ProjectUserService.ashx?time=" + new Date().toString(),
    {
        Method: 'ExitProject',
        ProjectId: pProjectId,
        UserId: pUserId
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
                apiGetProjectRolesAndUsers(pProjectId);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//复制用户到项目
function apiCopyToProject(pProjectId, pUserIds, roleId) {  
    $.get("/Service/ProjectUserService.ashx?time=" + new Date().toString(),
    {
        Method: 'CopyToProject',
        ProjectId: pProjectId,
        UserIds: pUserIds,
        roleId: roleId
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
                parent.apiGetProjectRolesAndUsers(pProjectId);
                btnClose_Click();
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//取项目产品
function apiGetProducts(pid) {
    $.get("/Service/ProjectProductService.ashx?time=" + new Date().toString(),
    {
        Method: 'GetProducts',
        ProjectId: pid
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                bindProducts(result.ReturnObj);
            }
            else if (result.Result == "2") {
                //失败后的处理
                layer.msg(result.Message);
                window.location.href = "/login";
                // if(loginfrom==2)
                // {
                //     window.location.href = "/login?from=1";
                //     //调用客户端方法
                // }else
                // {
                //     window.location.href = "/login";
                // }
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//取项目产品
function apiGetProductsAndModules(pid) {
    $.get("/Service/ProjectProductService.ashx?time=" + new Date().toString(),
    {
        Method: 'GetProductsAndModules',
        ProjectId: pid
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                bindProducts(result.ReturnObj);
            }
            else if (result.Result == "2") {
                //失败后的处理
                layer.msg(result.Message);
                // if(loginfrom==2)
                // {
                //     window.location.href = "/login?from=1";
                //     //调用客户端方法
                // }else
                // {
                    window.location.href = "/login";
                // }
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//添加产品
function apiAddProduct(pProjectId, pProductName, pPlatformType) {
    $.get("/Service/ProjectProductService.ashx?time=" + new Date().toString(),
    {
        Method: 'AddProduct',
        ProjectId: pProjectId,
        ProductName: pProductName,
        pPlatformType:pPlatformType,
        SequenceNumber: 0
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
                apiGetProductsAndModules(pProjectId);
                closeAddBox();
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//复制产品
function apiCopyProduct(oProjectId, nProjectId, nCopyModule) {
    $.get("/Service/ProjectProductService.ashx?time=" + new Date().toString(),
    {
        Method: 'CopyProduct',
        oProjectId: oProjectId,
        nProjectId: nProjectId,
        nCopyModule: nCopyModule
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
                parent.apiGetProducts(nProjectId);
                btnClose_Click();
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//复制项目
function apiCopyProject(oProjectId, pProjectName, pDescription, nCopyUser, nCopyProdect, nCopyModule) {
    $.get("/Service/ProjectService.ashx?time=" + new Date().toString(),
    {
        Method: 'CopyProject',
        oProjectId: oProjectId,
        pProjectName: pProjectName,
        pDescription: pDescription,
        nCopyUser: nCopyUser,
        nCopyProdect: nCopyProdect,
        nCopyModule: nCopyModule
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
                parent.getcanaddproject();
                parent.apiGetProjects();
                btnClose_Click();
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//添加问题
function apiAddBug(tcId, ProjectId, ProductId, ModuleId, BugType, Priority, BugTitle, VersionId, Environment, Description, PlanFixDate, PlanFixVersion, CutOffDate, ProcessingUserId, bugAJson, tags, Workload,BugValue,strRelevanceUsers) {
    $.post("/Service/BugService.ashx?time=" + new Date().toString(),
    {
        Method: 'AddBug',
        tcId:tcId,
        ProjectId: ProjectId,
        ProductId: ProductId,
        ModuleId: ModuleId,
        BugType: BugType,
        Priority: Priority,
        BugTitle: BugTitle,
        VersionId: VersionId,
        Environment: Environment,
        Description: Description,
        PlanFixDate: PlanFixDate,
        PlanFixVersion: PlanFixVersion,
        CutOffDate: CutOffDate,
        ProcessingUserId: ProcessingUserId,
        BugAJson: bugAJson,
        Tags: tags,
        Workload: Workload,
        BugValue: BugValue,
        strRelevanceUsers:strRelevanceUsers
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                btnClose_Click("2",ProjectId);
                parent.layer.msg(result.Message);
                
            }
            else {
                //失败后的处理
                layer.close(loadIndex);
                layer.msg(result.Message);
                if(result.Result == "2")
                    parent.window.location.href = "/login";
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
        stoplock = false;
    });
}

//修改问题
function apiEditBug(BugId, type, ProjectId, ProductId, ModuleId, BugType, Priority, BugTitle, VersionId, Environment, Description, PlanFixDate, PlanFixVersion, CutOffDate, ProcessingUserId, bugAJson, tags, Workload, BugValue,strRelevanceUsers) {
    $.post("/Service/BugService.ashx?time=" + new Date().toString(),
    {
        Method: 'EditBug',
        BugId: BugId,
        type: type,
        ProjectId: ProjectId,
        ProductId: ProductId,
        ModuleId: ModuleId,
        BugType: BugType,
        Priority: Priority,
        BugTitle: BugTitle,
        VersionId: VersionId,
        Environment: Environment,
        Description: Description,
        PlanFixDate: PlanFixDate,
        PlanFixVersion: PlanFixVersion,
        CutOffDate: CutOffDate,
        ProcessingUserId: ProcessingUserId,
        BugAJson: bugAJson,
        Tags: tags,
        Workload: Workload,
        BugValue: BugValue,
        strRelevanceUsers:strRelevanceUsers
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                btnClose_Click();
                parent.layer.msg(result.Message);
            }
            else {
                //失败后的处理
                layer.close(loadIndex);
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//修改问题
function apiAgainOpenBug(BugId, VersionId, Description, PlanFixDate, CutOffDate, ProcessingUserId, bugAJson) {
    $.post("/Service/BugService.ashx?time=" + new Date().toString(),
    {
        Method: 'AgainOpenBug',
        BugId: BugId,      
        VersionId: VersionId,       
        Description: Description,
        PlanFixDate: PlanFixDate,       
        CutOffDate: CutOffDate,
        ProcessingUserId: ProcessingUserId,
        BugAJson: bugAJson       
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                btnClose_Click();
                parent.layer.msg(result.Message);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

function apiDeleteBug(bugId) {

    $.get("/Service/BugService.ashx?time=" + new Date().toString(),
    {
        Method: 'DeleteBug',
        bugId: bugId,
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
                asideHide();
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//增加bug分配记录
function apiAddAssign(newUserId, bugId, reason, type, refuseReason,bugAJson,cUserId) {
    if (type == "choose") {
        /*var lastHUserId = parent.$("#hidLastHandleUserId").val();
        if (lastHUserId == newUserId) {
            layer.msg("当前指派的处理人没有变化");
            return;
        }*/
    }

    $.post("/Service/BugService.ashx?time=" + new Date().toString(),
    {
        Method: 'AddBugAssign',
        bugId: bugId,
        newUserId: newUserId,
        reason: reason,
        type: type,
        refuseReason: refuseReason,
        bugAJson: bugAJson,
        cUserId: cUserId
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                
                btnClose_Click();
                parent.layer.msg(result.Message);
                // parent.location.reload();
                parent.loaddate("CreateTime",null);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//取项目版本
function apiGetVersions(pid) {
    $.get("/Service/ProjectProductVersionService.ashx?time=" + new Date().toString(),
    {
        Method: 'GetVersions',
        ProductId: pid
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                bindVersions(result.ReturnObj);
            }
            else if (result.Result == "2") {
                //失败后的处理
                layer.msg(result.Message);
                // if(loginfrom==2)
                // {
                //     window.location.href = "/login?from=1";
                //     //调用客户端方法
                // }else
                // {
                    window.location.href = "/login";
                // }
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//取项目模块
function apiGetModules(pid) {
    $.get("/Service/ProjectProductModuleService.ashx?time=" + new Date().toString(),
    {
        Method: 'GetModules',
        ProductId: pid
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                bindModules(result.ReturnObj);
            }
            else if (result.Result == "2") {
                //失败后的处理
                layer.msg(result.Message);
                // if(loginfrom==2)
                // {
                //     window.location.href = "/login?from=1";
                //     //调用客户端方法
                // }else
                // {
                    window.location.href = "/login";
                // }
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}


//取最新数据
function apiGetNewBug(pid, psortKey, psortValue) {
    NProgress.start();
    $.post("/Service/BugService.ashx?time=" + new Date().toString(),
    {
        Method: 'GetNewBug',
        TopNum: 1000,
        ProjectId: pid,
        sortKey: psortKey,
        sortValue: psortValue
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                bindBugs(result.ReturnObj);
                NProgress.done();
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
                NProgress.done();
            }
        }
        else {
            layer.msg('Failed to connect!');
            NProgress.done();
        }
    });
}
//取最新数据
function apiGetBugInfo(bid) {
    $.get("/Service/BugService.ashx?time=" + new Date().toString(),
    {
        Method: 'GetBugInfo',
        BugId: bid
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                bindBugInfo(result.ReturnObj);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//启用版本
function apiSetEnableVersion(pProjectId, pval) {
    $.get("/Service/ProjectService.ashx?time=" + new Date().toString(),
    {
        Method: 'SetEnableVersion',
        ProjectId: pProjectId,
        val: pval
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                //layer.msg(result.Message);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//启用模块
function apiSetEnableModule(pProjectId, pval) {
    $.get("/Service/ProjectService.ashx?time=" + new Date().toString(),
    {
        Method: 'SetEnableModule',
        ProjectId: pProjectId,
        val: pval
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                //layer.msg(result.Message);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//启用环境
function apiSetEnableEnvironment(pProjectId, pval) {
    $.get("/Service/ProjectService.ashx?time=" + new Date().toString(),
    {
        Method: 'SetEnableEnvironment',
        ProjectId: pProjectId,
        val: pval
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                //layer.msg(result.Message);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//启用标签
function apiSetEnableTag(pProjectId, pval) {
    $.get("/Service/ProjectService.ashx?time=" + new Date().toString(),
    {
        Method: 'SetEnableTag',
        ProjectId: pProjectId,
        val: pval
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                //layer.msg(result.Message);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}


//启用计划时间
function apiSetEnablePlanTime(pProjectId, pval) {
    $.get("/Service/ProjectService.ashx?time=" + new Date().toString(),
    {
        Method: 'SetEnablePlanTime',
        ProjectId: pProjectId,
        val: pval
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                //layer.msg(result.Message);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}


//启用计划版本
function apiSetEnablePlanVersion(pProjectId, pval) {
    $.get("/Service/ProjectService.ashx?time=" + new Date().toString(),
    {
        Method: 'SetEnablePlanVersion',
        ProjectId: pProjectId,
        val: pval
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                //layer.msg(result.Message);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//启用评估
function apiSetEnableEvaluation(pProjectId, pval) {
    $.get("/Service/ProjectService.ashx?time=" + new Date().toString(),
    {
        Method: 'SetEnableEvaluation',
        ProjectId: pProjectId,
        val: pval
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                //layer.msg(result.Message);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//启用关注
function apiSetEnableAttention(pProjectId, pval) {
    $.get("/Service/ProjectService.ashx?time=" + new Date().toString(),
    {
        Method: 'SetEnableAttention',
        ProjectId: pProjectId,
        val: pval
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                //layer.msg(result.Message);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//启用关联
function apiSetEnableAssociation(pProjectId, pval) {
    $.get("/Service/ProjectService.ashx?time=" + new Date().toString(),
    {
        Method: 'SetEnableAssociation',
        ProjectId: pProjectId,
        val: pval
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                //layer.msg(result.Message);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//启用测试用例
function apiSetEnableTestCases(pProjectId, pval) {
    $.get("/Service/ProjectService.ashx?time=" + new Date().toString(),
    {
        Method: 'SetEnableTestCases',
        ProjectId: pProjectId,
        val: pval
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                //layer.msg(result.Message);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//只有创建人才能修改BUG
function apiSetEditOnlyByCreator(pProjectId, pval) {
    $.get("/Service/ProjectService.ashx?time=" + new Date().toString(),
    {
        Method: 'SetEditOnlyByCreator',
        ProjectId: pProjectId,
        val: pval
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                //layer.msg(result.Message);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//周开始日 周一  周日
function apiSetWeekBegins(pProjectId, pval) {
    $.get("/Service/ProjectService.ashx?time=" + new Date().toString(),
    {
        Method: 'SetWeekBegins',
        ProjectId: pProjectId,
        val: pval
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                //layer.msg(result.Message);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}


//获取模版
function apiGetTemplates(pProjectId) {
    $.get("/Service/ProjectTemplateService.ashx?time=" + new Date().toString(),
    {
        Method: 'GetTemplates',
        ProjectId: pProjectId
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                //layer.msg(result.Message);
                bindTemplates(result.ReturnObj);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//保存模版
function apiSaveTemplates(pProjectId, pContentBug, pContentTask, pContentRequest, pContentImprove) {
    $.get("/Service/ProjectTemplateService.ashx?time=" + new Date().toString(),
    {
        Method: 'SaveTemplates',
        ProjectId: pProjectId,
        ContentBug: pContentBug,
        ContentTask: pContentTask,
        ContentRequest: pContentRequest,
        ContentImprove: pContentImprove
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
                btnClose_Click();
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}


//获取标签
function apiGetTags(pProjectId) {
    $.get("/Service/ProjectTagService.ashx?time=" + new Date().toString(),
    {
        Method: 'GetTags',
        ProjectId: pProjectId
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                //layer.msg(result.Message);
                bindTags(result.ReturnObj);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//添加标签
function apiAddTag(pProjectId, pTagGroup, pTagName, pTagColor) {
    $.get("/Service/ProjectTagService.ashx?time=" + new Date().toString(),
    {
        Method: 'AddTag',
        ProjectId: pProjectId,
        TagGroup: pTagGroup,
        TagName: pTagName,
        TagColor: pTagColor
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
                onCompleteSave();
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//修改标签
function apiEditTag(pTagId, pTagGroup, pTagName, pTagColor) {
    $.get("/Service/ProjectTagService.ashx?time=" + new Date().toString(),
    {
        Method: 'EditTag',
        TagId: pTagId,
        TagGroup: pTagGroup,
        TagName: pTagName,
        TagColor: pTagColor
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//删除标签
function apiDeleteTag(pTagId) {
    $.get("/Service/ProjectTagService.ashx?time=" + new Date().toString(),
    {
        Method: 'DeleteTag',
        TagId: pTagId
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
                loaddata()
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//获取标签
function apiGetEnvironments(pProjectId) {
    $.get("/Service/ProjectEnvironmentService.ashx?time=" + new Date().toString(),
    {
        Method: 'GetEnvironments',
        ProjectId: pProjectId
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                //layer.msg(result.Message);
                bindEnvironments(result.ReturnObj);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//添加标签
function apiAddEnvironment(pProjectId, environment, pTagName, pTagColor) {
    $.get("/Service/ProjectEnvironmentService.ashx?time=" + new Date().toString(),
    {
        Method: 'AddEnvironment',
        ProjectId: pProjectId,
        environment: environment       
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
                onCompleteSave();
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//删除标签
function apiDeleteEnvironment(id) {
    $.get("/Service/ProjectEnvironmentService.ashx?time=" + new Date().toString(),
    {
        Method: 'DeleteEnvironment',
        id: id
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
                loaddata()
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}


//恢复产品
function apiOpenProduct(pProjectId, pProductId) {
    $.get("/Service/ProjectProductService.ashx?time=" + new Date().toString(),
    {
        Method: 'OpenProduct',
        ProductId: pProductId
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
                apiGetProducts(pProjectId);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//关闭产品
function apiCloseProduct(pProjectId, pProductId) {
    $.get("/Service/ProjectProductService.ashx?time=" + new Date().toString(),
    {
        Method: 'CloseProduct',
        ProductId: pProductId
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
                apiGetProducts(pProjectId);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//移除产品
function apiRemoveProduct(pProjectId, pProductId) {
    $.get("/Service/ProjectProductService.ashx?time=" + new Date().toString(),
    {
        Method: 'RemoveProduct',
        ProductId: pProductId,
        ProjectId: pProjectId
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
                apiGetProductsAndModules(pProjectId);
                parent.loaddate("CreateTime", null);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//取项目产品
function apiGetProduct(pProductId) {
    $.get("/Service/ProjectProductService.ashx?time=" + new Date().toString(),
    {
        Method: 'GetProduct',
        ProductId: pProductId
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                bindProduct(result.ReturnObj);
            }
            else if (result.Result == "2") {
                //失败后的处理
                layer.msg(result.Message);
                // if(loginfrom==2)
                // {
                //     window.location.href = "/login?from=1";
                //     //调用客户端方法
                // }else
                // {
                    window.location.href = "/login";
                // }
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//修改产品属性
function apiChangeProjectInfo(pProjectId, pProductId, pProductName, pBugAssigner, pTaskAssigner, pRequestAssigner, pPlatformType) {
    $.get("/Service/ProjectProductService.ashx?time=" + new Date().toString(),
    {
        Method: 'ChangeProjectInfo',
        ProductId: pProductId,
        ProjectId: pProjectId,
        ProductName: pProductName,
        BugAssigner: pBugAssigner,
        TaskAssigner: pTaskAssigner,
        RequestAssigner: pRequestAssigner,
        pPlatformType:pPlatformType,
        SequenceNumber: 0
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
                apiGetProductsAndModules(pProjectId);
                closeAddBox();
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}


//添加模块
function apiAddModule(pProductId, pModuleName, defaultUserId) {
    $.get("/Service/ProjectProductModuleService.ashx?time=" + new Date().toString(),
    {
        Method: 'AddModule',
        ProductId: pProductId,
        ModuleName: pModuleName,
        defaultUserId: defaultUserId
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
                afterAddProductModule();
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//移除模块
function apiRemoveModule(pProductId, pModuleId,pProjectId) {
    $.get("/Service/ProjectProductModuleService.ashx?time=" + new Date().toString(),
    {
        Method: 'RemoveModule',
        ProductId: pProductId,
        ModuleId: pModuleId,
        ProjectId: pProjectId
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
                afterAddProductModule();
                parent.loaddate("CreateTime", null);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}
//修改属性
function apiChangeModuleInfo(pProductId, pModuleId, pModuleName, defaultUserId) {
    $.get("/Service/ProjectProductModuleService.ashx?time=" + new Date().toString(),
    {
        Method: 'ChangeModuleInfo',
        ProductId: pProductId,
        ModuleId: pModuleId,
        ModuleName: pModuleName,
        defaultUserId: defaultUserId
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
                afterAddProductModule();
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//项目模块排序
function apiSortModule(modulesJson) {
    $.post("/Service/ProjectProductModuleService.ashx?time=" + new Date().toString(),
    {
        Method: 'SortModule',
        modulesJson: modulesJson,
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
               
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//添加角色
function apiAddRole(pProjectId, RoleName) {
    $.get("/Service/ProjectUserService.ashx?time=" + new Date().toString(),
    {
        Method: 'AddRole',
        ProjectId: pProjectId,
        RoleName: RoleName
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
                apiGetProjectRolesAndUsers(pProjectId);                
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//修改角色
function apiEditRole(pProjectId, RoleName,roleId) {
    $.get("/Service/ProjectUserService.ashx?time=" + new Date().toString(),
    {
        Method: 'EditRole',
        ProjectId: pProjectId,
        RoleName: RoleName,
        roleId: roleId
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
                apiGetProjectRolesAndUsers(pProjectId);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}


//删除角色
function apiRemoveRole(pProjectId, roleId) {
    $.get("/Service/ProjectUserService.ashx?time=" + new Date().toString(),
    {
        Method: 'RemoveRole',
        ProjectId: pProjectId,
        roleId: roleId
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                layer.msg(result.Message);
                apiGetProjectRolesAndUsers(pProjectId);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//角色用户排序
function apiSortRoleUser(roleUserJson) {
    $.post("/Service/ProjectUserService.ashx?time=" + new Date().toString(),
    {
        Method: 'SortRoleUser',
        roleUserJson: roleUserJson,
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {

            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//角色排序
function apiSortRole(roleJson) {
    $.post("/Service/ProjectUserService.ashx?time=" + new Date().toString(),
    {
        Method: 'SortRole',
        roleJson: roleJson,
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {

            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//产品排序
function apiSortProducts(pJson) {
    $.post("/Service/ProjectProductService.ashx?time=" + new Date().toString(),
    {
        Method: 'SortProducts',
        pJson: pJson,
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {

            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//添加关注
function apiAddBugAttention(userId,projectId,bugId) {
    $.post("/Service/BugAttentionService.ashx?time=" + new Date().toString(),
    {
        Method: 'AddBugAttention',
        userId: userId,
        projectId: projectId,
        bugId: bugId,
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                layer.msg(result.Message);
                apiGetBugInfo(bugId);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//移除关注
function apiRemoveBugAttention(userId, bugId) {
    $.post("/Service/BugAttentionService.ashx?time=" + new Date().toString(),
    {
        Method: 'RemoveBugAttention',
        userId: userId,       
        bugId: bugId,
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                layer.msg(result.Message);
                apiGetBugInfo(bugId);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//是否关注
function apiBugUserIsAttention(userId, bugId) {
    $.post("/Service/BugAttentionService.ashx?time=" + new Date().toString(),
    {
        Method: 'BugUserIsAttention',
        userId: userId,
        bugId: bugId,
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                layer.msg(result.Message);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//项目排序
function apiSortProjects(projectJson) {
    $.post("/Service/ProjectService.ashx?time=" + new Date().toString(),
    {
        Method: 'SortProject',
        projectJson: projectJson,
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {

            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//启用关注
function apiSetEnableTemplate(pProjectId, pval) {
    $.get("/Service/ProjectService.ashx?time=" + new Date().toString(),
    {
        Method: 'SetEnableTemplate',
        ProjectId: pProjectId,
        val: pval
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                //layer.msg(result.Message);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//获取项目属性配置项
function apiGetProjectSettingItems(pProjectId) {
    $.get("/Service/ProjectUserSettingService.ashx?time=" + new Date().toString(),
    {
        Method: 'GetProjectSettingItems',
        projectId: pProjectId,
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                onCompleteLoadProjectSettingItem(result.ReturnObj);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//修改项目属性配置项
function apiChangeProjectSettingItem(projectId, SIId, SIName, val) {
    $.get("/Service/ProjectUserSettingService.ashx?time=" + new Date().toString(),
    {
        Method: 'ChangeProjectSettingItem',
        projectId: projectId,
        SIId: SIId,
        SIName: SIName,
        val: val
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);            
            if (result.Result == "1") {
                //成功后的处理
                //layer.msg(result.Message);
                loadProjectSettingItems();
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

function apiSortProjectSettingItems(sJson,projectId) {
    $.get("/Service/ProjectUserSettingService.ashx?time=" + new Date().toString(),
    {
        Method: 'SortProjectSettingItems',
        sJson: sJson,
        projectId: projectId
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {               
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

function apiGetProjectSettingItemsWithOpen(projectId) {
    $.get("/Service/ProjectUserSettingService.ashx?time=" + new Date().toString(),
    {
        Method: 'GetProjectSettingItemsWithOpen',
        projectId: projectId,
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                onCompleteProjectSettingItems(result.ReturnObj);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

function apiChangeUserPermission(projectId,pUserId,isAdmin) {
    $.get("/Service/ProjectUserService.ashx?time=" + new Date().toString(),
    {
        Method: 'ChangeUserPermission',
        projectId: projectId,
        pUserId: pUserId,
        isAdmin: isAdmin
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                layer.msg(result.Message);
                apiGetProjectRolesAndUsers(projectId);
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}







































































