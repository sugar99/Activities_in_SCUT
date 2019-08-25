package com.example.dbpractice.entity;



//实体类
public class User {
    //id
    private String u_id;
    //学号
    private String school_id;
    //真实名字
    private String username;
    //微信昵称
    private String nickname;
    //性别
    private String gender;
    //年级
    private String grade;
    //专业
    private String major;
    //学院
    private String dept_name;
    //用户头像图片url
    private String avatar;
    //(宿舍)住址
    private String address;
    //联系方式 一般为电话号码
    private String phone;
    //邮箱
    private String email;
    //是否管理员
    private boolean isadmin;

    //构造函数 用于作ut

    public User(String u_id, String school_id, String username, String nickname, String gender, String grade,
                String major, String dept_name, String avatar, String address, String phone, String email,
                boolean isadmin) {
        this.u_id = u_id;
        this.school_id = school_id;
        this.username = username;
        this.nickname = nickname;
        this.gender = gender;
        this.grade = grade;
        this.major = major;
        this.dept_name = dept_name;
        this.avatar = avatar;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.isadmin = isadmin;
    }


    //getter
    public String getU_id() {
        return u_id;
    }

    public String getSchool_id() {
        return school_id;
    }

    public String getUsername() {
        return username;
    }

    public String getNickname() {
        return nickname;
    }

    public String getGender() {
        return gender;
    }

    public String getGrade() {
        return grade;
    }

    public String getMajor() {
        return major;
    }

    public String getDept_name() {
        return dept_name;
    }

    public String getAvatar() {
        return avatar;
    }

    public String getAddress() {
        return address;
    }

    public String getPhone() {
        return phone;
    }

    public String getEmail() {
        return email;
    }

    public boolean isIsadmin() {
        return isadmin;
    }


    //setter

    public void setU_id(String u_id) {
        this.u_id = u_id;
    }

    public void setSchool_id(String school_id) {
        this.school_id = school_id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public void setDept_name(String dept_name) {
        this.dept_name = dept_name;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setIsadmin(boolean isadmin) {
        this.isadmin = isadmin;
    }
}
