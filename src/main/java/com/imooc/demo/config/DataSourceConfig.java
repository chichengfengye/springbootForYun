package com.imooc.demo.config;

import com.imooc.demo.properties.*;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableConfigurationProperties(DataSourceProps.class)
public class DataSourceConfig {

}
