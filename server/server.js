

var Hapi = require('hapi');
var requestPromise = require('minimal-request-promise');
var Joi = require('joi');
var server = new Hapi.Server({
    app: {
        name: 'Chat_App'
    }
});
server.connection({
    port: 3000,
    routes: {
        cors: true
    }
});
server.route({
    method: 'GET',
    path: '/',
    handler: function (req, reply) {
        //TODO Change for production server
        reply('<h1>hello</h1>')
    }
});
server.route({
    method: 'POST',
    path: '/api/createUser',
    handler: function (req, reply) {
        console.log(req.payload);
        objToSave = {
            username: req.payload.username,
            password: req.payload.password
        }
        options = {
            headers: {
                'Authorization': 'Oj8svm7aVnfz5wng',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objToSave)
        };
        requestPromise.post('http://localhost:9090/plugins/restapi/v1/users', options)
            .then(function (response) {
                reply(response);
            })
            .catch(function (error) {
                // Deal with the error
                console.log(options);
                console.log(error);
                reply(error);
            })
    }
});

server.start((err) => {
    if (err) {
        console.log("error server connect", err)
        //  throw err;
    } else {
        console.log("Server listening at port:3000")
    }
})

