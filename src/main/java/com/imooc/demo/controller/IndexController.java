package com.imooc.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import javax.servlet.http.HttpServletRequest;

@Controller
public class IndexController {
    @GetMapping("/")
    public String HelloWord(Model model,
                            HttpServletRequest request){
        return "index";
    }
}
