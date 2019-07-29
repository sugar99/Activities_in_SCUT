package com.example.dbpractice.dao;


import com.example.dbpractice.entity.Activity;
import com.example.dbpractice.entity.Participant_Activity;
import com.example.dbpractice.entity.User;

import java.util.List;

public interface Participant_ActivityDao {
    //返回所有
    List<Participant_Activity> queryParticipantActivity();
    //以活动id查询参与者
    List<User> queryParticipantByActivityId(int aid);
    //以参与者id查询活动
    List<Activity> queryActivityByParticipantId(String p_uid);
    //以参与者id+活动id定位到一条记录
    Participant_Activity queryOneParticipantActivity(Participant_Activity p_a);
    //新增参与关系
    int insertParticipantActivity(Participant_Activity p_a);
    //删除参与关系
    int deleteParticipantActivity(Participant_Activity p_a);
}
