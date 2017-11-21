/*
 * @Author: HCQ 
 * @Date: 2017-11-21 22:05:58 
 * @Last Modified by: HCQ
 * @Last Modified time: 2017-11-21 22:21:23
 */
const http = require('http')


const homePage = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
    <title>部署上线代码（随时失效）</title>
    
</head>
<body>
            <h1>Nodejs advinced</h1>
            <nav>
                <ul>
                    <li>
                        <a target = "_blank" href="/a">Node JS 电影网站</a>
                    </li>
                    <li>
                        <a target = "_blank" href="/a">Node JS APP 后台</a>
                    </li>
                    <li>
                        <a target = "_blank" href="/a">Node JS 微信小程序后台</a>
                    </li>
                </ul>
            </nav>   
</body>
</html>
`

http.createServer((request, response) => {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 homePage 
    response.end(homePage);
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');