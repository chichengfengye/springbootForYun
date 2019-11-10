package com.imooc.demo.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.JSONWrappedObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;
import java.util.HashMap;

@RestController("/webhook")
public class WebHookController {
    private static final Logger logger = LoggerFactory.getLogger(WebHookController.class);
    private static final String X_GitHub_Event = "X-GitHub-Event";
    private static final String X_GitHub_Delivery = "X-GitHub-Delivery";
    private static final String X_Hub_Signature = "X-Hub-Signature";

    @PostMapping
    public Boolean webhook(@RequestBody HashMap<String,Object> payLoad, HttpServletRequest request) throws JsonProcessingException {
        logger.info("================== 验证域名有效性 ========================");
        String event = request.getHeader(X_GitHub_Event);
        String guid = request.getHeader(X_GitHub_Delivery);
        String digest = request.getHeader(X_Hub_Signature);
//
        logger.info("========================== WebHook: Three headers ========================");
        logger.info(X_GitHub_Event);
        logger.info(X_GitHub_Delivery);
        logger.info(X_Hub_Signature);

        logger.info("========================== WebHook: All headers ========================");
        Enumeration<String> headerNames =  request.getHeaderNames();
        if (headerNames != null) {
            while (headerNames.hasMoreElements()) {
                String headerName = headerNames.nextElement();
                logger.info("header: " + headerName + "=" + request.getHeader(headerName));
            }
        }


//        HashMap<String,String> pusher = (HashMap)payLoad.get("pusher");
        ObjectMapper objectMapper = new ObjectMapper();
        logger.info("========================== WebHook: playLoad ========================");
        logger.info(objectMapper.writeValueAsString(payLoad));
   /*     if (payLoad != null) {
            String name = pusher.get("name");
            String email = pusher.get("email");
            logger.info("name=" + name + "; email=" + email);
            return true;
        }*/

        return false;
    }
}
