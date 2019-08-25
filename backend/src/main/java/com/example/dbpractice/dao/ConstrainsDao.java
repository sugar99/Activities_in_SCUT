package com.example.dbpractice.dao;

import com.example.dbpractice.entity.Constrains;

public interface ConstrainsDao {

    Constrains queryConstrainsById(int c_id);

//    int insertConstrains(Constrains constrains);

    int updateConstrains(Constrains constrains);

    int deleteConstrains(int c_id);
}
