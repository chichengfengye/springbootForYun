package com.imooc.demo.service.impl;

import com.imooc.demo.mapper.UserMapper;
import com.imooc.demo.pojo.User;
import com.imooc.demo.service.UserService;
import com.imooc.demo.utils.UserThreadLocal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserMapper userMapper;

    @Override
    public User findUserByName(String name) {
        try{
            User user = userMapper.findUserByName(name);
            return user;
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public User findUserById(Integer uid) {
        try{
            User user = userMapper.findUserById(uid);
            Optional<User> optional = userMapper.findById(uid);
            optional.get();
            return user;
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public List<User> findUsers() {
        Iterable<User> iterable = userMapper.findAll();
        Iterator iterator = iterable.iterator();
        List<User> users = new ArrayList<>();
        while (iterator.hasNext()){
            users.add((User)iterator.next());
        }
        return users;
    }

    @Override
    public User getCurrentUser() {
        return UserThreadLocal.get();
    }

    @Override
    public void sout() {
        System.out.println("sout...");
    }
}
