const express = require('express'),
      swaggerUi = require('swagger-ui-express');// to bind swaggger with express and show the ui provided by swagger js-doc

const user = require('./routes/user'),
      swaggerDocument = require('./swagger/swagger.json');

const app = express();

// middlewares
app.use('/api/v1/user',user);
// swagger documentation middleware
app.use('/api-documentation', swaggerUi.serve,swaggerUi.setup(swaggerDocument));
// error middleware 
app.use((req,res)=>{ res.send("path not specified")});

app.listen(3000,() => console.log("running"));