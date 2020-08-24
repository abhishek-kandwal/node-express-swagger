const route = require('./user');

const express = require('express'),
      routes  = express.Router();

routes.get('/',(req,res)=>{
    res.send("movies");
})

module.exports = routes;