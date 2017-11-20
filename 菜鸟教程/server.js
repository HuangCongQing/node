/*
* @Author: hasee
* @Date:   2017-10-27 12:03:37
* @Last Modified by:   hasee
* @Last Modified time: 2017-10-27 12:04:12
*/
var http = require('http');// 引入required模块

//  创建服务器 http.createServer()
http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');