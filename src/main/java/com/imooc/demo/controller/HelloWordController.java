package com.imooc.demo.controller;

//import com.imooc.demo.mySchedule.MySchedule1;
//import com.imooc.demo.service.HelloWordService;
//import com.imooc.demo.service.ScheduleService;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/hello")
public class HelloWordController {

//    @Autowired
//    private HelloWordService helloWordService;
//    @Autowired
//    private ScheduleService schedule;

    @GetMapping("/{name}")
    public String HelloWord(@PathVariable("name") String name,
                            Model model){
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
