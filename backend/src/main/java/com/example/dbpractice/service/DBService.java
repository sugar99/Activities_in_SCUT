package com.example.dbpractice.service;

import com.example.dbpractice.entity.*;

import javax.servlet.http.HttpServletRequest;
import java.text.ParseException;
import java.util.List;

public interface DBService {
    //user表 操作
    //返回所有
    List<User> getUserList();
    //以id查询用户
    User getUserById(String u_id);
    //以学号查询用户
    User getUserBySchoolId(String school_id);
    //新增用户
    boolean addUser(User user);  //返回的int是数据库操作受影响的行数
    //更新用户信息
    boolean modifyUser(User user);
    //删除用户
    boolean deleteUser(String u_id);
    //组装User实体
    User makeUser(HttpServletRequest request);

    //activity表 操作
    //查询全部活动
    List<Activity> getActivityList();
    //查询全部官方活动
    List<Activity> getOfficialActivity();
    //以aid查询活动
    Activity getActivityById(int a_id);
    //以publisher的id查询活动
    List<Activity> getActivityByPublisherId(String u_id);
//    //以tag来查询活动
    List<Activity> getActivityByTag(int tag);
    //插入活动记录
    boolean addActivity(Activity activity);
    //更新活动记录
    boolean modifyActivity(Activity activity);
    //删除活动记录
    boolean deleteActivity(int a_id);
    //关键词搜索 目前仅支持活动title搜索
    List<Activity> getActivityByKeyWord(String keyWord);
    //组装Activity实体
    Activity makeActivity(HttpServletRequest request);

    //sign表 操作
    //返回所有参与关系
    List<Sign> getSignList();
    //以活动id查询参与者
    List<String> getParticipantIdByAid(int a_id);
    //以参与者id查询活动
    List<Integer> getActivityIdByUid(String u_id);
    //新增参与关系
    boolean addSign(Sign sign);
    //删除参与关系
    boolean deleteSign(Sign sign);
    //是否有此参与关系
    boolean hasSign(Sign sign);
    //组装Sign实体
    Sign makeSign(HttpServletRequest request);

    //constrains表 操作
    Constrains getConstrainsByCid(int c_id);
    boolean modifyConstrains(Constrains constrains);
    boolean deleteConstrains(int c_id);
    //组装Constrains实体
    Constrains makeConstrains(HttpServletRequest request);

    //department表 操作
    List<Department> getDepartmentList();
    Department getDepartmentByDeptName(String dept_name);
    boolean addDepartment(Department department);
    boolean modifyDepartment(Department department);
    boolean deleteDepartment(String dept_name);
    //组装Department实体
    Department makeDepartment(HttpServletRequest request);
}

