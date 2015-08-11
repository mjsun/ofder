var sqlite = require("sqlite3");
var imdb = new sqlite.Database(__dirname + '/imdb.db');

function query(query, callback){
  var result = [];
  imdb.each(query, function(error, row){
  	if(!error){
  		result.push(row);
  	}
  }, function(error){
 	callback(error, result);
  });
}

module.exports = {
	query: query
};