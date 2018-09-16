module.exports.tradeDataList =[
    { "tradeDate" : "2017-11-13T05:13:52.332+0000","commodity" : "AL", "side" : "Buy", "quantity" : 100, "price":1860.15,"counterParty" : "Lorem","location" : "BA","tradeStatus" : "OPEN","currency" : "USD"},
    { "tradeDate" : "2017-11-14T05:13:52.332+0000","commodity" : "AL", "side" : "Buy", "quantity" : 10, "price":60.15,"counterParty" : "Lorem","location" : "BA","tradeStatus" : "OPEN","currency" : "EUR"},
    { "tradeDate" : "2017-11-15T05:13:52.332+0000","commodity" : "AL", "side" : "Sell", "quantity" : 52, "price":860.15,"counterParty" : "Amet","location" : "BA","tradeStatus" : "OPEN","currency" : "USD"},
    { "tradeDate" : "2017-11-16T05:13:52.332+0000","commodity" : "AL", "side" : "Buy", "quantity" : 70, "price":180.15,"counterParty" : "Lorem","location" : "LN","tradeStatus" : "OPEN","currency" : "IND"},
    { "tradeDate" : "2017-11-17T05:13:52.332+0000","commodity" : "AL", "side" : "Buy", "quantity" : 120, "price":330.15,"counterParty" : "Lorem","location" : "BA","tradeStatus" : "OPEN","currency" : "USD"},
    { "tradeDate" : "2017-11-17T05:13:52.332+0000","commodity" : "AG", "side" : "Sell", "quantity" : 140, "price":440.15,"counterParty" : "Lorem","location" : "LN","tradeStatus" : "OPEN","currency" : "USD"},
    { "tradeDate" : "2017-11-17T05:13:52.332+0000","commodity" : "AL", "side" : "Buy", "quantity" : 60, "price":185.15,"counterParty" : "Lorem","location" : "BA","tradeStatus" : "OPEN","currency" : "USD"},
    { "tradeDate" : "2017-11-18T05:13:52.332+0000","commodity" : "AL", "side" : "Buy", "quantity" : 80, "price":650.15,"counterParty" : "Lorem","location" : "BA","tradeStatus" : "OPEN","currency" : "IND"},
    { "tradeDate" : "2017-11-18T05:13:52.332+0000","commodity" : "AL", "side" : "Sell", "quantity" : 96, "price":10.15,"counterParty" : "Lorem","location" : "NY","tradeStatus" : "OPEN","currency" : "USD"},
    { "tradeDate" : "2017-11-18T05:13:52.332+0000","commodity" : "ZN", "side" : "Buy", "quantity" : 20, "price":10.15,"counterParty" : "Lorem","location" : "BA","tradeStatus" : "OPEN","currency" : "EUR"},
    { "tradeDate" : "2017-11-18T05:13:52.332+0000","commodity" : "AL", "side" : "Buy", "quantity" : 10, "price":60.15,"counterParty" : "Lorem","location" : "LN","tradeStatus" : "OPEN","currency" : "USD"},
    { "tradeDate" : "2017-11-19T05:13:52.332+0000","commodity" : "AL", "side" : "Buy", "quantity" : 14, "price":180.15,"counterParty" : "Lorem","location" : "BA","tradeStatus" : "OPEN","currency" : "IND"},
    { "tradeDate" : "2017-11-19T05:13:52.332+0000","commodity" : "AU", "side" : "Buy", "quantity" : 170, "price":160.15,"counterParty" : "Lorem","location" : "NY","tradeStatus" : "OPEN","currency" : "USD"},
    { "tradeDate" : "2017-11-19T05:13:52.332+0000","commodity" : "AL", "side" : "Sell", "quantity" : 200, "price":190.15,"counterParty" : "Lorem","location" : "BA","tradeStatus" : "OPEN","currency" : "USD"},
    { "tradeDate" : "2017-11-19T05:13:52.332+0000","commodity" : "AL", "side" : "Buy", "quantity" : 300, "price":560.15,"counterParty" : "Lorem","location" : "BA","tradeStatus" : "OPEN","currency" : "EUR"},
    { "tradeDate" : "2017-11-19T05:13:52.332+0000","commodity" : "AL", "side" : "Buy", "quantity" : 56, "price":60.15,"counterParty" : "Lorem","location" : "BA","tradeStatus" : "OPEN","currency" : "USD"},
    { "tradeDate" : "2017-11-19T05:13:52.332+0000","commodity" : "AL", "side" : "Sell", "quantity" : 45, "price":60.15,"counterParty" : "Lorem","location" : "LN","tradeStatus" : "OPEN","currency" : "EUR"}

];

module.exports.tradeDataHeaders =[{headerName: "Trade Date", field: "tradeDate"},
{headerName: "Commodity", field: "commodity"},
{headerName: "Side", field: "side"}, 
{headerName: "Qty(MT)", field: "quantity"},
{headerName: "Price(MT)", field: "price"},
{headerName: "Counterparty", field: "counterParty"},
{headerName: "Location", field: "location"},
{headerName: "Currency", field: "currency"},
];

module.exports.commodityList =[
    { id : -1, code : '', description : ''},
    { id : 1, code : 'AL', description : 'Aluminum'},
    { id : 2, code : 'ZN', description : 'Zinc' },
    { id : 3, code : 'CU', description : 'Copper'},
    { id : 4, code : 'AU', description : 'Gold'},
    { id : 5, code : 'AG', description : 'Silver'},
];

module.exports.locationList =[
    { id : -1, code : '', description : ''},
    { id : 1, code : 'LN', description : 'London'},
    { id : 2, code : 'NY', description : 'Newyork' },
    { id : 3, code : 'SG', description : 'Singapore'},
    { id : 4, code : 'DN', description : 'Denver'},
    { id : 5, code : 'BA', description : 'Bangalore'},
];

module.exports.counterPartyList =[
    { id : -1, code : '', description : ''},
    { id : 1, code : 'Lorem', description : 'Lorem'},
    { id : 2, code : 'Ipsum', description : 'Ipsum' },
    { id : 3, code : 'Dolor', description : 'Dolor'},
    { id : 4, code : 'Amet', description : 'Amet'},
];