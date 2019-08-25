package com.example.dbpractice.dao;

import com.example.dbpractice.entity.Department;

import java.util.List;

public interface DepartmentDao {

    List<Department> queryDepartment();

    //以dept_name查询department
    Department queryDepartmentByDeptName(String dept_name);

    int insertDepartment(Department department);

    int updateDepartment(Department department);

    int deleteDepatment(String dept_name);

}
