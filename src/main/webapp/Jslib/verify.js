function verify() {
    //解决中文乱码问题页面段发出的数据做一次encodeURI，服务器端new String（old.getBytes("iso8859-1","UTF-8")）
    var url = "ajaxtest?name="+$("#userName").val();
    $.get(url,null,function (data) {
        $("#result").html(data);
    });


}
//给url地址增加时间戳，骗过浏览器不读取缓存
function convertURL(url) {
    //获取时间戳
    var timstamp = (new Date()).valueOf();
    //将时间戳拼接到url上
    if(url.indexOf("?")>0){
        url = url+"&t="+timstamp;
    }else
    {
       url = url+"?t="+timstamp;
    }
    return url;
    //url="ajaxtest&=t=1111"
}