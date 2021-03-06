//package com.imooc.demo.websocket;
//
//import org.springframework.stereotype.Component;
//
//import javax.websocket.*;
//import javax.websocket.server.ServerEndpoint;
//import java.io.IOException;
//import java.util.concurrent.CopyOnWriteArraySet;
//
///**
// * @ServerEndpoint 注解是一个类层次的注解，它的功能主要是将目前的类定义成一个websocket服务器端,
// * 注解的值将被用于监听用户连接的终端访问URL地址,客户端可以通过这个URL来连接到WebSocket服务器端
// * 总结：
// * 0. 依赖spring-boot-websocket就够了，可以不再在denpendicies中特别的加入javaee-api依赖（正如我已经在pom.xml中把它给注释了）
// * 1.创建用@ServerEndPoint标注的类，该类就是一个websocket服务。
// * 2.创建config类，并在里面创建一个expporter的bean，同时还需要将1的类实例化，有两个办法：
// *       2.1 给这个endpont类的@ServerEndPoint注解上再加一个@Compontent注解，让spring初始化它
// *       2.2 直接在config中以@Bean的形式自己new一个实例出来
// *  3.启动服务器。
// */
////@Component
////@ServerEndpoint(value = "/websocket")//, configurator = SpringConfigurator.class)
//public class WebSocketTest {
//    /**
//     * 需要实现四个方法
//     * 1.onOpen
//     * 2.onMessage
//     * 3.onError
//     * 4.onClose
//     */
//    //静态变量，用来记录当前在线连接数。应该把它设计成线程安全的。
//    private static int onlineCount = 0;
//
//    //concurrent包的线程安全Set，用来存放每个客户端对应的MyWebSocket对象。若要实现服务端与单一客户端通信的话，可以使用Map来存放，其中Key可以为用户标识
//    private static CopyOnWriteArraySet<WebSocketTest> webSocketSet = new CopyOnWriteArraySet<WebSocketTest>();
//
//    //与某个客户端的连接会话，需要通过它来给客户端发送数据
//    private Session session;
//
//    /**
//     * 连接建立成功调用的方法
//     * @param session  可选的参数。session为与某个客户端的连接会话，需要通过它来给客户端发送数据
//     */
//    @OnOpen
//    public void onOpen(Session session){
//        this.session = session;
//        webSocketSet.add(this);     //加入set中
//        addOnlineCount();           //在线数加1
//        System.out.println("有新连接加入！当前在线人数为" + getOnlineCount());
//    }
//
//    /**
//     * 连接关闭调用的方法
//     */
//    @OnClose
//    public void onClose(){
//        webSocketSet.remove(this);  //从set中删除
//        subOnlineCount();           //在线数减1
//        System.out.println("有一连接关闭！当前在线人数为" + getOnlineCount());
//    }
//
//    /**
//     * 收到客户端消息后调用的方法
//     * @param message 客户端发送过来的消息
//     * @param session 可选的参数
//     */
//    @OnMessage
//    public void onMessage(String message, Session session) {
//        System.out.println("来自客户端的消息:" + message);
//        //群发消息
//        for(WebSocketTest item: webSocketSet){
//            try {
//                item.sendMessage(message);
//            } catch (IOException e) {
//                e.printStackTrace();
//                continue;
//            }
//        }
//    }
//
//    /**
//     * 发生错误时调用
//     * @param session
//     * @param error
//     */
//    @OnError
//    public void onError(Session session, Throwable error){
//        System.out.println("发生错误");
//        error.printStackTrace();
//    }
//
//    /**
//     * 这个方法与上面几个方法不一样。没有用注解，是根据自己需要添加的方法。
//     * @param message
//     * @throws IOException
//     */
//    public void sendMessage(String message) throws IOException{
//        this.session.getBasicRemote().sendText(message);
//        //this.session.getAsyncRemote().sendText(message);
//    }
//
//    public static synchronized int getOnlineCount() {
//        return onlineCount;
//    }
//
//    public static synchronized void addOnlineCount() {
//        WebSocketTest.onlineCount++;
//    }
//
//    public static synchronized void subOnlineCount() {
//        WebSocketTest.onlineCount--;
//    }
//}
