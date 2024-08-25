//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){

    console.log(req.body);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;


    res.send("The result is "+ result);
})

app.get("/bmicalc", function(req,res){
    res.sendFile(__dirname + "/bmiCalc.html");
})

app.post("/bmiCalc", function(req,res){

    console.log(req.body);
    var h = Number(req.body.height);
    var w = Number(req.body.weight);

    var result = w/(h*h);


    res.send("Your BMI is: "+ result);
})



app.listen(3000, function(){
    console.log("Server is running on port 3000...");
});