const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var db = require('./../libs/connect_db')();

//Criando um Schema e Model de "Tasks"
const TasksSchema = new Schema ({

  title: {
    type: String
  },
  description: {
    type: String
  },
  status: {
    type: Boolean
  }

});

const Tasks = mongoose.model('tasks', TasksSchema);

module.exports = Tasks;
