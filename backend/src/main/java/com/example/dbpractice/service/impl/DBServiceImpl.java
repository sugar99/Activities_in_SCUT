package com.example.dbpractice.service.impl;

import com.example.dbpractice.dao.*;
import com.example.dbpractice.entity.*;
import com.example.dbpractice.service.DBService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

@Service
public class DBServiceImpl implements DBService {
    @Autowired
    private UserDao userDao;
    @Autowired
    private ActivityDao activityDao;
    @Autowired
    private SignDao signDao;
    @Autowired
    private DepartmentDao departmentDao;
    @Autowired
    private ConstrainsDao constrainsDao;


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
    public User getUserBySchoolId(String school_id){
        return userDao.queryUserBySchoolId(school_id);
    }

    @Override
    public boolean addUser(User userToAdd){
        //对传入的User对象空值判断
        if(userToAdd.getU_id()==null || "".equals(userToAdd.getU_id()))
            throw new RuntimeException("用户ID不能为空！");
        if(userToAdd.getSchool_id()==null || "".equals(userToAdd.getSchool_id()))
            throw new RuntimeException("用户学号不能为空！");
        if(userToAdd.getNickname()==null || "".equals(userToAdd.getNickname()))
            throw new RuntimeException("用户昵称不能为空！");
        if(userToAdd.getDept_name()==null || "".equals(userToAdd.getDept_name()))
            throw new RuntimeException("用户所属学院/部门不能为空！");
        if(userToAdd.getPhone()==null || "".equals(userToAdd.getPhone()))
            throw new RuntimeException("用户联系电话不能为空！");

        try {
            int effectedRow = userDao.insertUser(userToAdd);
            if (effectedRow > 0) {
                return true;    //插入成功
            } else {
                throw new RuntimeException("新增用户失败！");
            }
        } catch (Exception e) {
            throw new RuntimeException("新增用户失败" + e.toString());
        }
    }

    @Override
    public boolean modifyUser(User userToModify) {
        if(userToModify.getU_id() == null || "".equals(userToModify.getU_id()))
            throw new RuntimeException("用户ID不能为空！");
        if(userDao.queryUserById(userToModify.getU_id())==null)
            throw new RuntimeException("用户不存在！");

        try {
            int effectedRow = userDao.updateUser(userToModify);
            if (effectedRow > 1) {
                return true;    //修改成功
            } else {
                throw new RuntimeException("修改用户信息失败！");
            }
        } catch (Exception e) {
            throw new RuntimeException("修改用户信息失败" + e.toString());
        }

    }

    @Override
    public boolean deleteUser(String u_id) {
        //如果传入的u_id不存在对应用户
        if(userDao.queryUserById(u_id)==null)
            throw new RuntimeException("此用户不存在！");

        try {
            int effectedRow = userDao.deleteUser(u_id);
            if (effectedRow > 1) {
                return true;    //删除成功
            } else {
                throw new RuntimeException("删除用户失败！");
            }
        } catch (Exception e) {
            throw new RuntimeException("删除用户失败" + e.toString());
        }
    }

    @Override
    public User makeUser(HttpServletRequest request) {
        String u_id = request.getParameter("u_id");
        String school_id =request.getParameter("school_id");
        String username = request.getParameter("username");
        String nickname = request.getParameter("nickname");
        String gender = request.getParameter("gender");
        String grade = request.getParameter("grade");
        String major = request.getParameter("major");
        String dept_name = request.getParameter("dept_name");
        String avatar = request.getParameter("avatar");
        String address = request.getParameter("address");
        String phone = request.getParameter("phone");
        String email = request.getParameter("email");
        boolean isadmin = request.getParameter("isadmin")=="true" ? true:false;

        User user = new User(u_id,school_id,username,nickname,gender,grade,major,dept_name,avatar,address,
                phone,email,isadmin);
        return user;
    }




