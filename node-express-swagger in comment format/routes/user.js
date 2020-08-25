const express = require('express');

const route = express.Router();

/**
 * @swagger
 * /api/v1/user:
 *   get:
 *      description: Use to get user data
 *      responses:
 *          '200':
 *              description: A Successful response
 */

route.get('/',(req,res)=>{
    res.send("Node app is running User");
})

module.exports = route;