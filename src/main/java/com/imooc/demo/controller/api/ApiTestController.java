package com.imooc.demo.controller.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
@RequestMapping("/api")
public class ApiTestController {
    public static final SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd 'at' HH:mm:ss z");

    @PostMapping()
    public String post() {
        return "post method";
    }

    @GetMapping()
    public String get() {
        return "get method";
    }

    @RequestMapping("/time")
    public String time() {
        return dateFormat.format(new Date());
    }
}
