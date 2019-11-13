package com.imooc.demo.controller.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Enumeration;

@RestController
@RequestMapping("/api")
public class ApiTestController {
    Logger logger = LoggerFactory.getLogger(ApiTestController.class);

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
    public String time(HttpServletRequest request) {
        Enumeration<String> headers = request.getHeaderNames();
        while (headers.hasMoreElements()) {
            String headerName = headers.nextElement();
            String value = request.getHeader(headerName);
            logger.info("========HEADER: " + headerName+"="+value);
        }
        return dateFormat.format(new Date());
    }

}
