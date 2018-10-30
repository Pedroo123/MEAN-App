// Arquivo de conexão com o mongodb
var mongoose = require('mongoose');

var meuBanco = mongoose.createConnection('mongodb://pedro:pedro123456@ds137703.mlab.com:37703/pdipedro', { useNewUrlParser: true });

mongoose.Promisse = global.Promisse;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro de conexão com o Mongo'));
