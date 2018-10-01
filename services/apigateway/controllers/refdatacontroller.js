const app = require('../servicediscovery/service');
const express = require('express');
const router = express.Router()
const serviceRegistry = app.get('serviceRegistry');
const httpProxy = require('express-http-proxy')

router.get('/currencies',async (req,res,next)=>{
    const service = await serviceRegistry.get('refdata');
    const serviceURL = `http://${service.ip}:${service.port}`;
    const serviceProxy = httpProxy(serviceURL);
    serviceProxy(req,res);
});

router.get('/counterparties',async (req,res,next)=>{
    const service = await serviceRegistry.get('refdata');
    const serviceURL = `http://${service.ip}:${service.port}`;
    const serviceProxy = httpProxy(serviceURL);
    serviceProxy(req,res);
});

router.get('/commodities',async (req,res,next)=>{
    const service = await serviceRegistry.get('refdata');
    const serviceURL = `http://${service.ip}:${service.port}`;
    const serviceProxy = httpProxy(serviceURL);
    serviceProxy(req,res);
});

router.get('/currencies',async (req,res,next)=>{
    const service = await serviceRegistry.get('refdata');
    const serviceURL = `http://${service.ip}:${service.port}`;
    const serviceProxy = httpProxy(serviceURL);
    serviceProxy(req,res);
});

router.get('/locations',async (req,res,next)=>{
    const service = await serviceRegistry.get('refdata');
    const serviceURL = `http://${service.ip}:${service.port}`;
    const serviceProxy = httpProxy(serviceURL);
    serviceProxy(req,res);
});

module.exports = router