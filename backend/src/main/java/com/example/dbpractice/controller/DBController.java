package com.example.dbpractice.controller;

import com.example.dbpractice.entity.Activity;
import com.example.dbpractice.entity.Participant_Activity;
import com.example.dbpractice.entity.User;
import com.example.dbpractice.service.DBService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


//Controller把前端传入的东西传递给Service层
@RestController
@RequestMapping(value = "/dbadmin")
public class DBController {
    @Autowired
    private DBService DBService;

    
    //针对user表的可选操作
    //返回用户列表
    @RequestMapping(value = "/listuser",method = RequestMethod.GET)
    private Map<String,Object> getUserList(){
        Map<String, Object> modelMap = new HashMap<>();
        List<User> userList = DBService.getUserList();
        modelMap.put("userList",userList);
        return modelMap;
    }

    //返回uid指定的用户
    @RequestMapping(value = "/getuserbyid",method = RequestMethod.GET)
    private Map<String,Object> getUserById(String uid){
        Map<String, Object> modelMap = new HashMap<>();
        User user = DBService.getUserById(uid);
        modelMap.put("user",user);
        return modelMap;
    }

    //新增用户
    @RequestMapping(value = "/adduser",method = RequestMethod.POST)
    private Map<String,Object> addUser(@RequestBody User userToAdd){
        Map<String, Object> modelMap = new HashMap<>();
        modelMap.put("success", DBService.addUser(userToAdd));
        return modelMap;
    }

    //修改用户信息
    @RequestMapping(value = "/modifyuser",method = RequestMethod.POST)
    private Map<String,Object> modifyUser(@RequestBody User userToModify){
        Map<String, Object> modelMap = new HashMap<>();
        modelMap.put("success", DBService.modifyUser(userToModify));
        return modelMap;
    }

    //删除用户
    @RequestMapping(value = "/deleteuser",method = RequestMethod.GET)
    private Map<String,Object> deleteUser(String uid){
        Map<String, Object> modelMap = new HashMap<>();
        modelMap.put("success", DBService.deleteUser(uid));
        return modelMap;
    }



    //针对activity表的可选操作
    //返回活动列表
    @RequestMapping(value = "/listactivity",method = RequestMethod.GET)
    private Map<String,Object> getActvityList(){
        Map<String, Object> modelMap = new HashMap<>();
        List<Activity> activityList = DBService.getActivityList();
        modelMap.put("activityList",activityList);
        return modelMap;
    }

    //返回aid指定的活动
    @RequestMapping(value = "/getactivitybyid",method = RequestMethod.GET)
    private Map<String,Object> getActivityById(int uid){
        Map<String, Object> modelMap = new HashMap<>();
        Activity activity = DBService.getActivityById(uid);
        modelMap.put("activity",activity);
        return modelMap;
    }

    //新增活动
    @RequestMapping(value = "/addactivity",method = RequestMethod.POST)
    // TODO: 修改RequestBody为RequestParam以通过小程序POST请求
    private Map<String,Object> addUser(@RequestParam Activity activityToAdd){
        Map<String, Object> modelMap = new HashMap<>();
        modelMap.put("success", DBService.addActivity(activityToAdd));
        return modelMap;
    }

    //修改活动信息
    @RequestMapping(value = "/modifyactivity",method = RequestMethod.POST)
    private Map<String,Object> modifyUser(@RequestBody Activity activityToModify){
        Map<String, Object> modelMap = new HashMap<>();
        modelMap.put("success", DBService.modifyActivity(activityToModify));
        return modelMap;
    }

    //删除活动
    @RequestMapping(value = "/deleteactivity",method = RequestMethod.GET)
    private Map<String,Object> deleteActivity(int uid){
        Map<String, Object> modelMap = new HashMap<>();
        modelMap.put("success", DBService.deleteActivity(uid));
        return modelMap;
    }



    //针对participant_activity表的可选操作
    //返回参与关系列表
    @RequestMapping(value = "/listparticipantactivity",method = RequestMethod.GET)
    private Map<String,Object> getParticipantActivityList(){
        Map<String, Object> modelMap = new HashMap<>();
        List<Participant_Activity> paList = DBService.getParticipantActivityList();
        modelMap.put("paList",paList);
        return modelMap;
    }

    //返回uid指定的用户参与的活动
    @RequestMapping(value = "/getactivitybyparticipantid",method = RequestMethod.GET)
    private Map<String,Object> getActivityByParticipantId(String uid){
        Map<String, Object> modelMap = new HashMap<>();
        List<Activity> activityList = DBService.getActivityByParticipantId(uid);
        modelMap.put("activityList",activityList);
        return modelMap;
    }

    //返回aid指定的活动的参与者
    @RequestMapping(value = "/getparticipantbyactivityid",method = RequestMethod.GET)
    private Map<String,Object> getParticipantByActivityId(int aid){
        Map<String, Object> modelMap = new HashMap<>();
        List<User> userList = DBService.getParticipantByActivityId(aid);
        modelMap.put("userList","userList");
        return modelMap;
    }

    //新增参与关系
    @RequestMapping(value = "/addparticipantactivity",method = RequestMethod.POST)
    private Map<String,Object> addUser(@RequestBody Participant_Activity p_aToAdd){
        Map<String, Object> modelMap = new HashMap<>();
        modelMap.put("success", DBService.addParticipantActivity(p_aToAdd));
        return modelMap;
    }

    //删除参与关系
    @RequestMapping(value = "/deleteparticipantactivity",method = RequestMethod.GET)
    private Map<String,Object> deleteParticipantActivity(Participant_Activity p_aToDelete){
        Map<String, Object> modelMap = new HashMap<>();
        modelMap.put("success", DBService.deleteParticipantActivity(p_aToDelete));
        return modelMap;
    }
}
