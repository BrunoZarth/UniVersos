const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        title: "UniVersos",
        description: "UniVersos Employee API"
    },
    host: "localhost:8080",  
    basePath: "/", 
};

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/*.js']

swaggerAutogen(outputFile, endpointsFiles, doc)
