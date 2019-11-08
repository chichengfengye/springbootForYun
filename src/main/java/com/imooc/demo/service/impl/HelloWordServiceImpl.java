package com.imooc.demo.service.impl;

import com.imooc.demo.service.HelloWordService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class HelloWordServiceImpl implements HelloWordService {
    @Value("${front.say}")
    private String prefix;

    public String sayHello(String name){
        String s = prefix + ":" + name;
        System.out.println(s);
        return s;
    }
}
