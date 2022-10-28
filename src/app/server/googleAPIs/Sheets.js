const { google } = require('googleapis');
const path = require("path");
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
if (process.env.NODE_ENV !== "production") {
    const dotenv = require('dotenv');
    let envFile = path.join(__dirname,'..','..','.env.'+process.env.NODE_ENV);
    dotenv.config({ path: envFile });
}

async function getAuthToken() {
    return await new Promise(resolve => {
        const auth = new google.auth.GoogleAuth({
            keyFile: path.join(process.env.REACT_APP_GOOGLE_API_CREDENTIALS_FILE),
            scopes: SCOPES
        });
        return resolve(auth.getClient());
    });
}

async function getSpreadSheetValues({spreadsheetId, sheetName}) {
    try {
        const auth = await getAuthToken();
        const sheets = google.sheets({version: 'v4', auth: auth});
        return await new Promise(resolve => {
            return resolve(sheets.spreadsheets.values.get({
                spreadsheetId,
                auth,
                range: sheetName
            }));
        });
    } catch (e) {
        console.trace(e);
    }
}

async function appendDataToSpreadsheet({spreadsheetId, sheetName, dataToAppend}) {
    const auth = await getAuthToken();
    const sheetToAppend = google.sheets({version: 'v4', auth: auth});
    let values = [[
        dataToAppend.data,                     //Data
        dataToAppend.peso,                     //Peso
        dataToAppend.addome_vita,              //Addome - Vita
        dataToAppend.addome_contorno,          //Addome - Contorno
        dataToAppend.fianchi,                  //Fianchi
        dataToAppend.coscia_dx,                //Coscia DX
        dataToAppend.coscia_sx,                //Coscia SX
        dataToAppend.avambraccio_dx,           //Avambraccio DX
        dataToAppend.avambraccio_sx,           //Avambraccio SX
        dataToAppend.polpaccio_dx,             //Avambraccio DX
        dataToAppend.polpaccio_sx,             //Avambraccio SX
        dataToAppend.torace,                   //Torace
        dataToAppend.bicipite_dx_relaxed,      //Bicipite DX Rel
        dataToAppend.bicipite_dx_contracted,   //Bicipite DX Contr
        dataToAppend.bicipite_sx_relaxed,      //Bicipite SX Rel
        dataToAppend.bicipite_sx_contracted,   //Bicipite SX Contr
        dataToAppend.spalle                    //Spalle
    ]];
    const resource = {
        values,
    };
    try {
        return await new Promise(resolve => {
            return resolve(sheetToAppend.spreadsheets.values.append({
                spreadsheetId: spreadsheetId,
                range: sheetName,
                valueInputOption: 'USER_ENTERED',
                resource: resource
            }));
        });
    } catch (err) {
        throw err;
    }
}


module.exports = {
    getSpreadSheetValues,
    appendDataToSpreadsheet
}