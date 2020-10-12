const db = require("../models");

//retrive all data
exports.get = async (req, res) => {
        let user = await db.user.findAll();
        let bio = await db.bio.findAll();
        let history = await db.history.findAll()
    
        res.render("page/index.ejs",{user,bio,history});
};





