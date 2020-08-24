const swaggerHead = require('./swagger.json'),
      User = require('./user.json'),
      movies = require('./movies.json'),
      definitions = require('./definitions.json');

var apis = Object.assign( User, movies );

var paths = JSON.parse ('{ "paths" : ' + JSON.stringify(apis) + '}');
var swaggerheader = Object.assign( swaggerHead, paths, definitions);

module.exports = swaggerheader;
