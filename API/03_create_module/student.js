function add(student) {
    console.log('Add Student:' + student);
}

exports.add = add;
// exports.add中的add并不是一个方法，而是要暴露的方法名，

// 另一种书写方法

exports.add1 = function () {
    console.log("这是直接add1")
}