    //activity表操作的实现
    @Override
    public List<Activity> getActivityList() {
        return activityDao.queryActivity();
    }
    @Override
    public List<Activity> getOfficialActivity() {
        return activityDao.queryOfficialActivity();
    }
    @Override
    public Activity getActivityById(int a_id) {
        return activityDao.queryActivityById(a_id);
    }
    @Override
    public List<Activity> getActivityIdByPublisherId(String u_id) {
        return activityDao.queryActivityIdByPublisherId(u_id);
    }
    //以tag查询活动
    @Override
    public List<Activity> getActivityByTag(int tag) {
        //TODO 传入的tag需<4
        if(tag == 0){
            return activityDao.queryActivity();
        }
        String[] tags = new String[]{"全部显示","文娱活动","体育赛事","知识讲座","学科竞赛"};
        return activityDao.queryActivityByTag(tags[tag]);
    }
    @Override
    public boolean addActivity(Activity activityToAdd) {
        if(activityToAdd.getTitle()==null || "".equals(activityToAdd.getTitle()))
            throw new RuntimeException("活动标题不能为空！");
        if(activityToAdd.getTime()==null || "".equals(activityToAdd.getTime()))
            throw new RuntimeException("活动时间不能为空！");
        if(activityToAdd.getPlace()==null || "".equals(activityToAdd.getPlace()))
            throw new RuntimeException("活动地点不能为空！");
        if(activityToAdd.getTag()==null || "".equals(activityToAdd.getTag()))
            throw new RuntimeException("活动类别不能为空！");
        if(activityToAdd.getIntro()==null || "".equals(activityToAdd.getIntro()))
            throw new RuntimeException("活动简介不能为空！");
        if(activityToAdd.getPublisher()==null || "".equals(activityToAdd.getPublisher()))
            throw new RuntimeException("活动发布者不能为空！");
        if(activityToAdd.getOrganizer()==null || "".equals(activityToAdd.getOrganizer()))
            throw new RuntimeException("活动主办方不能为空！");


        try {
            System.out.println("addActivity");
            int effectedRow = activityDao.insertActivity(activityToAdd);
            System.out.println("addActivity-success");
            if (effectedRow > 0) {
                return true;
            } else {
                throw new RuntimeException("添加活动信息失败");
            }
        } catch (Exception e) {
            throw new RuntimeException("添加活动信息失败" + e.toString());
        }

    }
    @Override
    public boolean modifyActivity(Activity activityToModify) {
        if(activityToModify.getA_id() == null || "".equals(activityToModify.getA_id()))
            throw new RuntimeException("活动ID不能为空！");
        if(activityDao.queryActivityById(activityToModify.getA_id())==null)
            throw new RuntimeException("活动不存在！");

        try {
            int effectedRow = activityDao.updateActivity(activityToModify);
            if (effectedRow > 0) {
                return true;
            } else {
                throw new RuntimeException("修改活动信息失败");
            }
        } catch (Exception e) {
            throw new RuntimeException("修改活动信息失败" + e.toString());
        }

    }
    @Override
    public boolean deleteActivity(int a_id) {
        //如果传入的aid存在对应的活动
        if(activityDao.queryActivityById(a_id)==null)
            throw new RuntimeException("此活动不存在！");

        try {
            int effectedRow = activityDao.deleteActivity(a_id);
            if (effectedRow > 1) {
                return true;    //删除成功
            } else {
                throw new RuntimeException("删除活动失败！");
            }
        } catch (Exception e) {
            throw new RuntimeException("删除活动失败" + e.toString());
        }
    }
    @Override
    public List<Activity> getActivityByKeyWord(String keyWord) {
        //TODO 不知为何返回结果是null 未能实现关键词搜索
        List<Activity> activityList = activityDao.queryActivity();
        List<Activity> resultActivities = new ArrayList<Activity>();

//        //遍历时使用重载的构造函数
//        for(Iterator<Activity> it = activityList.iterator(); it.hasNext();){
//            Activity temp = new Activity(it.next());
//            String title = temp.getTitle();
//
//            System.out.println(title);
//
//            if(title.contains(keyWord))
//                resultActivities.add(temp);
//        }
        for (Iterator<Activity> it = activityList.iterator(); it.hasNext(); ) {
            Activity temp = it.next();
            String title = temp.getTitle();

            System.out.println(title);

            if (title.contains(keyWord)){
                System.out.println("here"+title);
                resultActivities.add(new Activity(temp));
            }
        }
        return resultActivities;
    }

