package com.example.dbpractice.dao;

import com.example.dbpractice.entity.Department;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)    //run with
@SpringBootTest
public class DepartmentDaoTest {

    @Autowired
    private DepartmentDao departmentDao;

    @Test
    public void queryDepartment() {
    }

    @Test
    public void queryDepartmentByDeptName() {
    }

    @Test
    public void insertDepartment() {
        Department department = new Department("软件学院","B8","250");
//        int effectedNum = departmentDao.insertDepartment(department);
//        assertEquals(1,effectedNum);
        departmentDao.insertDepartment(department);
    }

    @Test
    public void updateDepartment() {
    }

    @Test
    public void deleteDepatment() {
    }
}