const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title: type: String,
    description: String,
    status: Boolean
})

module.exports = mongoose.model('tasks', schema)
