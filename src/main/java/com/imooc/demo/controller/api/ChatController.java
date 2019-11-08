package com.imooc.demo.controller.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ChatController {

    @RequestMapping(value = "/chat")
    public String chat(){
        return "chat";
    }
}
