const app = require('../servicediscovery/service');
const express = require('express');
const router = express.Router()
const serviceRegistry = app.get('serviceRegistry');
const httpProxy = require('express-http-proxy')

router.get('/trades',async (req,res,next)=>{
    const service = await serviceRegistry.get('trade');
    const serviceURL = `http://${service.ip}:${service.port}`;
    const serviceProxy = httpProxy(serviceURL,{ });
    serviceProxy(req,res);
});

router.post('/trades',async (req,res,next)=>{
    const service = await serviceRegistry.get('trade');
    const serviceURL = `http://${service.ip}:${service.port}`;
    const serviceProxy = httpProxy(serviceURL,{ });
    serviceProxy(req,res);
});
module.exports = router