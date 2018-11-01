var express = require('express');
var router = express.Router();
const Task = require('../model/tasks');
const db = require('../libs/connect_db');

//Rota Metodo Get
router.get('/tasks', function(req, res) {
  Task.find(function(err, tasks) {
    if(err) {
      res.send(err)
    }
    res.json(tasks);
  })
});

//Rota POST
router.post('/tasks/add', function(req, res, next) {
  var task = new Task(req.body);
  task.save()
  .then(task => {
    res.status(201).json(task)
  })
  .catch(err => {
    res.status(400).send("Nao foi possivel salvar")
  })
})

//Rota metodo PUT
router.put('/tasks/:id', function(req, res, next){
  Task.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    Task.findOne({_id: req.params.id}).then(function(task){
      res.send(task);
    });
  });
});

module.exports = router;
