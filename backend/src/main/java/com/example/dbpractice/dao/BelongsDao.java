package com.example.dbpractice.dao;

import com.example.dbpractice.entity.Belongs;
import com.example.dbpractice.entity.Department;
import com.example.dbpractice.entity.User;

import java.util.List;

public interface BelongsDao {

    List<Belongs> queryBelongs();
//
//    List<String> departmentsContains(String u_id);
//
//    List<String> usersBelongsTo(String dept_name);

}
