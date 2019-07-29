package com.example.dbpractice.entity;

import java.util.Date;

//活动 实体类
public class Activity {
    //活动id 自增
    private Integer id;
    //活动标题
    private String title;
    //活动时间
    private Date date;
    //活动地点
    private String place;
    //活动类别
    private String tag;
    //活动描述 500以内
    private String desc;
    //活动发起人 uid
    private String sponsor;
    //活动是否官方认证
    private Boolean certified;

    //构造函数 用于作ut


    public Activity(Integer id, String title, Date date, String place,
                    String tag, String desc, String sponsor, Boolean certified) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.place = place;
        this.tag = tag;
        this.desc = desc;
        this.sponsor = sponsor;
        this.certified = certified;
    }

    //getter&setter
    public Integer getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public Date getDate() {
        return date;
    }

    public String getPlace() {
        return place;
    }

    public String getTag() {
        return tag;
    }

    public String getDesc() {
        return desc;
    }

    public String getSponsor() {
        return sponsor;
    }

    public Boolean getCertified() {
        return certified;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public void setSponsor(String sponsor) {
        this.sponsor = sponsor;
    }

    public void setCertified(Boolean certified) {
        this.certified = certified;
    }
}


