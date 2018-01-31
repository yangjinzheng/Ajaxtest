//定义用户名校验的方法
function verify() {
   //1.获取文本框中的内容
    //document.getElementById("");Dom的方式
    //jquery查找结点的方式，参数#加上id属性值可以找到一个节点
    //jquery的方法返回的都是jquery的对象，可以继续在上面执行其他的jQuery方法
    var jquerybj = $("#userName");
    //获取节点的值
    var userName = jquerybj.val();
    //2.将文本框中的数据发送给服务器端的servlet
    //使用jQuery的XMLHTTPPrequest对象get请求的封装
    $.get("ajaxtest?name="+userName,null,callback);

}
//回调函数
function callback(data) {
    //3.接受服务器端返回的数据
    //4.将服务器端返回的数据动态显示在页面上
    //找到保存结果信息的节点
    var resultobj = $("#result");
    resultobj.html(data);
    alert("");
}