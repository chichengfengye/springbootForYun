package com.imooc.demo.utils.excel;

import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.validation.constraints.NotNull;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.*;

public class XSSFExcelBuilder {
    private static Logger logger = LoggerFactory.getLogger(XSSFExcelBuilder.class);

    public static void main(String[] args) {
        testAddContent();
    }

    public static void testAddContent() {
        //1. 加载（创建）文件
        XssFExcelObj xssFExcelObj = XSSFExcelBuilder.load("G:\\test.xlsx");
//        JSONObject headers = new JSONObject();
        if (xssFExcelObj != null) {
            //2.添加标题头
            xssFExcelObj.headers().addHeader("name", "名称")
                    .addHeader("age", "年龄")
                    .addHeader("height", "身高")
                    .finish(0);

            //3.追加数据
            List<Iterable> datas = new ArrayList<>();
            for (int i = 0; i < 4; i++) {
                List<String> data = new ArrayList<>();
                data.add("靳丰_" + i);
                data.add("18_" + i);
                data.add("180_" + i);
                datas.add(data);
                xssFExcelObj.addRow(data,0);
            }

//            xssFExcelObj.addRows(datas, 0);

            //4.关闭流
            xssFExcelObj.close();

        }
    }

    /**
     * 获取实例： 加载文件，如果不存在则创建
     *
     * @param url
     * @return
     */
    public static XssFExcelObj load(String url) {
        try {
            FileInputStream fileInputStream = new FileInputStream(url);
            XSSFWorkbook wb;
            if (fileInputStream.getChannel().size() > 0) {
                wb = new XSSFWorkbook(fileInputStream);
            } else {
                wb = new XSSFWorkbook();
            }
            XssFExcelObj xssFExcelObj = new XssFExcelObj(wb, url);
            return xssFExcelObj;
        } catch (FileNotFoundException e) {
            logger.error(" 文件不存在，默认创建一个！");
            return new XssFExcelObj(new XSSFWorkbook(), url);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public static class ExcelHeaders {
        private XssFExcelObj excelObj;
        private LinkedHashMap<String, String> headers;

        public ExcelHeaders(XssFExcelObj excelObj) {
            this.excelObj = excelObj;
        }

        public ExcelHeaders addHeader(@NotNull String key, String value) {
            if (headers == null) {
                headers = new LinkedHashMap<>();
            }
            if (value == null || value.trim() == "") {
                value = key;
            }
            headers.put(key.trim(), value.trim());
            return this;
        }

        public ExcelHeaders addHeaders(Map<String, String> headers) {
            for (Map.Entry<String, String> stringStringEntry : headers.entrySet()) {
                addHeader(stringStringEntry.getKey(), stringStringEntry.getValue());
            }
            return this;
        }

        public String removeHeader(String key) {
            String value = headers.remove(key);
            return value;
        }

        public String getHeaderAlias(String key) {
            return headers.get(key);
        }

        public LinkedHashMap getHeaders() {
            return headers;
        }

        public Collection<String> values() {
            return headers.values();
        }

        public void finish(int sheetIndex) {
            excelObj.finishHeader(sheetIndex);
        }
    }

    public static class XssFExcelObj {
        private String url;
        private XSSFWorkbook xSSFWorkbook;
        private FileOutputStream out;
        //        private LinkedHashMap<String, String> headers;
        private ExcelHeaders headers;

        private XssFExcelObj(XSSFWorkbook xSSFWorkbook, String url) {
            this.xSSFWorkbook = xSSFWorkbook;
            this.url = url;
        }

        /**
         * 获取header对象
         *
         * @return
         */
        public ExcelHeaders headers() {
            headers = new ExcelHeaders(this);
            return headers;
        }

        /**
         * 获取指定指针的工作簿
         *
         * @param sheetIndex
         * @return
         */
        public XSSFSheet getSheet(int sheetIndex) {
            XSSFSheet sheet;
            try {
                sheet = xSSFWorkbook.getSheetAt(sheetIndex); //获取到工作表，因为一个excel可能有多个工作表
            } catch (IllegalArgumentException e) {
                sheetIndex = 0;
                logger.error(" 当前文档没有工作簿，自动创建第" + sheetIndex + "个工作簿！");
                sheet = xSSFWorkbook.createSheet();
            }

            return sheet;
        }

        /**
         * 在sheet最后创建新的一行并返回
         *
         * @param sheet
         * @param passFirstRow true:如果文件为空,则返回第二行
         * @return
         */
        public XSSFRow getNextRow(XSSFSheet sheet, boolean passFirstRow) {
            //得到最后一行的行号
            int currentNum = sheet.getLastRowNum();
            int addedLast = 0;
            if (currentNum != 0 || passFirstRow) {
                //有两种可能,一种是真的只有一行(base=0),另一种就是真的没有数据,因为getLastRowNum函数如果没数据也返回0
                logger.debug("passFirstRow=true,跳过第一行");
                addedLast = sheet.getLastRowNum() + 1;
            }
            logger.debug("当前工作簿有{}行【最后行号：{}】，创建新的一行【行号：{}】", (sheet.getLastRowNum() + 1), currentNum, addedLast);
            XSSFRow row = sheet.createRow((short) (addedLast)); //在现有行号后追加数据
            return row;
        }

        /**
         * 在最后一行后面追加数据
         * 注意：如果文件为空，那么会加到第二行上，第一行为空
         *
         * @param iterable
         */
        public void addRow(Iterable iterable, int sheetIndex) {
            XSSFSheet sheet = getSheet(sheetIndex);
            String sheetName = sheet.getSheetName();
            logger.info(" 当前在【{}】号工作簿处理数据", sheetName);
            XSSFRow row = getNextRow(sheet, true);
            logger.debug(" 增加数据到行【行号： " + sheet.getLastRowNum() + ", 工作簿： " + sheetName + "】");
            flushRowData(row, iterable);
            logger.info(" 目前文件的工作簿【" + sheetName + "】有【 " + sheet.getPhysicalNumberOfRows() + "/ " + (sheet.getLastRowNum() + 1) + "】行， 最后一行有【" + row.getPhysicalNumberOfCells() + " / " + row.getLastCellNum() + "】列");
        }

        public void addRows(Iterable<Iterable> iterables, int sheetIndex) {
            XSSFSheet sheet = getSheet(sheetIndex);
            String sheetName = sheet.getSheetName();
            logger.info(" 当前在【{}】号工作簿处理数据", sheetName);
            for (Iterable iterable : iterables) {
                XSSFRow row = getNextRow(sheet, true);
                logger.debug(" 增加数据到行【行号： " + sheet.getLastRowNum() + ", 工作簿： " + sheetName + "】");
                setDataToRow(row, iterable);
            }
            logger.info("目前文件的工作簿【{}】有【{} / {}】行",
                    sheetName, sheet.getPhysicalNumberOfRows(), (sheet.getLastRowNum() + 1));

            closeAndFlushData();
        }

        /**
         * 将数据设置到指定行 并 输出
         *
         * @param row
         * @param iterable
         */
        private void flushRowData(XSSFRow row, Iterable iterable) {
            setDataToRow(row, iterable);
            closeAndFlushData();
        }

        /**
         * 关闭输出流 和 输入流
         */
        public void close() {
            try {
                if (out != null) {
                    out.close();
                    logger.info("已关闭输出流");
                }
                if (xSSFWorkbook != null) {
                    xSSFWorkbook.close();
                    logger.info("已关闭XSSFWorkbook");
                }
                out = null;
                xSSFWorkbook = null;
                //两个互相引用的对象相互释放对方的指针
                headers.excelObj = null;
                headers = null;
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        void finishHeader(int sheetIndex) {
            logger.info("创建标题头");
            XSSFSheet sheet = getSheet(sheetIndex);
            XSSFRow row = getNextRow(sheet, false);
            flushRowData(row, headers.values());
        }

        /**
         * 设置数据到行
         *
         * @param row
         * @param iterable
         */
        private void setDataToRow(XSSFRow row, Iterable iterable) {
            Iterator<Object> iterator = iterable.iterator();
            int index = 0;
            while (iterator.hasNext()) {//iterable目前只支持list 、array类型
                Object o = iterator.next();
                row.createCell(index).setCellValue(o.toString());
                index++;
            }
        }

        /**
         * 写出数据,自动关闭流
         */
        private void closeAndFlushData() {
            try {
                out = new FileOutputStream(this.url);
                out.flush();//这段貌似不需要
                xSSFWorkbook.write(out);
                out.close();
                logger.info("已关闭输出流");
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

    }
}



