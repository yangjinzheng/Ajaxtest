/**
 * Created by pc on 2018/1/30.
 */

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * describe:XML数据返回
 *
 * @author xxx
 * @date4 {YEAR}/01/30
 */
public class AjaxXml extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //1.取参数
        //2.检查参数是否有问题
        //3.校验操作
        //4.和传统应用不同之处，这一步需要将用户感兴趣的数据返回给页面段，而不是将一个新页面发给用户
        try{
            //修改点1----响应的Content-Type必须是Text-XML
            resp.setContentType("text/xml;charset=GB2312");
            PrintWriter out = resp.getWriter();
            String old = req.getParameter("name");
            //修改点2-----反乎的数据需要拼成xml格式
            StringBuilder builder = new StringBuilder();
            builder.append("<message>");
            if(old==null||old.length()==0){
                out.println("用户名不能为空");
            }else{
                String name = old;
                if(name.equals("wangxingkui")){
                    builder.append("用户名["+name+"]已经存在，可以使用其他该用户").append("</message>");
                }
                else{
                    builder.append("用户名["+name+"]尚未存在，可以使用该用户").append("</message>");
                }
                out.println(builder.toString());
            }
        }catch (Exception e){

        }

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req,resp);
    }
}
