package com.example.dbpractice.entity;

//参与关系
public class Sign {

    private Integer a_id;
    private String u_id;

    //Construtor
    public Sign(Integer a_id, String u_id) {
        this.a_id = a_id;
        this.u_id = u_id;
    }

    //Getter
    public Integer getA_id() {
        return a_id;
    }

    public String getU_id() {
        return u_id;
    }

    //Setter
    public void setA_id(Integer a_id) {
        this.a_id = a_id;
    }

    public void setU_id(String u_id) {
        this.u_id = u_id;
    }
}
