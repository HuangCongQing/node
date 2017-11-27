/*
* @Author: 黄重庆
* @Date:   2017-10-27 14:57:52
* @Last Modified by:   hasee
* @Last Modified time: 2017-10-27 14:59:10
*/
var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束!");
