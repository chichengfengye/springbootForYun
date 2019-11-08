function apiGetToken() {    
    $.get("/BugTalkService/BugTalkService.ashx?time=" + new Date().toString(),
    {
        Method: 'GetToken',
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if(result.Result == "1"){
                var r = JSON.parse(result.ReturnObj);
                appKey = r.appKey;
                token = r.token;
                bugTalkConnect()
            }
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}



//获取bug相关成员
function apiGetBugRelevantUser(bugId) {
    $.get("/BugTalkService/BugTalkService.ashx?time=" + new Date().toString(),
    {
        Method: 'GetBugRelevantUser',
        bugId: bugId,
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);            
            if (result.Result == "1") {
                btnCreateTalk_Click(result.ReturnObj)
            }
            else if (result.Result == "4") {              
                onBugTalkClickAfter("4");                
            }
            else if (result.Result == "3") {
                layer.msg(result.Message)
                onBugTalkClickAfter("3",result.ReturnObj);
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

function apiAddBugTalkUser(talkId, strUserIds) {
    $.get("/BugTalkService/BugTalkService.ashx?time=" + new Date().toString(),
   {
       Method: 'AddBugTalkUser',
       talkId: talkId,
       strUserIds: strUserIds,      
   }, function (data, textStatus) {
       if (textStatus == "success") {
           var result = JSON.parse(data);
           if (result.Result == "1") {
               layer.msg(result.Message);
               onBugTalkClickAfter("4");
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

function apiCreateBugTalk(bugId, talkName, projectId, strUserIds) {
    $.get("/BugTalkService/BugTalkService.ashx?time=" + new Date().toString(),
    {
        Method: 'CreateBugTalk',
        bugId: bugId,
        talkName: talkName,
        projectId: projectId,
        strUserIds: strUserIds
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                onBugTalkClickAfter("4")
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

function apiGetBugTalkForUser() {
    $.get("/BugTalkService/BugTalkService.ashx?time=" + new Date().toString(),
    {
        Method: 'GetBugTalkForUser',
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            //console.log(result)
            //var html = "";
            //for (var i = 0; i < result.ReturnObj.length; i++) {
            //    html += "<p onclick='selected(\"" + result.ReturnObj[i].DiscussionId + "\",\"" + result.ReturnObj[i].TalkId + "\")'>" + result.ReturnObj[i].TalkName + "</p>"
            //}
            //$("#talks").html(html)
            onCompleteLoadBugTalk(result.ReturnObj)
        }
        else {
            layer.msg('Failed to connect!');
            layer.close(loadIndex);
        }
    });
}

function apiGetRightMessageBoxDatas(talkId,projectId,bugId)
{
    $.get("/BugTalkService/BugTalkService.ashx?time=" + new Date().toString(),
    {
        Method: 'GetRightMessageBoxDatas',
        talkId: talkId,
        projectId: projectId,
        bugId: bugId
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);           
            onCompleteLoadMessage(result.ReturnObj)
        }
        else {
            layer.msg('Failed to connect!');
            layer.close(loadIndex);
        }
    });
}

function apiLoadBugTalkUsers(talkId) {
    $.get("/BugTalkService/BugTalkService.ashx?time=" + new Date().toString(),
    {
        Method: 'GetRightBugTalkUsers',
        talkId: talkId,        
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            onCompleteLoadBugTalkUsers(result.ReturnObj)
        }
        else {
            layer.msg('Failed to connect!');
            layer.close(loadIndex);
        }
    });
}


function apiInsertTalkMessage(message, imageurl,talkid,talkUserId) {

    jQuery.get("/BugTalkService/BugTalkService.ashx?time=" + new Date().toString(),
    {
        Method: 'InsertBugTalkMessage',
        talkid: talkid,
        message: message,
        imageurl: imageurl,
        talkUserId: talkUserId
    }, function (data, textStatus) {
        if (textStatus == "success") {

        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

function apiGetBugTalkIsExist(bugId) {

    jQuery.get("/BugTalkService/BugTalkService.ashx?time=" + new Date().toString(),
    {
        Method: 'GetBugTalkIsExist',
        bugId: bugId,       
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                $("#btnBugTalk").css("color", "#8197b1");
            }
            else if (result.Result == "4") {
                $("#btnBugTalk").css("color", "green");
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
            $("#btnBugTalk").show();
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//退出群组
function apiQuitBugTalk(groupId, talkId,userId) {
    jQuery.get("/BugTalkService/BugTalkService.ashx?time=" + new Date().toString(),
    {
        Method: 'QuitBugTalk',
        groupId: groupId,
        talkId: talkId,
        userId:userId
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                if (event != null) {
                    layer.msg(result.Message);
                    onCompleteRemoveBugTalk()
                }
                else {
                    onCompleteRemoveBugTalk()
                }
            }           
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
            $("#btnBugTalk").show();
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//关闭群组
function apiCloseBugTalk(talkId,event) {
    jQuery.get("/BugTalkService/BugTalkService.ashx?time=" + new Date().toString(),
    {
        Method: 'CloseBugTalk',
        talkId: talkId,
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                layer.msg(result.Message);
                onCompleteRemoveBugTalk(event)
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
            $("#btnBugTalk").show();
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//获取新的会话
function apiGetNewBugTalk(groupId) {
    jQuery.get("/BugTalkService/BugTalkService.ashx?time=" + new Date().toString(),
    {
        Method: 'GetNewBugTalk',
        groupId: groupId     
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                onCompleteGetNewBugTalk(result.ReturnObj);
            }
            else {
                //失败后的处理
                //layer.msg(result.Message);
            }
            $("#btnBugTalk").show();
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}

//解散群组
function apiDismissBugTalk(groupId, talkId,event) {
    jQuery.get("/BugTalkService/BugTalkService.ashx?time=" + new Date().toString(),
    {
        Method: 'DismissBugTalk',
        groupId: groupId,
        talkId: talkId
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                layer.msg(result.Message);                
                onCompleteRemoveBugTalk(event)
            }
            else {
                //失败后的处理
                layer.msg(result.Message);
            }
            $("#btnBugTalk").show();
        }
        else {
            layer.msg('Failed to connect!');
        }
    });
}


//取项目角色和成员
function apiGetProjectRolesAndUsers(pid, status) {
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
function apiGetItemPartData(BugId) {
    $.get("/Service/BugService.ashx?time=" + new Date().toString(),
    {
        Method: 'GetItemPartData',
        BugId: BugId,       
    }, function (data, textStatus) {
        if (textStatus == "success") {
            var result = JSON.parse(data);
            if (result.Result == "1") {
                //成功后的处理
                bindBugPartData(result.ReturnObj);
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




