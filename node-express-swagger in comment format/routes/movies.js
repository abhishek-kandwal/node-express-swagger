const route = require('./user');

const express = require('express'),
      routes  = express.Router();

/**
 * @swagger
 * /api/v1/movies:
 *   get:
 *      description: fetch all the movies
 *      responses:
 *          '200':
 *              description: A Successful response
 */

routes.get('/',(req,res)=>{
    res.send("movies");
})

module.exports = routes;