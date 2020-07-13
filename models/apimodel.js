
/*let unirest = require("unirest");

let req = unirest("GET", "https://realtor.p.rapidapi.com/properties/v2/list-sold");
let realtorData= ''
let realtor= []

req.query({
    "sort": "sold_date",
    "city": "New York City",
    "offset": "0",
    "state_code": "NY",
    "limit": "1"
});

 req.headers({
    "x-rapidapi-host": "realtor.p.rapidapi.com",
    "x-rapidapi-key": "f1d6245012msh0fadbce02ddbd1dp1cc945jsn892656c3b30b",
    "useQueryString": true
});


  let rest = req.end(function (res) {
    if (res.error) throw new Error(res.error);
    
    realtorData= res.body.properties
//realtor.push(res.body.properties)
    console.log(realtorData)
    
 
    
})
//console.log(rest)

module.exports={
    realtorData
}



*/