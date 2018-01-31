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
    //javascript中一个简单的对象定义方法
    //var obj = {name:"123",age:12};
    //使用jQuery的XMLHTTPPrequest对象get请求的封装
    $.ajax({
        type:"POST",//http请求方式
        url:"ajaxxml", //服务器url地址
        data:"name="+userName,//发送给服务器的数据
        dataType:"xml",
        success:callback//定义callback
        });

}
//回调函数
function callback(data) {
    //3.接受服务器端返回的数据
    //需要将data这个dom对象中的数据解析出来
    //首先需要将dom的对象传换成JQUERY的对象
    var jqueryobj = $(data);
    //获取message节点
    var message = jqueryobj.children();
    //获取文本中的内容
    var text = message.text();
    //4.将服务器端返回的数据动态显示在页面上
    //找到保存结果信息的节点
    var resultobj = $("#result");
    resultobj.html(text);
    alert("");
}