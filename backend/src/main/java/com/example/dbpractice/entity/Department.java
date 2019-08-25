package com.example.dbpractice.entity;


//活动所属部门
public class Department {

    private String dept_name;
    private String location;
    private String member_num;

    //Construtor
    public Department(String dept_name, String location, String menber_num) {
        this.dept_name = dept_name;
        this.location = location;
        this.member_num = menber_num;
    }

    //Getter
    public String getDept_name() {
        return dept_name;
    }

    public String getLocation() {
        return location;
    }

    public String getMenber_num() {
        return member_num;
    }

    //Setter
    public void setDept_name(String dept_name) {
        this.dept_name = dept_name;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setMenber_num(String menber_num) {
        this.member_num = menber_num;
    }
}