    @Override
    public Activity makeActivity(HttpServletRequest request) {
        System.out.println("impl1");
        String title =request.getParameter("title");
        System.out.println("impl2");
        //String转为Date
        DateFormat fmt =new SimpleDateFormat("yyyy-MM-dd");
        System.out.println("impl3");
        Date time = null;
        try{
            time = fmt.parse(request.getParameter("time"));
            System.out.println("impl4");
        }catch (Exception e){
            System.out.println("String转换为Date不成功"+e.toString());
        }
        System.out.println("impl5");
        String place = request.getParameter("place");
        String tag = request.getParameter("tag");
        String intro = request.getParameter("intro");
        String poster = request.getParameter("poster");
        int quota = Integer.parseInt(request.getParameter("quota"));
        String publisher = request.getParameter("publisher");
        String organizer = request.getParameter("organizer");
        System.out.println("impl6");
        boolean official = request.getParameter("official")=="true" ? true:false;
        System.out.println("impl7");
        Activity activity = new Activity(title,time,place,tag,intro,poster,quota,publisher,organizer,official);
        return activity;
    }




    //sign表操作的实现
    @Override
    public List<Sign> getSignList() {
        return signDao.querySign();
    }

    @Override
    public List<String> getParticipantIdByAid(int a_id) {
        return signDao.queryParticipantIdByAid(a_id);
    }

    @Override
    public List<Integer> getActivityIdByUid(String u_id) {
        return signDao.queryActivityIdByUid(u_id);
    }

    @Override
    public boolean addSign(Sign signToAdd) {
        //对传入的Sign对象空值判断
        if(signToAdd.getU_id()==null || "".equals(signToAdd.getU_id())
            || signToAdd.getA_id()==null || "".equals(signToAdd.getA_id()))
            throw new RuntimeException("活动ID和用户ID不能为空！");

        try {
            int effectedRow = signDao.insertSign(signToAdd);
            if (effectedRow > 0) {
                return true;    //插入成功
            } else {
                throw new RuntimeException("新增参与关系失败！");
            }
        } catch (Exception e) {
            throw new RuntimeException("新增参与关系失败" + e.toString());
        }
    }

    @Override
    public boolean deleteSign(Sign signToDelete) {
        //如果传入的sign无对应参与关系
        if(signDao.hasSign(signToDelete)==null)
            throw new RuntimeException("此参与关系不存在！");

        try {
            int effectedRow = signDao.deleteSign(signToDelete);
            if (effectedRow > 0) {
                return true;    //删除成功
            } else {
                throw new RuntimeException("删除参与关系失败！");
            }
        } catch (Exception e) {
            throw new RuntimeException("删除参与关系失败" + e.toString());
        }
    }

    @Override
    public boolean hasSign(Sign sign){
        //如果返回结果不为空
        if(signDao.hasSign(sign)!=null)
            return true;
        else
            return false;
    }

    @Override
    public Sign makeSign(HttpServletRequest request) {
        int a_id = Integer.parseInt(request.getParameter("a_id"));
        String u_id = request.getParameter("u_id");

        Sign sign = new Sign(a_id,u_id);
        return sign;
    }

    //constrains表操作的实现
    @Override
    public Constrains getConstrainsByCid(int c_id) {
        return constrainsDao.queryConstrainsById(c_id);
    }

