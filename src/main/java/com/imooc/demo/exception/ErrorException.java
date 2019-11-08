package com.imooc.demo.exception;

public class ErrorException extends RuntimeException{

    private static final long serialVersionUID = -5996380884366553101L;

    public ErrorException(){
        super();
    }

    public ErrorException(String message) {
        super(message);
    }

    public ErrorException(String message, Throwable cause) {
        super(message, cause);
    }

    public ErrorException(Throwable cause) {
        super(cause);
    }

    protected ErrorException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
