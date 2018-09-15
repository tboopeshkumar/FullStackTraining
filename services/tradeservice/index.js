const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3010;
const dataStore = require('./datastore/datastore');
app.use(cors());

app.get('/',(req,res)=>{
res.json({ result : "Trade Service..."});
});

app.get('/trades',(req,res)=>{
    dataStore.getRecentTrades().then(response=>{
        res.json(response);
    }).catch(err=>{
        res.statusCode = 500;
        res.statusMessage = err;
        res.send();
    })
    
})

app.listen(port,()=>{
    console.log(`Trade Service Running in ${port}`)
})