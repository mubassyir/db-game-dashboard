var router = require("express").Router();

module.exports = (user) => {
    const userController = require("../controllers/user.controller.js");
    
    router.post("/", userController.create)
    router.get("/", userController.findAll);
    router.get("/:id", userController.findOne);
    router.put("/:id", userController.update);
    router.delete("/:id", userController.delete);
    router.delete("/", userController.deleteAll);
    
    //path
    user.use("/api/user", router);
  };
