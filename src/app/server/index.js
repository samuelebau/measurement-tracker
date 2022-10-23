const asyncHandler = require('express-async-handler');
const path = require("path");
const express = require("express");
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
if (process.env.NODE_ENV !== "production") {
    dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
}
const spreadsheetId = process.env.REACT_APP_GOOGLE_API_SHEETS_ID;
const sheetName = process.env.REACT_APP_GOOGLE_API_SHEETS_NAME;

const {
    getSpreadSheetValues,
    appendDataToSpreadsheet
} = require('./googleSheetsServices/googleSheetsService.js');


// const getMeasurementsAction = async (req,res) => {
//     const response = await getSpreadSheetValues({spreadsheetId, sheetName});
//     res.json(response);
// }

const addMeasurementAction = async (req, res) => {
    const dataToAppend = req.body;
    const response =  await appendDataToSpreadsheet({spreadsheetId, sheetName, dataToAppend});
    res.json(response)
}
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "build")));
//app.get("/get-measurements",asyncHandler(getMeasurementsAction));
app.post("/add-measurement",asyncHandler(addMeasurementAction));


app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// start express server on port 5000
app.listen(process.env.PORT, () => {
    console.log("server started on port " + process.env.PORT);
});
