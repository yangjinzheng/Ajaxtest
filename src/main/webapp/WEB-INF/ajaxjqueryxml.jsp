<%--
  Created by IntelliJ IDEA.
  User: pc
  Date: 2018/1/29
  Time: 15:01
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <script type="text/javascript" src="Jslib/jquery.js"></script>
    <script type="text/javascript" src="Jslib/verifyjqueryxml.js"></script>
</head>
<body>
<input type="text" id="userName"/>
<input type="button" value="校验" onclick="verify()"/>
<!--用于存放服务器返回的信息，开始为空-->
<!--id属性是为了利用dom方式找到某一个节点，进行操作-->
<!--一个div一行-->
<div id="result">

</div>
<!--内容紧跟其后-->
<span></span>
</body>
</html>
