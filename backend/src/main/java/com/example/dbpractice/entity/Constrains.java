package com.example.dbpractice.entity;


//活动的限制
public class Constrains {

    private Integer c_id;
    private String gender;
    private String grade;
    private String major;
    private String dept_name;
    private String desc;

    //Construtor
    public Constrains(int c_id, String gender, String grade, String major, String dept_name, String desc) {
        this.c_id = c_id;
        this.gender = gender;
        this.grade = grade;
        this.major = major;
        this.dept_name = dept_name;
        this.desc = desc;
    }


    //Getter
    public int getC_id() {
        return c_id;
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

    public String getDesc() {
        return desc;
    }


    //Setter


    public void setC_id(int c_id) {
        this.c_id = c_id;
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

    public void setDesc(String desc) {
        this.desc = desc;
    }
}
