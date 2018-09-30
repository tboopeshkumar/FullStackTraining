
const express = require('express');
const service = express();
const ServiceRegistry = require('./serviceRegistry');
const serviceRegistry = new ServiceRegistry();
const http = require('http');
const port = 4000;

service.put('/service/:name/:port',(req,res,next)=>{
 
    console.log('register caled' );
    const serviceName = req.params.name;
    const servicePort = req.params.port;
    const serviceIp = req.connection.remoteAddress.includes('::')
    ? `[${req.connection.remoteAddress}]` : req.connection.remoteAddress;
    serviceRegistry.add(serviceName,serviceIp,servicePort);
    res.json({result :`${serviceName} at ${serviceIp}:${servicePort}`});

});

service.get('/service/:name',(req,res)=>{
    const serviceName = req.params.name;
    const serviceURL = serviceRegistry.get(serviceName);
    res.json({result: serviceURL});
})

const server = http.createServer(service);
server.listen(port);
server.on('listening',()=>{
    console.log(`Service Registry is listening on ${server.address().port} in ${service.get('env')}`);
});

module.exports =service;
