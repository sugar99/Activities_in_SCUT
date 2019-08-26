package com.example.dbpractice.dao;

import com.example.dbpractice.entity.Activity;

import java.util.List;

public interface ActivityDao {
    //查询全部活动
    List<Activity> queryActivity();

    //查询全部官方活动
    List<Activity> queryOfficialActivity();

    //以a_id查询活动
    Activity queryActivityById(int a_id);

    //以publisher的id查询活动
    List<Activity> queryActivityIdByPublisherId(String u_id);

    //以tag查询活动
    List<Activity> queryActivityByTag(String tag);
    //TODO 以其他字段查询活动

    //插入活动记录
    int insertActivity(Activity activity);

    //更新活动记录
    int updateActivity(Activity activity);

    //删除活动记录
    int deleteActivity(int a_id);
}