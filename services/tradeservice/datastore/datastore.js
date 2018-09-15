const mockData = require('./mocktradedata');
const mongoose = require('mongoose');
const tradeSchema = require('./schemas/tradeSchema').tradeSchema;
mongoose.connect('mongodb://localhost/metallica', { useNewUrlParser: true });

const Trade = mongoose.model('Trade', tradeSchema);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connected to database');
    Trade.countDocuments({}).then((count) => {
        if (count == 0) {
            Trade.insertMany(mockData.tradeDataList, (err) => {
                if (err)
                    console.log('Trade initialize error');
                console.log('Trades initialized');
            });
        }
    });
});

module.exports.getRecentTrades = function () {

    return new Promise((resolve,reject)=>{
        const query = Trade.find({}).sort({tradeDate : 'desc'}).limit(10);
        query.exec().then((docs)=>{
            resolve({
                data: docs,
                headers: mockData.tradeDataHeaders
            });
        }).catch((err)=>{
            console.log(`Error in fetching recent trades ${err}`);
            reject(err);
        })
    });
}

module.exports.saveTrade = function(tradeData){
    return new Promise((resolve,reject)=>{
       
    });
}



