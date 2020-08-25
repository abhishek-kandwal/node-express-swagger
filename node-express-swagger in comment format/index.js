const express = require('express'),
      swaggerJSDoc = require('swagger-jsdoc'),
      swaggerUi = require('swagger-ui-express');

const user = require('./routes/user'),
      movies = require('./routes/movies');

const options = {
    swaggerDefinition: {
        info: {
            title: "API's",
            description : "API Description",
            contact: {
                name: "Amazing Developer"
            },
            servers: ["http://localhost:3000"]
        }
    },
    apis:['./routes/*.js']
};

const swaggerDocs = swaggerJSDoc(options);

const app = express();

// middlewares
app.use('/api/v1/user',user);
app.use('/api/v1/movies',movies);

// swagger documentation middleware
app.use('/api-documentation', swaggerUi.serve,swaggerUi.setup(swaggerDocs));

// error middleware 
app.use((req,res)=>{ res.send("path not specified")});

app.listen(3000,() => console.log("running"));