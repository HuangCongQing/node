var student = require('./student');
var teacher = require('./teacher');

function add(teacherName, students) {
    teacher.add(teacherName);
    students.forEach(function(item, index) {
        student.add(item);
        student.add1(item);
    });
}
exports.add = add;
