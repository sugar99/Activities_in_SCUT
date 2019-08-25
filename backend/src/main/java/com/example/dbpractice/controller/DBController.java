package com.example.dbpractice.controller;

import com.example.dbpractice.entity.*;
import com.example.dbpractice.service.DBService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
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
    //返回全部用户列表
    @RequestMapping(value = "/listuser",method = RequestMethod.GET)
    private Map<String,Object> getUserList(){
        Map<String, Object> modelMap = new HashMap<>();
        List<User> userList = DBService.getUserList();
        modelMap.put("userList",userList);
        return modelMap;
    }
    //返回u_id指定的用户
    @RequestMapping(value = "/getuserbyid",method = RequestMethod.GET)
    private Map<String,Object> getUserById(String u_id){
        Map<String, Object> modelMap = new HashMap<>();
        User user = DBService.getUserById(u_id);
        modelMap.put("user",user);
        return modelMap;
    }
    //新增用户 //用户注册
    @RequestMapping(value = "/adduser",method = RequestMethod.GET)
    private Map<String,Object> addUser(HttpServletRequest request, HttpServletResponse response){
        Map<String, Object> modelMap = new HashMap<>();
        modelMap.put("success", DBService.addUser(DBService.makeUser(request)));
        return modelMap;
    }
    //修改用户信息
    @RequestMapping(value = "/modifyuser",method = RequestMethod.GET)
    private Map<String,Object> modifyUser(HttpServletRequest request, HttpServletResponse response){
        Map<String, Object> modelMap = new HashMap<>();
        modelMap.put("success", DBService.modifyUser(DBService.makeUser(request)));
        return modelMap;
    }
    //删除用户
    @RequestMapping(value = "/deleteuser",method = RequestMethod.GET)
    private Map<String,Object> deleteUser(String u_id){
        Map<String, Object> modelMap = new HashMap<>();
        modelMap.put("success", DBService.deleteUser(u_id));
        return modelMap;
    }



    //针对activity表的可选操作
    //返回全部活动列表
    @RequestMapping(value = "/listactivity",method = RequestMethod.GET)
    private Map<String,Object> getActvityList(){
        Map<String, Object> modelMap = new HashMap<>();
        List<Activity> activityList = DBService.getActivityList();
        modelMap.put("activityList",activityList);
        return modelMap;
    }
    //返回a_id指定的活动
    @RequestMapping(value = "/getactivitybyid",method = RequestMethod.GET)
    private Map<String,Object> getActivityById(int u_id){
        Map<String, Object> modelMap = new HashMap<>();
        Activity activity = DBService.getActivityById(u_id);
        modelMap.put("activity",activity);
        return modelMap;
    }
    //返回u_id指定用户发布的所有活动
    @RequestMapping(value = "getactivitybypublisherid",method = RequestMethod.GET)
    private Map<String,Object> getActivityByPublisherId(String u_id){
        Map<String, Object> modelMap = new HashMap<>();
        List<Activity> activityList = DBService.getActivityByPublisherId(u_id);
        modelMap.put("activityList",activityList);
        return modelMap;
    }
    //新增活动
    @RequestMapping(value = "/addactivity",method = RequestMethod.GET)
    private Map<String,Object> addActivity(HttpServletRequest request, HttpServletResponse response){
        Map<String, Object> modelMap = new HashMap<>();
        modelMap.put("success", DBService.addActivity(DBService.makeActivity(request)));
        return modelMap;
    }
    //修改活动信息
    @RequestMapping(value = "/modifyactivity",method = RequestMethod.GET)
    private Map<String,Object> modifyActivity(HttpServletRequest request, HttpServletResponse response){
        Map<String, Object> modelMap = new HashMap<>();
        modelMap.put("success", DBService.modifyActivity(DBService.makeActivity(request)));
        return modelMap;
    }
    //删除活动
    @RequestMapping(value = "/deleteactivity",method = RequestMethod.GET)
    private Map<String,Object> deleteActivity(int u_id){
        Map<String, Object> modelMap = new HashMap<>();
        modelMap.put("success", DBService.deleteActivity(u_id));
        return modelMap;
    }



    //针对sign表的可选操作
    //返回全部参与关系
    @RequestMapping(value = "/listsign",method = RequestMethod.GET)
    private Map<String,Object> getSignList(){
        Map<String, Object> modelMap = new HashMap<>();
        List<Sign> signList = DBService.getSignList();
        modelMap.put("signList",signList);
        return modelMap;
    }
    //查询a_id指定的活动的所有参与者的u_id列表
    @RequestMapping(value = "/getparticipantidbyaid",method = RequestMethod.GET)
    public Map<String,Object> getParticipantIdByAid(int a_id){
        Map<String, Object> modelMap = new HashMap<>();
        List<String> participantIdList = DBService.getParticipantIdByAid(a_id);
        modelMap.put("participantIdList",participantIdList);
        return modelMap;
    }
    //查看u_id指定用户已参与的所有活动的a_id列表
    @RequestMapping(value = "/getactivityidbyuid",method = RequestMethod.GET)
    public Map<String,Object> getActivityIdByUid(String u_id){
        Map<String, Object> modelMap = new HashMap<>();
        List<Integer> activityIdList = DBService.getActivityIdByUid(u_id);
        modelMap.put("activityIdList",activityIdList);
        return modelMap;
    }
    //新增参与关系 用户参与了一个活动
    @RequestMapping(value = "/addsign",method = RequestMethod.GET)
    public Map<String,Object> addSign(HttpServletRequest request, HttpServletResponse response){
        Map<String, Object> modelMap = new HashMap<>();
        modelMap.put("success", DBService.addSign(DBService.makeSign(request)));
        return modelMap;
    }
    //删除参与关系 用户取消参与活动
    @RequestMapping(value = "/deletesign",method = RequestMethod.GET)
    public Map<String,Object> deleteSign(HttpServletRequest request, HttpServletResponse response){
        Map<String, Object> modelMap = new HashMap<>();
        modelMap.put("success", DBService.deleteSign(DBService.makeSign(request)));
        return modelMap;
    }



    //针对department表的可选操作
    //返回全部学院/部门信息
    @RequestMapping(value = "/listdepartment",method = RequestMethod.GET)
    private Map<String,Object> getDepartmentList(){
        Map<String, Object> modelMap = new HashMap<>();
        List<Department> departmentList = DBService.getDepartmentList();
        modelMap.put("departmentList",departmentList);
        return modelMap;
    }
    //返回dept_name指定的部门/学院信息
    @RequestMapping(value = "/getdepartmentbydeptname",method = RequestMethod.GET)
    private Map<String,Object> getDepartmentByDeptName(String dept_name){
        Map<String, Object> modelMap = new HashMap<>();
        Department department = DBService.getDepartmentByDeptName(dept_name);
        modelMap.put("department",department);
        return modelMap;
    }
    //新增学院/部门
    @RequestMapping(value = "/adddepartment",method = RequestMethod.GET)
    private Map<String,Object> addDepartment(HttpServletRequest request, HttpServletResponse response){
        Map<String, Object> modelMap = new HashMap<>();
        modelMap.put("success", DBService.addDepartment(DBService.makeDepartment(request)));
        return modelMap;
    }
    //修改学院/部门信息
    @RequestMapping(value = "/modifydepartment",method = RequestMethod.GET)
    private Map<String,Object> modifyDepartment(HttpServletRequest request, HttpServletResponse response){
        Map<String, Object> modelMap = new HashMap<>();
        modelMap.put("success", DBService.modifyDepartment(DBService.makeDepartment(request)));
        return modelMap;
    }
    //删除学院/部门
    @RequestMapping(value = "/deletedepartment",method = RequestMethod.GET)
    private Map<String,Object> deleteDepartment(String dept_name){
        Map<String, Object> modelMap = new HashMap<>();
        modelMap.put("success", DBService.deleteDepartment(dept_name));
        return modelMap;
    }

}
