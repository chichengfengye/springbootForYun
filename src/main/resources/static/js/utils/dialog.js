//显示弹出框
function showDialog(title, url) {
    layer.open({
        type: 2 //Page层类型
        , area: ['75%', '95%']
        , title: title
        , shade: 0.6 //遮罩透明度
        , maxmin: true //允许全屏最小化
        , content: url
    });
}
//显示弹出框
function showDialogWH(title, url, width, height) {
    layer.open({
        type: 2 //Page层类型
        , area: [width, height]
        , title: title
        , shade: 0.6 //遮罩透明度
        , maxmin: false //允许全屏最小化
        , content: url
    });
}

//显示弹出框
function showDialogWHNoMaxmin(title, url, width, height) {
    layer.open({
        type: 2 //Page层类型
        , area: [width, height]
        , title: title
        , shade: 0.6 //遮罩透明度
        , maxmin: false //允许全屏最小化
        , content: url
        
    });
}



