const { Router } = require('express');
const { studentsController } = require('../controllers/controllers.js');

const router = Router();

router.post('/students', studentsController.postStudents);
router.get('/students', studentsController.getStudents);
router.delete('/students/:id', studentsController.deleteStudents);
router.patch('/students/:id', studentsController.patchStudents);


module.exports = router;