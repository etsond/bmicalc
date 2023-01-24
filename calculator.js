const express = require('express');

const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({extended: true}));
const port = 3000;

app.get('/', (req,res) => {
    res.sendFile(__dirname+ "/index.html");
})
app.post('/', (req, res) => {
   let number1 = Number(req.body.number1);
   let number2 = Number(req.body.number2);
   let result = number1 + number2
   res.send("Your bmi is " + result)
})

app.get("/bmicalculator", (req,res) => {
    res.sendFile(__dirname + "/bmiCalculator.html")
})
app.post("/bmicalculator", (req,res) => {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    let divide = (weight / (height **2))
    res.send("Your BMI is " + divide)
})

app.listen(port, () => {
    console.log(`example app lsitening on port ${port}`)
})