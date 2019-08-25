package com.example.dbpractice.dao;

import com.example.dbpractice.entity.Activity;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)    //run with
@SpringBootTest
public class ActivityDaoTest {

    @Autowired
    private ActivityDao activityDao;

    @Test
    @Ignore
    public void queryActivity() {

    }

    @Test
    @Ignore
    public void queryCertifiedActivity() {
    }

    @Test
    @Ignore
    public void queryActivityById() {
    }

    @Test
    @Ignore
    public void queryActivityBySponsorId() {
    }

    @Test
    public void insertAcitivity() {
//        Activity activity = new Activity(null,"华工开学典礼",new Date(),"学术大讲堂","test",
//                "莘莘学子喜迎开学","http://xxx.com/poster.com",250,"skywalker",
//                "软件学院",true,1);
        Activity activity = new Activity(null,"华工退学典礼",new Date(),"学校门口","test",
                "你被退学了~拜拜","http://xxx.com/poster.com",4,"LotteWong",
                "软件学院",false,1);

        int effectedNum = activityDao.insertActivity(activity);
        assertEquals(1,effectedNum);
    }
}