package com.example.dbpractice.dao;

import com.example.dbpractice.entity.Sign;


import java.util.List;

public interface SignDao {

    List<Sign> querySign();

    List<String> queryParticipantIdByAid(int a_id);

    List<Integer> queryActivityIdByUid(String u_id);

    int insertSign(Sign sign);

    int deleteSignByAid(int a_id);

    int deleteSign(Sign sign);

    Sign hasSign(Sign sign);
}
