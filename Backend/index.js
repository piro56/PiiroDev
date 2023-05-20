const express = require("express");
var cors = require('cors');

const app = express();
app.use(cors());

/* ROUTES */
const secretpage = require('./routes/secretcode');
/**********/


const BACKEND_PORT = process.env.PORT || 8080;


app.get("/", (req, res) => {
   console.log("[INFO] Connection Recieved");
   res.json({str: "Hello World!"}); 
});

app.use('/secret', secretpage);

app.listen(BACKEND_PORT, () => startup());
function startup() {
   console.log(`Server listening on port ${BACKEND_PORT}`)
}