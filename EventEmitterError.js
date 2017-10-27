/*
* @Author: hasee
* @Date:   2017-10-27 16:06:50
* @Last Modified by:   hasee
* @Last Modified time: 2017-10-27 16:08:44
*/

// error 被触发时，EventEmitter 规定如果没有响 应的监听器，Node.js 会把它当作异常，退出程序并输出错误信息。
// 我们一般要为会触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃。例如：

var events = require('events'); 
var emitter = new events.EventEmitter(); 
emitter.emit('error');  // 报错，找不到error事件