    @Override
    public boolean modifyConstrains(Constrains constrains) {

        try {
            int effectedRow = constrainsDao.updateConstrains(constrains);
            if (effectedRow > 1) {
                return true;    //修改成功
            } else {
                throw new RuntimeException("修改活动限制失败！");
            }
        } catch (Exception e) {
            throw new RuntimeException("修改活动限制失败" + e.toString());
        }
    }

    public boolean deleteConstrains(int c_id) {
        //如果传入的c_id不存在对应用户
        if(constrainsDao.queryConstrainsById(c_id)==null)
            throw new RuntimeException("此活动限制不存在！");

        try {
            int effectedRow = constrainsDao.deleteConstrains(c_id);
            if (effectedRow > 1) {
                return true;    //删除成功
            } else {
                throw new RuntimeException("删除活动限制失败！");
            }
        } catch (Exception e) {
            throw new RuntimeException("删除活动限制失败" + e.toString());
        }
    }

    @Override
    public Constrains makeConstrains(HttpServletRequest request) {
        int c_id = Integer.parseInt(request.getParameter("c_id"));
        String gender = request.getParameter("gender");
        String grade = request.getParameter("grade");
        String major = request.getParameter("major");
        String dept_name = request.getParameter("dept_name");
        String desc = request.getParameter("desc");

        Constrains constrains = new Constrains(c_id,gender,grade,major,dept_name,desc);
        return constrains;
    }

    //department表操作的实现
    @Override
    public List<Department> getDepartmentList() {
        return departmentDao.queryDepartment();
    }

    @Override
    public Department getDepartmentByDeptName(String dept_name) {
        return departmentDao.queryDepartmentByDeptName(dept_name);
    }

    @Override
    public boolean addDepartment(Department departmentToAdd) {
        if(departmentToAdd.getDept_name()==null || "".equals(departmentToAdd.getDept_name()))
            throw new RuntimeException("学院/部门名不能为空！");

        try {
            int effectedRow = departmentDao.insertDepartment(departmentToAdd);
            if (effectedRow > 0) {
                return true;    //插入成功
            } else {
                throw new RuntimeException("新增学院/部门失败！");
            }
        } catch (Exception e) {
            throw new RuntimeException("新增学院/部门失败" + e.toString());
        }

    }

    @Override
    public boolean modifyDepartment(Department departmentToModify) {
        if(departmentToModify.getDept_name() == null || "".equals(departmentToModify.getDept_name()))
            throw new RuntimeException("学院/部门不能为空！");
        if(departmentDao.queryDepartmentByDeptName(departmentToModify.getDept_name())==null)
            throw new RuntimeException("学院/部门不存在！");

        try {
            int effectedRow = departmentDao.updateDepartment(departmentToModify);
            if (effectedRow > 0) {
                return true;
            } else {
                throw new RuntimeException("修改学院/部门信息失败");
            }
        } catch (Exception e) {
            throw new RuntimeException("修改学院/部门信息失败" + e.toString());
        }
    }

    @Override
    public boolean deleteDepartment(String dept_name) {
        //如果传入的dept_name存在对应的学院/部门
        if(departmentDao.queryDepartmentByDeptName(dept_name)==null)
            throw new RuntimeException("此学院/部门不存在！");

        try {
            int effectedRow = departmentDao.deleteDepatment(dept_name);
            if (effectedRow > 1) {
                return true;    //删除成功
            } else {
                throw new RuntimeException("删除学院/部门失败！");
            }
        } catch (Exception e) {
            throw new RuntimeException("删除学院/部门失败" + e.toString());
        }
    }

    @Override
    public Department makeDepartment(HttpServletRequest request) {
        String dept_name = request.getParameter("dept_name");
        String location = request.getParameter("location");
        int menber_num = Integer.parseInt(request.getParameter("member_num"));
        return null;
    }
}
