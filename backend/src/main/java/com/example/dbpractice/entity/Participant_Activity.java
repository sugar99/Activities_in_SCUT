package com.example.dbpractice.entity;


public class Participant_Activity {
    //参与者id
    private String p_uid;
    //参与的活动id
    private Integer aid;

    //构造函数 用于作ut
    public Participant_Activity(String p_uid, Integer aid) {
        this.p_uid = p_uid;
        this.aid = aid;
    }

    public String getP_uid() {
        return p_uid;
    }

    public Integer getAid() {
        return aid;
    }

    public void setP_uid(String p_uid) {
        this.p_uid = p_uid;
    }

    public void setAid(Integer aid) {
        this.aid = aid;
    }
}
