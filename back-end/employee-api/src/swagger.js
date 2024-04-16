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
const endpointsFiles = ['./routes/employee.js', './routes/login.js']

swaggerAutogen(outputFile, endpointsFiles, doc)
