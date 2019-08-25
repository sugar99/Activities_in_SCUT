package com.example.dbpractice.dao;

import com.example.dbpractice.entity.Sign;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)    //run with
@SpringBootTest
public class SignDaoTest {

    @Autowired
    private SignDao signDao;

    @Test
    public void querySign() {
    }

    @Test
    public void queryParticipantIdByAid() {
    }

    @Test
    public void queryActivityIdByUid() {
    }

    @Test
    public void insertSign() {
        Sign sign = new Sign(2,"LotteWong");
        int effectedNum = signDao.insertSign(sign);
        assertEquals(1,effectedNum);
    }

    @Test
    public void deleteSignByAid() {
    }

    @Test
    public void deleteSign() {
        Sign sign = new Sign(2,"LotteWong");
        int effectedNum = signDao.deleteSign(sign);
        assertEquals(1,effectedNum);
    }

    @Test
    public void hasSign() {
    }
}