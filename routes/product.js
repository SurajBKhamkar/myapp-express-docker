var express = require("express");
var mysql = require("mysql");

var routerProduct = express();

var connection = mysql.createConnection({
    host:"172.18.5.233",
    database: "mydata",
    password:"manager",
    port:9000,
    user:"root"
})

routerProduct.use(express.json());

connection.connect();

routerProduct.get("/", (request, response)=>{
    var queryText = "select * from product";

    connection.query(queryText, (error, result)=>{
        if (error==null) {
            response.send(JSON.stringify(result));
        } else {
            response.send(JSON.stringify(error));
        }
    })
})

module.exports = routerProduct;