package com.example.dbpractice.service.impl;

import com.example.dbpractice.dao.ActivityDao;
import com.example.dbpractice.dao.Participant_ActivityDao;
import com.example.dbpractice.dao.UserDao;
import com.example.dbpractice.entity.Activity;
import com.example.dbpractice.entity.Participant_Activity;
import com.example.dbpractice.entity.User;
import com.example.dbpractice.service.DBService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DBServiceImpl implements DBService {
    @Autowired
    private UserDao userDao;
    @Autowired
    private ActivityDao activityDao;
    @Autowired
    private Participant_ActivityDao p_aDao;


    //user表操作的实现
    @Override
    public List<User> getUserList(){
        return userDao.queryUser();
    }

    @Override
    public User getUserById(String uid){
        return userDao.queryUserById(uid);
    }

    @Override
    public boolean addUser(User userToAdd){
        //对传入的User对象空值判断    id和name都不能为空
        // if(userToAdd.getUid()!=null&&"".equals(userToAdd.getUid())
            // &&userToAdd.getName()!=null&&"".equals(userToAdd.getName())){
                System.out.println("here");
        if(true) {
            try{
                System.out.println("here1");

                int effectedRow = userDao.insertUser(userToAdd);
                if(effectedRow>0){
                    System.out.println("here2");

                    return true;    //插入成功
                }else {
                    throw new RuntimeException("新增用户失败！");
                }
            }catch (Exception e) {
                throw new RuntimeException("新增用户失败" + e.toString());
            }
        }else{
            throw new RuntimeException("用户ID和姓名不能为空！");
        }
    }

    @Override
    public boolean modifyUser(User userToModify) {
        if(userToModify.getUid()!=null&"".equals(userToModify.getUid())
                &&userToModify.getName()!=null&&"".equals(userToModify.getName())){
            try{
                int effectedRow = userDao.updateUser(userToModify);
                if(effectedRow>1){
                    return true;    //修改成功
                }else {
                    throw new RuntimeException("修改用户信息失败！");
                }
            }catch (Exception e){
                throw new RuntimeException("修改用户信息失败"+e.toString());
            }
        }else{
            throw new RuntimeException("用户ID和姓名不能为空！");
        }
    }

    @Override
    public boolean deleteUser(String uid) {
        //如果传入的uid存在对应用户
        if(userDao.queryUserById(uid)!=null){
            try{
                int effectedRow = userDao.deleteUser(uid);
                if(effectedRow>1){
                    return true;    //删除成功
                }else {
                    throw new RuntimeException("删除用户失败！");
                }
            }catch (Exception e ){
                throw new RuntimeException("删除用户失败"+e.toString());
            }
        }else{
            throw new RuntimeException("此用户不存在！");
        }
    }



    //activity表操作的实现
    @Override
    public List<Activity> getActivityList() {
        return activityDao.queryActivity();
    }

    @Override
    public List<Activity> getCertifiedActivity() {
        return activityDao.queryCertifiedActivity();
    }

    @Override
    public Activity getActivityById(int aid) {
        return activityDao.queryActivityById(aid);
    }

    @Override
    public List<Activity> getActivityBySponsorId(int s_uid) {
        return activityDao.queryActivityBySponsorId(s_uid);
    }

    @Override
    public boolean addActivity(Activity activityToAdd) {
        if(activityToAdd.getTitle()!=null&&"".equals(activityToAdd.getTitle())&&
                activityToAdd.getSponsor()!=null&&"".equals(activityToAdd.getSponsor())){
            try{
                int effectedRow = activityDao.insertActivity(activityToAdd);
                if(effectedRow>0){
                    return true;
                }else {
                    throw new RuntimeException("添加活动信息失败");
                }
            }catch (Exception e){
                throw new RuntimeException("添加活动信息失败"+e.toString());
            }
        }else{
            throw  new RuntimeException("活动信息不能为空");
        }
    }

    @Override
    public boolean modifyActivity(Activity activityToModify) {
        if(activityToModify.getTitle()!=null&&"".equals(activityToModify.getTitle())&&
                activityToModify.getSponsor()!=null&&"".equals(activityToModify.getSponsor())){
            try{
                int effectedRow = activityDao.updateActivity(activityToModify);
                if(effectedRow>0){
                    return true;
                }else {
                    throw new RuntimeException("修改活动信息失败");
                }
            }catch (Exception e){
                throw new RuntimeException("修改活动信息失败"+e.toString());
            }
        }else{
            throw  new RuntimeException("活动信息不能为空");
        }
    }

    @Override
    public boolean deleteActivity(int aid) {
        //如果传入的aid存在对应的活动
        if(activityDao.queryActivityById(aid)!=null){
            try{
                int effectedRow = activityDao.deleteActivity(aid);
                if(effectedRow>1){
                    return true;    //删除成功
                }else {
                    throw new RuntimeException("删除活动失败！");
                }
            }catch (Exception e ){
                throw new RuntimeException("删除活动失败"+e.toString());
            }
        }else{
            throw new RuntimeException("此活动不存在！");
        }
    }


    //participant_activity表操作的实现
    @Override
    public List<Participant_Activity> getParticipantActivityList() {
        return p_aDao.queryParticipantActivity();
    }

    @Override
    public List<User> getParticipantByActivityId(int aid) {
        return p_aDao.queryParticipantByActivityId(aid);
    }

    @Override
    public List<Activity> getActivityByParticipantId(String p_uid) {
        return p_aDao.queryActivityByParticipantId(p_uid);
    }

    @Override
    public boolean addParticipantActivity(Participant_Activity p_aToAdd) {
        //对传入的p_a对象空值判断    uid和aid都不能为空
        if(p_aToAdd.getAid()!=null&"".equals(p_aToAdd.getAid())
                &&p_aToAdd.getP_uid()!=null&&"".equals(p_aToAdd.getP_uid())){
            try{
                int effectedRow = p_aDao.insertParticipantActivity(p_aToAdd);
                if(effectedRow>0){
                    return true;    //插入成功
                }else {
                    throw new RuntimeException("新增参与关系失败！");
                }
            }catch (Exception e) {
                throw new RuntimeException("新增参与关系失败" + e.toString());
            }
        }else{
            throw new RuntimeException("用户ID和活动ID不能为空！");
        }
    }

    @Override
    public boolean deleteParticipantActivity(Participant_Activity p_a) {
        //如果传入的uid和aid的组合有对应的项
        if(p_aDao.queryOneParticipantActivity(p_a)!=null){
            try{
                int effectedRow = p_aDao.deleteParticipantActivity(p_a);
                if(effectedRow>1){
                    return true;    //删除成功
                }else {
                    throw new RuntimeException("删除参与关系失败！");
                }
            }catch (Exception e ){
                throw new RuntimeException("删除参与关系失败"+e.toString());
            }
        }else{
            throw new RuntimeException("此参与关系不存在！");
        }
    }
}
