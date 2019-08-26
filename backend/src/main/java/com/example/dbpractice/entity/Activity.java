package com.example.dbpractice.entity;

import java.util.Date;

//活动 实体类
public class Activity {
    //活动id 自增
    private Integer a_id = null;
    //活动标题
    private String title;
    //活动时间
    private Date time;
    //活动地点
    private String place;
    //活动类别                  //文娱活动 体育赛事 知识讲座 学科竞赛
    private String tag;
    //活动描述 150字以内
    private String intro;
    //活动海报图片的url
    private String poster;
    //活动配额
    private int quota;
    //活动发起人 uid
    private String publisher;
    //活动主办方
    private String organizer;
    //活动是否官方认证
    private Boolean official;
    //活动限制
    private int constrain_id;

    //构造函数 用于作ut

    public Activity(Integer a_id, String title, Date time, String place, String tag, String intro, String poster,
                    int quota, String publisher, String organizer, Boolean official, int constrain_id) {
        this.a_id = a_id;
        this.title = title;
        this.time = time;
        this.place = place;
        this.tag = tag;
        this.intro = intro;
        this.poster = poster;
        this.quota = quota;
        this.publisher = publisher;
        this.organizer = organizer;
        this.official = official;
        this.constrain_id = constrain_id;
    }
    //重载的构造函数
    public Activity(String title, Date time, String place, String tag, String intro, String poster,
                    int quota, String publisher, String organizer, Boolean official) {
        this.title = title;
        this.time = time;
        this.place = place;
        this.tag = tag;
        this.intro = intro;
        this.poster = poster;
        this.quota = quota;
        this.publisher = publisher;
        this.organizer = organizer;
        this.official = official;

    }
    //重载构造函数
    public Activity(Activity activity){
        this.a_id = activity.a_id;
        this.title = activity.title;
        this.time = activity.time;
        this.place = activity.place;
        this.tag = activity.tag;
        this.intro = activity.intro;
        this.poster = activity.poster;
        this.quota = activity.quota;
        this.publisher = activity.publisher;
        this.organizer = activity.organizer;
        this.official = activity.official;
        this.constrain_id = activity.constrain_id;

    }



    //getter
    public Integer getA_id() {
        return a_id;
    }

    public String getTitle() {
        return title;
    }

    public Date getTime() {
        return time;
    }

    public String getPlace() {
        return place;
    }

    public String getTag() {
        return tag;
    }

    public String getIntro() {
        return intro;
    }

    public String getPoster() {
        return poster;
    }

    public int getQuota() {
        return quota;
    }

    public String getPublisher() {
        return publisher;
    }

    public String getOrganizer() {
        return organizer;
    }

    public Boolean getOfficial() {
        return official;
    }

    public int getConstrain_id() {
        return constrain_id;
    }


    // setter
    public void setA_id(Integer a_id) {
        this.a_id = a_id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public void setIntro(String intro) {
        this.intro = intro;
    }

    public void setPoster(String poster) {
        this.poster = poster;
    }

    public void setQuota(int quota) {
        this.quota = quota;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public void setOrganizer(String organizer) {
        this.organizer = organizer;
    }

    public void setOfficial(Boolean official) {
        this.official = official;
    }

    public void setConstrain_id(int constrain_id) {
        this.constrain_id = constrain_id;
    }
}


