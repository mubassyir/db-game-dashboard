const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");
const app = express();
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const request = new XMLHttpRequest();
const PORT = process.env.PORT || 8080;


let corsOption = {
    origin : 'http://localhost:8081'
}

//Ejs Setting
app.set('view engine', 'ejs');
// app.set("views", path.join(__dirname, "views"));

//cors and body parser
app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

db.sequelize.sync().then(()=>{
    console.log("syncronize ...")
}); 

// app.get('/', function(req, res) {
//     var mascots = [
//         { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
//         { name: 'Tux', organization: "Linux", birth_year: 1996},
//         { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
//     ];
//     var tagline = "No programming concept is complete without a cute animal mascot.";

//     res.render('pages/index', {
//         mascots: mascots,
//         tagline: tagline
//     });
// });
// index page

// app.get('/', (req, res)=>{
//    res.render("page/index.ejs")
// });


//syncronizing & call from routes
require("./app/routes/user.routes.js")(app);
require("./app/routes/bio.routes.js")(app);
require("./app/routes/history_routes.js")(app);
require("./app/routes/dashboard.routes.js")(app);


app.listen(PORT,()=>{
    console.log(`server http://localhost:${PORT}/api/ running . . . `);
})