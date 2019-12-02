var express = require("express");
var routerProduct = require("./routes/product");

var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/", (request, response)=>{
    response.send("Welcome. You can procced further");
})

app.use("/product", routerProduct);

app.listen(8000, '0.0.0.0',()=>{
    console.log("Server started on 8000..");
})
