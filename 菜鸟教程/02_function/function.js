/*
 * @Author: HCQ 
 * @Date: 2017-11-21 22:33:11 
 * @Last Modified by: HCQ
 * @Last Modified time: 2017-11-21 22:42:45
 */

//  一个函数可以作为另一个函数的参数
function say(word) {
    console.log(word);
}

function execute(someFunction, value) {
    someFunction(value);
}

execute(say, "HCQ");

// 匿名函数
// 我们可以直接在另一个函数的括号中定义和传递这个函数：

function execute1(someFunction, value) {
    someFunction(value);
}

execute1(function (word) {
    console.log(word);
}, "HCQ1")