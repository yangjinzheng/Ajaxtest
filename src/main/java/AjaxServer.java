/**
 * Created by pc on 2018/1/29.
 */

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLDecoder;

/**
 * describe:
 *
 * @author xxx
 * @date4 {YEAR}/01/29
 */
public class AjaxServer extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //1.取参数
        //2.检查参数是否有问题
        //3.校验操作
        //4.和传统应用不同之处，这一步需要将用户感兴趣的数据返回给页面段，而不是将一个新页面发给用户
        try{
            resp.setContentType("text/html;charset=GB2312");
            PrintWriter out = resp.getWriter();
            Integer inte = (Integer)req.getSession().getAttribute("total");
            int temp = 0;
            if(inte==null){
               temp = 1;
            }else{
                temp = inte.intValue()+1;

            }
            req.getSession().setAttribute("total",temp);
            String old = req.getParameter("name");
            //解决中文乱码问题
            String name = URLDecoder.decode(old,"UTF-8");
            if(old==null||old.length()==0){
                out.println("用户名不能为空");
            }else{
                    //String name = new String(old.getBytes("ISO8859-1"),"UTF-8");
                    if(name.equals("wangxingkui")){
                        out.println("用户名["+name+"]已经存在，可以使用其他该用户"+temp);
                    }
                    else{
                        out.println("用户名["+name+"]尚未存在，可以使用该用户"+temp);
                    }
            }
        }catch (Exception e){

        }

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req,resp);
    }
}
