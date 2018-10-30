var express = require('express');
var router = express.Router();
var taskModel = require('../model/tasks');

//Rota Metodo Get
router.get('/tasks', function(req, res, next) {
  tasks.find({}).then(function(tasks){
    res.send(tasks);
  });
});

router.post('/tasks/add', function(req, res, next) {
  var taskModel = new taskModel(req.body);
  task.create()
  .then(task => {
    res.json("Task criada com sucesso!")
  })
  .catch(err => {
    res.status(400).send("Nao foi possivel salvar")
  })
})

module.exports = router;
