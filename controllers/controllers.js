const Student = require('../models/Student.model')

module.exports.studentsController = {
   
   
    postStudents: (req, res) => {
        Student.create({
            name: req.body.name,
            phone: req.body.phone,
            age: req.body.age 
          }).then((data) => {
            res.json(data)
          })
        },

        deleteStudents: (req, res) => {
            Student.findByIdAndRemove(req.params.id)
            .then(() => {
                 res.json("Студент удален")
               })
             },


        getStudents: (req, res) => {
            Student.find( { } )
            .then((data) => {
                res.json(data)
            })
        },
    
    

  
    patchStudents: (req, res) => {
        try {
            Student.findByIdAndUpdate(req.params.id, {name: req.body.name})
            res.json(' студент изменен')
        } catch (error) {
            console.log(error);
        }
            

      },
  };

