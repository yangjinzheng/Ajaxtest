//这个方法将使用XMLHTTPRequest对象进行ajax异步数据交互
var xmlhttp;
function verify() {
    //1.使用dom方式获取文本框中得值
    //.value获取一个元素节点的value属性值
    var userName = document.getElementById("userName").value;
    //2.创建XMlHTTPReauest对象
    //最复杂的一步
    //需要针对IE和其他类型的的浏览器建立这个对象的不同方式写不同的代码
    if(window.XMLHttpRequest){
        //针对firefox，mozillar，opera，Safari，IE7，8
        xmlhttp = new XMLHttpRequest();
        //针对某些特定版本的Mozilla浏览器的BUG进行修正
        if(xmlhttp.overrideMimeType){
            xmlhttp.overrideMimeType("text/xml");
        }
    }else if(window.ActiveXObject){
        //针对IE6,5.5,5
        //两个可以用于创建XMLHTTPRequest对象的控件名称，保存在一个js数组中
        //排在前面的版本新
        var activexNAme = ["MSXML2.XMLHTTP","Microsoft.XMLHTTP"];
        for(var i=0;i<activexNAme;i++){
            try{
                //取出一个控件名进行创建，若创建成功终止循环
                //如果创建失败，会抛出异常，然后可以继续循环，继续尝试创建
                xmlhttp = new ActiveXObject(activexNAme[i]);
                break;
            }catch (e){

            }
        }
       xmlhttp = new ActiveXObject("");

    }
    if(!xmlhttp){
        alert("XMLHttpRequest对象创建失败");
        return;
    }else{
        alert(xmlhttp);
    }
    //2.注册回调函数
    //注册回调函数时，只需要函数名，不要加括号
    //我们需要将函数名注册，结果加上括号，就会把函数的返回值注册上，所以错误
    xmlhttp.onreadystatechange = callback;
    //3.设置连接信息
    //第一个代表http请求方式，支持所有http请求方式
    //第二个参数表示请求的url地址
    //第三个表示采用异步还是同步，true是异步
    //xmlhttp.open("GET","ajaxtest?name="+userName,true);
    //Post方式请求的代码
    xmlhttp.open("POST","ajaxtest",true);
    //POST方式需要自己设置http的请求头
    xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    //POST方式发送数据
    xmlhttp.send("name="+userName);
    //4.发送数据开始和服务器端进行交互
    //同步方式下，send这句话会在服务器数据回来后才执行完
    //异步方式下，send立即完成执行
    xmlhttp.send(null);
}
//回调函数
function callback() {
    alert(xmlhttp.readyState);
    //5.接受响应数据
//判断对象的状态是交互完成
    if(xmlhttp.readyState==4){
        if(xmlhttp.status == 200){
            //获取服务器端返回的数据
            //获取服务器端输出的纯文本的数据
            var responseText = xmlhttp.responseText;
            //将数据显示在页面上
            var divNode = document.getElementById("result");
            divNode.innerHTML = responseText;
        }
    }
}