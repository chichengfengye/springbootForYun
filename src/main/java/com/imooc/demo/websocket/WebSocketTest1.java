//package com.imooc.demo.websocket;
//
//import org.springframework.stereotype.Component;
//
//import javax.websocket.*;
//import javax.websocket.server.ServerEndpoint;
//import java.io.IOException;
//import java.util.HashMap;
//import java.util.Map;
//import java.util.Set;
//
//@Component
//@ServerEndpoint(value = "/websocket1")
//public class WebSocketTest1 {
//    private static Integer onLineNum = 0;
//    //静态的，唯一的，被多个websocket实例共享的
//    private static Map<String, WebSocketTest1> wsBasket = new HashMap<>();
//
//    //属于每个websocket实例的
//    private boolean isFirst = true;
//
//    private Session session;
//
//    private String name;
//
//    public Session getSession() {
//        return session;
//    }
//
//    public void setSession(Session session) {
//        this.session = session;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    @OnOpen
//    public void onOpen(Session session){
//        onLineNum++;
//        this.session = session;
//        synchronized (wsBasket) {
//            wsBasket.put(session.getId(), this);
//            System.out.println("有新连接接入...sessionId:"+ session.getId() +"["+ onLineNum +"]");
//        }
//    }
//
//    @OnClose
//    public void OnClose() {
//        synchronized (wsBasket) {
//            wsBasket.remove(session.getId());
//            System.out.println("一个用户断开链接...sessionId:"+session.getId()+"["+ onLineNum +"]");
//        }
//        System.out.println("connection disconnected...");
//    }
//
//    @OnMessage
//    public void OnMessage(String message,Session session) throws IOException {
//        String id = session.getId();
//        if(isFirst){
//            isFirst = false;
//            System.out.println("message from client:" + message);
//            String username = message;
//            this.setName(username);
//        }else{
//            Set<String> sessionIds = wsBasket.keySet();
//            String username = wsBasket.get(session.getId()).getName();
//            synchronized (wsBasket) {
//                for (String sessionId : sessionIds) {
////                if(!id.equals(sessionId)){
//                    System.out.println("message from "+ username +":" + message);
//                    WebSocketTest1 webSocketTest1 = wsBasket.get(sessionId);
//                    webSocketTest1.getSession().getBasicRemote().sendText(username+":"+message);
////                }
//                }
//            }
//        }
//    }
//
//    @OnError
//    public void OnError(Session session,Throwable throwable) {
//        System.err.println("an error turn out...");
//        throwable.printStackTrace();
//    }
//}
