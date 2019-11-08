package com.imooc.demo.pojo;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class User implements Serializable{
    private static final long serialVersionUID = 1901834775748891998L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false,unique = true)
    private String name;
    @Column(nullable = false,unique = false)
    private Integer height;
    @Transient
    private String record;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public String getRecord() {
        return record;
    }

    public void setRecord(String record) {
        this.record = record;
    }
}
