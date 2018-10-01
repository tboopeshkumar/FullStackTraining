'use strict'

const express = require('express');
const service = express();
const ServiceRegistry = require('./serviceRegistry');
const serviceRegistry = new ServiceRegistry();

service.set('serviceRegistry', serviceRegistry);

service.put('/service/:name/:port',(req,res,next)=>{
 
    const serviceName = req.params.name;
    const servicePort = req.params.port;
    const serviceIp = req.connection.remoteAddress.includes('::')
    ? `[${req.connection.remoteAddress}]` : req.connection.remoteAddress;
    serviceRegistry.add(serviceName,serviceIp,servicePort);
    res.json({result :`${serviceName} at ${serviceIp}:${servicePort}`});

});

module.exports =service;