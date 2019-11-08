//package com.imooc.demo.properties;
//
//import io.lettuce.core.internal.HostAndPort;
//import org.springframework.boot.context.properties.ConfigurationProperties;
//import org.springframework.context.annotation.PropertySource;
//
//import java.util.List;
//
//@ConfigurationProperties(prefix = "redis")
//public class RedisProperties {
//    public List<HostAndPort> nodes;
//
//    public Integer timeout;
//
//    public PoolProperties pool;
//
//    public List<HostAndPort> getNodes() {
//        return nodes;
//    }
//
//    public void setNodes(List<HostAndPort> nodes) {
//        this.nodes = nodes;
//    }
//
//    public Integer getTimeout() {
//        return timeout;
//    }
//
//    public void setTimeout(Integer timeout) {
//        this.timeout = timeout;
//    }
//
//    public PoolProperties getPool() {
//        return pool;
//    }
//
//    public void setPool(PoolProperties pool) {
//        this.pool = pool;
//    }
//
//    class PoolProperties {
//        private Integer maxTotal;
//        private Integer maxIdle;
//        private Integer minIdle;
//        private Integer maxWaitMillis;
//        private boolean testWhileIdle;
//        private boolean testOnBorrow;
//        private boolean testOnReturn;
//
//        public Integer getMaxTotal() {
//            return maxTotal;
//        }
//
//        public void setMaxTotal(Integer maxTotal) {
//            this.maxTotal = maxTotal;
//        }
//
//        public Integer getMaxIdle() {
//            return maxIdle;
//        }
//
//        public void setMaxIdle(Integer maxIdle) {
//            this.maxIdle = maxIdle;
//        }
//
//        public Integer getMinIdle() {
//            return minIdle;
//        }
//
//        public void setMinIdle(Integer minIdle) {
//            this.minIdle = minIdle;
//        }
//
//        public Integer getMaxWaitMillis() {
//            return maxWaitMillis;
//        }
//
//        public void setMaxWaitMillis(Integer maxWaitMillis) {
//            this.maxWaitMillis = maxWaitMillis;
//        }
//
//        public boolean isTestWhileIdle() {
//            return testWhileIdle;
//        }
//
//        public void setTestWhileIdle(boolean testWhileIdle) {
//            this.testWhileIdle = testWhileIdle;
//        }
//
//        public boolean isTestOnBorrow() {
//            return testOnBorrow;
//        }
//
//        public void setTestOnBorrow(boolean testOnBorrow) {
//            this.testOnBorrow = testOnBorrow;
//        }
//
//        public boolean isTestOnReturn() {
//            return testOnReturn;
//        }
//
//        public void setTestOnReturn(boolean testOnReturn) {
//            this.testOnReturn = testOnReturn;
//        }
//    }
//}
