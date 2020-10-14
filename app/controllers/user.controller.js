const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

// create and user data
exports.create = (req, res) => {
  // validate request
  if (!req.body.email||!req.body.password) {
    res.status(500).send({message : "content cannot be empty"})
        return;
  }
  // Create tutorial
  const user = {
    email: req.body.email,
    password: req.body.password
  };

  User.create(user) 
    .then(() => {
      res.send({message:"creating data success"});
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some error while creating User data",
      });
    });
};

// query all or with email
exports.findAll = (req, res) => {
  const email = req.query.email;
  var condition = email? {email: {[Op.iLike]: `%${email}%`,},}: null;

  User.findAll({
    where: condition,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "there is no tutorial with that email",
      });
    });
};

// query with query params id
exports.findOne = (req, res) => {
  const id = req.params.id;
  User.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || `there is no tutorial with that ${id}` ,
      });
    });
};

// update user
exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
    where: { user_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.redirect("/")
      } else {
        res.send({
          message: `Cannot update user with id=${id} `,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || `Errot updating user with ${id}`,
      });
    });
};

// delete with query params
exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({ where: { user_id: id } })
    .then((num) => {
      if (num == 1) {
        res.redirect("/");
      } else {
        res.send({
          message: `Cannot delete user with id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || `Could not delete user with ${id}`,
      });
    });
};

// delele all
exports.deleteAll = (req, res) => {
  User.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({
        message: 'User was deleted successfully',
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Deleted  all Failed",
      });
    });
};

