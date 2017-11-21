/*
 * @Author: HCQ 
 * @Date: 2017-11-21 22:27:17 
 * @Last Modified by: HCQ
 * @Last Modified time: 2017-11-21 22:55:38
 */
// 我们需要的所有数据都会包含在 request 对象中，该对象作为 onRequest() 回调函数的第一个参数传递。
// 但是为了解析这些数据，我们需要额外的 Node.JS 模块，它们分别是 url 和 querystring 模块。

function router(pathname) {
    console.log("About to router a request:", pathname);
}

exports.router = router;