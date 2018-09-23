const mongoose = require('mongoose');
const refDataSchema = require('./schemas/refdataSchema').refDataSchema;
const mockData = require('./mockrefdata');

mongoose.connect('mongodb://localhost/metallica', { useNewUrlParser: true });

const Commodity = mongoose.model('Commodity', refDataSchema, 'commodities');
const Location = mongoose.model('Location', refDataSchema);
const CounterParty = mongoose.model('CounterParty', refDataSchema);
const Currency = mongoose.model('Currency', refDataSchema);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log('connected to database Metallica.');
    initalizeCollection(Commodity, mockData.commodityList);
    initalizeCollection(CounterParty, mockData.counterPartyList);
    initalizeCollection(Location, mockData.locationList);
    initalizeCollection(Currency, mockData.currencyList);
});

const initalizeCollection = function (collectionModel, data) {

    collectionModel.countDocuments({}).then(async (count) => {
        if (count == 0) {
            try {
                await collectionModel.insertMany(data);
                console.log(collectionModel.modelName + ' initialized');
            } catch (err) {
                console.log(err);
            }
        }
    });

}

const fetchAllValuesForCollection = async function (collectionModel) {
    try {
        const docs = await collectionModel.find({});
        return docs;
    } catch (err) {
        console.log(`Error in fetching currency ref data ${err}`);
        throw Error(err);
    };
}

const fetchAllCurrency = async function () {
   return fetchAllValuesForCollection(Currency);
}

const fetchAllCommodity = async function () {
   return fetchAllValuesForCollection(Commodity);
}

const fetchAllLocation = async function () {
    return fetchAllValuesForCollection(Location);
}

const fetchAllCounterParty = async function () {
   return fetchAllValuesForCollection(CounterParty);
}

module.exports = {
    fetchAllCommodity,
    fetchAllCounterParty,
    fetchAllLocation,
    fetchAllCurrency
}






