module.exports = function (app, db) {
    let student_details = db.model('student');
    console.log('...........StudentDetails..............')
    app.get('/student/search',(req,res)=>{
        let search_text = req.query.major;
        console.log(search_text);
        student_details.find({major:{ $regex: search_text, $options: 'i' }}).exec((err, students) => {
            if (!err) {
                res.send({
                    result: "Success",
                    data: students
                });
                console.log(students);
            } else {
                res.send({
                    result: "Failure",
                    message: "Error in fetching students list",
                    error: err
                });
            }
        });
    });

    console.log('...22....')
    app.post('/student/create',(req,res) => {
        let student = req.body;
        console.log('-----check-----');
        let stud_details = new student_details({
            class_id: student.classId ,
            Student_first_name: student.firstName,
            student_last_name: student.lastName,
            branch_name: student.branchName,
            contact: student.contact,
            major : student.major,
            minor : student.minor
        });
        stud_details.save((err, student) => {
            if (!err) {
                res.send({
                    result: "Success",
                    data: student
                });
            } else {
                res.send({
                    result: "Failure",
                    message: "Error in creating student",
                    error: err
                });
            }
        })
    });
};