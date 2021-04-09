const request = require("request");
const hostname = "http://pokeapi.co/api/v2";
const path = "/pokemon/1/";
callback = (err, res, body) => {
    console.log(body);
    }
request(`${hostname}${path}`, callback );


