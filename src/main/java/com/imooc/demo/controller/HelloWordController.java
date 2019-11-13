package com.imooc.demo.controller;

//import com.imooc.demo.mySchedule.MySchedule1;
//import com.imooc.demo.service.HelloWordService;
//import com.imooc.demo.service.ScheduleService;
//import org.springframework.beans.factory.annotation.Autowired;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;

@Controller
@RequestMapping("/hello")
public class HelloWordController {

    private final Logger logger = LoggerFactory.getLogger(HelloWordController.class);
//    @Autowired
//    private HelloWordService helloWordService;
//    @Autowired
//    private ScheduleService schedule;

    @GetMapping("/{name}")
    public String HelloWord(@PathVariable("name") String name,
                            Model model,
                            HttpServletRequest request){
        Enumeration<String> headerNames = request.getHeaderNames();
        while (headerNames.hasMoreElements()) {
            String headerName = headerNames.nextElement();
            logger.info("HEADER: " + headerName + "=" + request.getHeader(headerName));
        }



        String content = name + " 你好！欢迎访问JF的网站！ \n welcome to JF's webSite!";//helloWordService.sayHello(name);
        model.addAttribute("content", content);
//        System.out.println(content);
        return "thymleaf";
    }

//    @RequestMapping(value = "/s")
//    public void s(){
//        schedule.init();
//    }

}
