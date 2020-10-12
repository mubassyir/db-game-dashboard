var router = require('express').Router();

module.exports =(dashboard)=> {
  const dashboardController = require("../controllers/dashboard.controller");
    router.get("/",dashboardController.get);

    dashboard.use('/',router);
  };
