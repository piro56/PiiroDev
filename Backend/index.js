const express = require("express");
var cors = require('cors');
const app = express();
app.use(cors());

const BACKEND_PORT = process.env.PORT || 8080;


app.get("/", (req, res) => {
   console.log("[INFO] Connection Recieved");
   res.json({str: "Hello World!"}); 
});

app.listen(BACKEND_PORT, () => console.log(`Server listening on port ${BACKEND_PORT}`));
