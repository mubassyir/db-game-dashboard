var router = require("express").Router();

module.exports = (user) => {
    const userController = require("../controllers/user.controller.js");
    
    router.post("/", userController.create)
    router.get("/", userController.findAll);
    router.get("/:id", userController.findOne);
    // router.post("/:id", userController.update);
    router.post("/:id", userController.delete);
    router.delete("/", userController.deleteAll);
    
    //path
    user.use("/api/user", router);
  };
