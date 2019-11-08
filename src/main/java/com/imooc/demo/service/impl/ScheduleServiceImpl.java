//package com.imooc.demo.service.impl;
//
//import com.imooc.demo.mySchedule.MySchedule1;
//import com.imooc.demo.mySchedule.MySchedule2;
//import com.imooc.demo.service.ScheduleService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.Timer;
//
//@Service
//public class ScheduleServiceImpl implements ScheduleService {
//    @Autowired
//    private MySchedule1 mySchedule1;
//
//    @Autowired
//    private MySchedule2 mySchedule2;
//
//    @Override
//    public void init() {
//        Timer timer = new Timer();
//        timer.schedule(mySchedule1,0,3000);
//        timer.schedule(mySchedule2,0,1000);
//    }
//}
