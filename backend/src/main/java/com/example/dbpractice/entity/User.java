package com.example.dbpractice.entity;



//实体类
public class User {
    //id
    private String uid;
    //姓名
    private String name;
    //宿舍地址 eg:c10-518
    private String address;
    //联系方式 一般为电话号码
    private String contact;

    //构造函数 用于作ut
    public User(String uid, String name, String address, String contact) {
        this.uid=uid;
        this.name=name;
        this.address=address;
        this.contact=contact;
    }

    //getter&setter
    public String getUid() {
        return uid;
    }

    public String getName() {
        return name;
    }

    public String getAddress() {
        return address;
    }

    public String getContact() {
        return contact;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }
}
