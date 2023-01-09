const express = require("express");

const app = express();
const BACKEND_PORT = 3001;

app.get("/", (req, res) => {
   res.send("Hello World!"); 
});

app.listen(BACKEND_PORT, () => console.log(`Server listening on port ${BACKEND_PORT}`));
