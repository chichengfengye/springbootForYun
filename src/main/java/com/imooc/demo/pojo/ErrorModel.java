package com.imooc.demo.pojo;

public class ErrorModel {
    private String message;

    public ErrorModel(){}

    public ErrorModel(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
