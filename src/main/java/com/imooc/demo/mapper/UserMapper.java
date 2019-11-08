package com.imooc.demo.mapper;

import com.imooc.demo.pojo.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface UserMapper extends CrudRepository<User,Integer> {
    User findUserByName(String name);

    User findUserById(Integer id);
}
