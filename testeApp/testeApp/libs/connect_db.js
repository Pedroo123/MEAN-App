// Arquivo de conexão com o mongodb
var mongoose = require('mongoose');
var db;

module.exports = function(){
  if(!db) {
      db = mongoose.createConnection('mongodb://pedro:pedro123456@ds137703.mlab.com:37703/pdipedro', { useNewUrlParser: true });
  }
  return db;
}
