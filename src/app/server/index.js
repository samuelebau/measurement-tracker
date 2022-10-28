const path = require("path");
const asyncHandler = require('express-async-handler');
const express = require("express");
const bodyParser = require('body-parser');
const app = express(); // create express app
const port = process.env.PORT || 3001;
if (process.env.NODE_ENV !== "production") {
    const dotenv = require('dotenv');
    let envFile = path.join(__dirname,'..','.env.'+process.env.NODE_ENV);
    dotenv.config({ path: envFile });
}

const spreadsheetId = process.env.REACT_APP_GOOGLE_API_SHEETS_ID;
const sheetName = process.env.REACT_APP_GOOGLE_API_SHEETS_NAME;

const { appendDataToSpreadsheet } = require('./googleAPIs/Sheets.js');

const addMeasurementAction = async (req, res) => {
    const dataToAppend = req.body;
    const response =  await appendDataToSpreadsheet({
        spreadsheetId,
        sheetName,
        dataToAppend
    });
    res.json(response);
}

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.get(/^(?!\/api).+/, function(req,res){
    //the path does not begin with "/api"
    res.redirect('/');
});

app.post("/api/add-measurement",asyncHandler(addMeasurementAction));

// start express server on port 5000
app.listen(port, () => {
    console.log("server started on port " + port);
});