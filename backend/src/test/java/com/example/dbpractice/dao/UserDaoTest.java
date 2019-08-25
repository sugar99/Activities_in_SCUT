package com.example.dbpractice.dao;

import com.example.dbpractice.entity.User;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)    //run with
@SpringBootTest
public class UserDaoTest {
    @Autowired
    private UserDao userDao;

//    @Test
//    @Ignore
//    public void queryUser() {
//        List<User> userList = userDao.queryUser();
//
////        System.out.println(test);
////        System.out.println("finish");
//    }

    @Test
    @Ignore
    public void queryUserById() {
        System.out.println(userDao.queryUserById("201730683413"));
    }

    @Test
    public void insertUser() {
        User user = new User("skywalker","201730683413","suheng","jerry",
                "男","2017","软件工程","软件学院","http://xxx.com/avator.jpg",
                "c10-518","110","1464778552@qq.com",true);
        int effectedNum = userDao.insertUser(user);
        assertEquals(1,effectedNum);
    }

//    @Test
//    @Ignore
//    public void updateUser() {
//
//        int effectedNum = userDao.updateUser(user);
//        assertEquals(1,effectedNum);
//    }

//    @Test
//    @Ignore
//    public void deleteUser() {
//        int effectedNum = userDao.deleteUser("201730686666");
//        assertEquals(1,effectedNum);
//    }
}