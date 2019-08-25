package com.example.dbpractice.entity;

public class Belongs {
    String u_id;
    String dept_name;

    public Belongs(String u_id, String dept_name) {
        this.u_id = u_id;
        this.dept_name = dept_name;
    }

    public String getU_id() {
        return u_id;
    }

    public String getDept_name() {
        return dept_name;
    }

    public void setU_id(String u_id) {
        this.u_id = u_id;
    }

    public void setDept_name(String dept_name) {
        this.dept_name = dept_name;
    }
}
