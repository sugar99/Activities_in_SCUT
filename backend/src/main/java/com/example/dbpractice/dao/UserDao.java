package com.example.dbpractice.dao;

import com.example.dbpractice.entity.User;
import org.springframework.context.annotation.Bean;

import java.util.List;

//创建Dao层 interface
public interface UserDao {
    //返回所有
    List<User> queryUser();

    //以u_id查询用户
    User queryUserById(String u_id);

    //以学号查询用户
    User queryUserBySchoolId(String school_id);

    //新增用户
    int insertUser(User user);  //返回的int是数据库操作受影响的行数

    //更新用户信息
    int updateUser(User user);

    //删除用户
    int deleteUser(String uid);
}
