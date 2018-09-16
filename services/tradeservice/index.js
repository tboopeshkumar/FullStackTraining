const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3010;
const dataStore = require('./datastore/datastore');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ result: "Trade Service..." });
});

app.get('/trades', async (req, res) => {
    try {
        const dbRes = await dataStore.getRecentTrades();
        res.json(dbRes);
    }
    catch (err) {
        res.status(500);
        res.json({ error: err });
    }
});

app.post('/trades', async (req, res) => {
    try {
        const dbRes = await dataStore.saveTrade(req.body.data);
        res.json({ tradeId: dbRes._id });
    } catch (err) {
        console.log(err);
        res.status(500);
        res.send({ error: err });
    }

});

app.listen(port, () => {
    console.log(`Trade Service Running in ${port}`)
})