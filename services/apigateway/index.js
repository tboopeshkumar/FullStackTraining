const express = require('express')
const httpProxy = require('express-http-proxy')
const app = express()
const cors = require('cors');
const ServiceRegistry = require('./serviceRegistry');
const serviceRegistry = new ServiceRegistry();
const axios = require('axios').default;
const port =  3000;

app.use(cors());

// Authentication
app.use((req, res, next) => {
  // TODO: my authentication logic
  next()
})

// Proxy request
app.get('/users/:userId', (req, res, next) => {
  userServiceProxy(req, res, next)
});

app.get('/trades',async (req,res,next)=>{
    const service = await serviceRegistry.get('trade');
    const serviceURL = `http://${service.ip}:${service.port}`;
    const serviceProxy = httpProxy(serviceURL);
    serviceProxy(req,res);
});

app.get('/service/refdataservice',async (req,res,next)=>{
    const service = await serviceRegistry.get('refdata');
    const serviceURL = `http://${service.ip}:${service.port}`;
    const serviceProxy = httpProxy(serviceURL);
    serviceProxy(req,res);
});


app.put('/service/:name/:port',(req,res,next)=>{
 
    const serviceName = req.params.name;
    const servicePort = req.params.port;
    const serviceIp = req.connection.remoteAddress.includes('::')
    ? `[${req.connection.remoteAddress}]` : req.connection.remoteAddress;
    serviceRegistry.add(serviceName,serviceIp,servicePort);
    res.json({result :`${serviceName} at ${serviceIp}:${servicePort}`});

});

app.listen(port, () => {
    console.log(`API Gateway Service Running in ${port}`);
});





