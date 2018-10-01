const express = require('express');
const app = express();
const cors = require('cors');
const serviceRegistryURL = `http://localhost:3000/service`;
const dataStore = require('./datastore/datastore');
const axios = require('axios').default;
const port =  3020;
app.use(cors());
app.get('/', (req, res) => {
    res.json({ result: "ref data service..." });
});

app.get('/currencies', async (req, res) => {
    try {
        const dbRes = await dataStore.fetchAllCurrency();
        res.json(dbRes);
    }
    catch (err) {
        res.status(500);
        res.json({ error: err });
    }
});

app.get('/counterparties', async (req, res) => {
    try {
        const dbRes = await dataStore.fetchAllCounterParty();
        res.json(dbRes);
    }
    catch (err) {
        res.status(500);
        res.json({ error: err });
    }
});

app.get('/locations', async (req, res) => {
    try {
        const dbRes = await dataStore.fetchAllLocation();
        res.json(dbRes);
    }
    catch (err) {
        res.status(500);
        res.json({ error: err });
    }
});

app.get('/commodities', async (req, res) => {
    try {
        const dbRes = await dataStore.fetchAllCommodity();
        res.json(dbRes);
    }
    catch (err) {
        res.status(500);
        res.json({ error: err });
    }
});


app.listen(port, () => {
    console.log(`Ref Data Service Running in ${port}`);

    const announce = () =>{
        axios.put(`${serviceRegistryURL}/refdata/${port}`)
            .then((res)=>{
                console.log(res.data);
            }).catch((err)=>{
                console.log('Error connecting Service Registry');
                return;
            })
    }
    announce();
    setInterval(announce, 15*1000);
})