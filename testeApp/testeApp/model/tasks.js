var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var tasks = new Schema({
  title: String,
  description: String,
  status: Boolean
})

var taskModel = mongoose.model('taskModel', tasks);
