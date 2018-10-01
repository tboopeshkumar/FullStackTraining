const express = require('express')
const httpProxy = require('express-http-proxy')
const cors = require('cors');
const axios = require('axios').default;
const app = require('./servicediscovery/service');
const port =  3000;
const refdata = require('./controllers/refdatacontroller');
const trade = require('./controllers/tradeservicecontroller');

app.use(cors());

// Authentication
app.use((req, res, next) => {
  // TODO: my authentication logic
  next()
})

app.use('/refdata',refdata);
app.use('/tradeservice',trade);

app.listen(port, () => {
    console.log(`API Gateway Service Running in ${port}`);
});





