//package com.imooc.demo.controller.otherController;
//
//import com.imooc.demo.pojo.User;
//import com.imooc.demo.service.UserService;
//import com.imooc.demo.utils.UserThreadLocal;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//public class ThreadLocalController {
//    @Autowired
//    private UserService userService;
//
//    @RequestMapping(value = "/thread/{uid}/{name}")
//    public User test(@PathVariable Integer uid, @PathVariable String name) {
//        User user = new User();
//        user.setId(uid);
//        user.setName(name);
//        UserThreadLocal.set(user);
//        return userService.getCurrentUser();
//    }
//}
