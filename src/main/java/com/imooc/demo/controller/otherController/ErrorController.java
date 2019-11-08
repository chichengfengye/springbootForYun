package com.imooc.demo.controller.otherController;

import com.imooc.demo.exception.ErrorException;
import com.imooc.demo.pojo.ErrorModel;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class ErrorController {
    @ExceptionHandler(ErrorException.class)
    @ResponseBody
    public ErrorModel ErrorExceptionHandler(ErrorException e){
        e.printStackTrace();
        return new ErrorModel(e.getMessage());
    }
}
