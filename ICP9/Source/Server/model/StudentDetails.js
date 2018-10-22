const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const student = new Schema({
    class_id: String,
    Student_first_name: String,
    student_last_name: String,
    branch_name: String,
    contact: String,
    major : String,
    minor : String
});

exports.module = mongoose.model('student', student);

//case sensitive