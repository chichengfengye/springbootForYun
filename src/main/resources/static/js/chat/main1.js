var ws = null;
var uri1 = "ws://localhost/websocket1";
var uri2 = "ws://192.168.1.4/websocket1";
var uri3 = "ws://192.168.1.4:8080/websocket1";
var uri4 = "ws://localhost:8080/websocket1";

//解决办法：1.该端口8080 2.该localhost为本机IP
window.onload = function (ev) {
    $(".connectUri").click(function () {
        initWebSocket($(this).html());
    });

    $("#sendBt").click(function () {
        send();
    });
    try {
        var uri = uri4;
        initWebSocket(uri);
    } catch (e) {
        console.log(e.message);
        showMsg("websocket initialization failed!\n"+e.message);
    }
};
function showMsg(msg) {
    $("#msgWindow").html("<p style='color:red;'>"+msg+"</p>");

}

function closeWebSocket() {
    ws.close();
}

function clearInputWindow() {
    $("#inputValue").html("");
}

function send() {
    ws.send($("#inputValue").val());
    clearInputWindow();
}

function initWebSocket(uri) {
    $("#uri").html(uri);
    ws = new WebSocket(uri);
    ws.onerror = onError;
    ws.onclose = onClose;
    ws.onmessage = onMessage;
    ws.onopen = onOpen;
}

function onOpen() {
    var name = prompt("给自己一个昵称");
    ws.send(name);
}

function onMessage(message) {
    $("#chatWindow").append("<p>"+ message.data +"</p>")
}

function onError(e) {
    console.log(e);
}

function onClose() {
    alert("关闭");
}

window.onbeforeunload=function (){
    disconnect();
};

function disconnect() {
    closeWebSocket();
}