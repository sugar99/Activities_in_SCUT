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

    @Test
    @Ignore
    public void queryUser() {
        List<User> userList = userDao.queryUser();
        String test = userList.get(0).getName()+userList.get(0).getUid();
        System.out.println(test);
        System.out.println("finish");
    }

    @Test
    @Ignore
    public void queryUserById() {
        System.out.println(userDao.queryUserById("201730683413"));
    }

    @Test
    
    public void insertUser() {
        User user = new User("2019","wong","c8","000000");
        int effectedNum = userDao.insertUser(user);
        assertEquals(1,effectedNum);
    }

    @Test
    @Ignore
    public void updateUser() {
        User user = new User("201730683413","sh","c10-666","111111");
        int effectedNum = userDao.updateUser(user);
        assertEquals(1,effectedNum);
    }

    @Test
    @Ignore
    public void deleteUser() {
        int effectedNum = userDao.deleteUser("201730686666");
        assertEquals(1,effectedNum);
    }
}