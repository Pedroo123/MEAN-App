var express = require('express');
var router = express.Router();
var tasks = require('../model/tasks');

//Rota Metodo Get
router.get('/tasks', function(req, res, next) {
  model.find({}).then(function(tasks){
    res.send(tasks);
  });
});

//Rota metodo PUT
router.put('/tasks/:id', function(req, res, next){
  module.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    modules.findOne({_id: req.params.id}).then(function(task){
      res.send(task);
    });
  });
});


//Rota metodo POST
router.post('/tasks', function(req, res){
  tasks.create(req.body).then(function(task) {
    res.send(task);
  });
});
module.exports = router;
