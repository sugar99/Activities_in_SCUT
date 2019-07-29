package com.example.dbpractice.service;

import com.example.dbpractice.entity.Activity;
import com.example.dbpractice.entity.Participant_Activity;
import com.example.dbpractice.entity.User;

import java.util.List;

public interface DBService {
    //user表 操作
    //返回所有
    List<User> getUserList();
    //以id查询用户
    User getUserById(String uid);
    //新增用户
    boolean addUser(User user);  //返回的int是数据库操作受影响的行数
    //更新用户信息
    boolean modifyUser(User user);
    //删除用户
    boolean deleteUser(String uid);

    //activity表 操作
    //查询全部活动
    List<Activity> getActivityList();
    //查询全部官方活动
    List<Activity> getCertifiedActivity();
    //以aid查询活动
    Activity getActivityById(int aid);
    //以sponsor的id查询活动
    List<Activity> getActivityBySponsorId(int s_uid);
    //插入活动记录
    boolean addActivity(Activity activity);
    //更新活动记录
    boolean modifyActivity(Activity activity);
    //删除活动记录
    boolean deleteActivity(int aid);

    //participant_activity表 操作
    //返回所有
    List<Participant_Activity> getParticipantActivityList();
    //以活动id查询参与者
    List<User> getParticipantByActivityId(int aid);
    //以参与者id查询活动
    List<Activity> getActivityByParticipantId(String p_uid);

    //新增参与关系
    boolean addParticipantActivity(Participant_Activity p_a);
    //删除参与关系
    boolean deleteParticipantActivity(Participant_Activity p_a);
}

