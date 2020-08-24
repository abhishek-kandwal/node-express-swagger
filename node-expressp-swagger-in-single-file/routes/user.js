const express = require('express');

const route = express.Router();

route.get('/',(req,res)=>{
    res.send("Node app is running User");
})

module.exports = route;