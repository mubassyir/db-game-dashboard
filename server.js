const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");
const app = express();
PORT = 8001;

let corsOption = {
    origin : 'http://localhost:8081'
}

//Ejs Setting
app.set('view engine', 'ejs');

//cors and body parser
app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

db.sequelize.sync().then(()=>{
    console.log("syncronize ...")
}); 

//syncronizing & call from routes
require("./app/routes/user.routes.js")(app);
require("./app/routes/bio.routes.js")(app);
require("./app/routes/history_routes.js")(app);
require("./app/routes/dashboard.routes.js")(app);

app.listen(PORT,()=>{
    console.log(`server http://localhost/${PORT}/api/ running . . . `);
})