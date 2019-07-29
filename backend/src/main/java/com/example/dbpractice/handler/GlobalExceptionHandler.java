package com.example.dbpractice.handler;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {
    //编写多个异常处理方法 //应该针对每个业务异常编写自定义异常 然后catch自定义异常 明确异常种类
    @ExceptionHandler(value = Exception.class)  //包括Runtime Exception   //应该写自定义业务异常
    @ResponseBody    //不是返回html 而是返回错误信息
    private Map<String,Object> exceptionHandler (HttpServletRequest req, Exception e){
        Map<String,Object> modelMap = new HashMap<>();
        modelMap.put("success", false);
        modelMap.put("errMsg", e.getMessage());
        return modelMap;
    }
}
