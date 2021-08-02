const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
	res.send("welcome lok");
});

app.get("/about", function(req, res){
	res.send("about :)");
});

app.get("/lok", function(req, res){
	res.send("lok :)");
});

app.get("/calculator", function(req, res){
	// console.log(__dirname);
	res.sendFile(__dirname+"/exp-calculator-index.html");
});

app.post("/calculator", function(req, res){
	// res.send("thank you for your post");
	console.log(req.body);
	let n1 = Number(req.body.v1);
	let n2=Number(req.body.v2);
	// let sum = n1+n2;
	// res.send("the sum is : "+sum);
	let mul=n1*n2;
	res.send("multiplication is : "+mul);
});

app.get("/bmi", function(req, res){
	// console.log(__dirname);
	res.sendFile(__dirname+"/exp-bmi-index.html");
});

app.post("/bmi", function(req, res){
	// res.send("thank you for your post");
	console.log(req.body);
	let w1 = Number(req.body.weight);
	let h2=Number(req.body.height);
	// let sum = n1+n2;
	// res.send("the sum is : "+sum);
	let bmi=w1/(h2*h2);
	res.send("BMI is : "+bmi);
});

app.listen(5000, function(req, res){
	console.log("server is running at port number: 5000");
});

