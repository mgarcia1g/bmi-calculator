const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.listen(3000);

app.get("/home", function(req,res){
    res.sendFile(__dirname + "/index.html")
  console.log("server running on port 3000")
})

app.post("/home",function(req,res){
    var num1=Number(req.body.num1);
    var num2 =Number(req.body.num2);
    var result = num1 + num2;
    res.send("Result: "+result)
})

////// BMI

app.get("/bmi", function(req,res){
    res.sendFile(__dirname +"/bmiCalculator.html")
})

app.post("/bmi",function(req,res){
    var weight = Number(req.body.weight);
    var activityLevel =Number( req.body.activityLevel);
    var result=weight*activityLevel;
    res.send("Your maintenance calories should be around "+result)
})
