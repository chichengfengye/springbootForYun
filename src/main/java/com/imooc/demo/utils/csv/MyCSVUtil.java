package com.imooc.demo.utils.csv;

import cn.hutool.core.io.FileUtil;
import cn.hutool.core.text.csv.*;
import cn.hutool.core.util.CharsetUtil;

import java.util.ArrayList;
import java.util.List;

public class MyCSVUtil {
    private static int index = 0;
    private static List<String> tks = new ArrayList<String>() {{
        add("4a4ba906d08aaf769f783071fa312232");
        add("121a644243a88d18b6ebd99fc1ccbd0b");
        add("10e2d126fd1fd529a114b85c591c987f");
        add("466f375fbc9bfd0d225b4d4cdc69073a");
        add("fad66428769543de338de6fa04b7c217");
        add("e611372c3a0abbcd038d4d1edb1c2320");
        add("70959b120f85272d00a4a14594c0b4d4");
        add("15207152e6727b5c481246e3e35231b0");
        add("f571e01090acf13b4f430abe9eddcdf9");
        add("df4292ca56bdb3992cad3613c52aafa1");
    }};

    public static void main(String[] args) {
        //指定路径和编码
        CsvWriter writer = CsvUtil.getWriter("G:\\data.csv", CharsetUtil.CHARSET_UTF_8);
        CsvReader reader = CsvUtil.getReader();
        //从文件中读取CSV数据
        CsvData data = reader.read(FileUtil.file("G:\\data-3000000-2.csv"));
        List<CsvRow> rows = data.getRows();
        //遍历行
        boolean init = true;
        int total = rows.size();
        int flag = 0;
        int halfTotal = total / 2;
        for (CsvRow csvRow : rows) {
            flag++;

            if (init) {
                init = false;
                System.out.println("**********pass标题行");
            } else {
                csvRow.add(getTk());
                String[] arr = csvRow.toArray(new String[4]);
                writer.write(arr);
            }

            if (flag >= halfTotal) {
                return;
            }
        }


    }

    public static String getTk() {
        if (index == tks.size()) {
            index = 0;
//            System.out.println(index);
        }
        String tk = tks.get(index);
        index++;
        return tk;
    }


}
