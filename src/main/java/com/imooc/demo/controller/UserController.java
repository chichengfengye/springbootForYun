//package com.imooc.demo.controller;
//
//import com.imooc.demo.exception.ErrorException;
//import com.imooc.demo.pojo.User;
//import com.imooc.demo.service.UserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//public class UserController {
//    @Autowired
//    private UserService userService;
//
//    @RequestMapping(value = "/userid/{uid}",method = RequestMethod.GET)
//    public User getUserById(@PathVariable Integer uid){
//        User user = userService.findUserById(uid);
//        return user;
//    }
//
//    @RequestMapping(value = "/username/{name}",method = RequestMethod.GET)
//    public User getUserById(@PathVariable String name){
//        return userService.findUserByName(name);
//    }
//
//    @RequestMapping("/users")
//    public List<User> findUsers(){
//        return userService.findUsers();
//    }
//
//    @RequestMapping("/error/{type}")
//    public String testError(@PathVariable Integer type) {
//        if(type == 0){
//            throw new ErrorException("错误！");
//        }
//        return "asdasd";
//    }
//
//}
