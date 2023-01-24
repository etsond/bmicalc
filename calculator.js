const express = require('express');

const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({extended: true}));
const port = 3000;

// getting the html files
app.get('/', (req,res) => {
    res.sendFile(__dirname+ "/index.html");
})
// sending a post request to post after the caluclation was made
app.post('/', (req, res) => {
   let number1 = Number(req.body.number1);
   let number2 = Number(req.body.number2);
   let result = number1 + number2
   res.send("Your bmi is " + result)
})

// getting the html from the bmi page
app.get("/bmicalculator", (req,res) => {
    res.sendFile(__dirname + "/bmiCalculator.html")
})
app.post("/bmicalculator", (req,res) => {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    // calculation for bmi
    let divide = (weight / (height **2))
    res.send("Your BMI is " + divide)
})

// creating a server to listen
app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})