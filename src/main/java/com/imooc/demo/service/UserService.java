package com.imooc.demo.service;

import com.imooc.demo.pojo.User;

import java.util.List;

public interface UserService {
    User findUserByName(String name);

    User findUserById(Integer uid);

    List<User> findUsers();

    User getCurrentUser();

    void sout();
}
