const db = require("../models");

//retrive all data
exports.get = async (req, res) => {
  let user = await db.user.findAll();
  let bio = await db.bio.findAll();
  let history = await db.history.findAll()
  res.render("page/index.ejs",{user,bio,history});
};

exports.getForm = (req, res) => {
  let user_id =req.params.id;
  res.render("page/update.form.ejs",{user_id:user_id})      
};

exports.getFormBio = (req, res) => {
  let bio_id =req.params.id;
  res.render("page/history.form.ejs",{bio_id:bio_id})      
};

exports.getFormHistory = (req, res) => {
  let history_id =req.params.id;
  res.render("page/history.form.ejs",{history_id:history_id})      
};
exports.updateUser = (req, res) => {
  const id = req.params.id;      
  db.user.update(req.body, {
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
exports.updateBio = (req, res) => {
  const id = req.params.id;
  db.bio.update(req.body, {
    where: { bio_id: id },
  }).then((num) => {
      if (num == 1) {
        res.redirect("/")
      } else {
        res.send({
          message: `Cannot update bio with id=${id} `,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || `Errot updating user with ${id}`,
      });
    });
};

exports.updateHistory = (req, res) => {
  const id = req.params.id;
  db.history.update(req.body, {
    where: { history_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.redirect("/")
      } else {
        res.send({
          message: `Cannot update bio with id=${id} `,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || `Errot updating user with ${id}`,
      });
    });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  db.user.destroy({ where: { user_id: id } })
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

exports.deleteBio = (req, res) => {
  const id = req.params.id;

  db.bio.destroy({ where: { bio_id: id } })
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
        message: err.message || `Could not delete bio with ${id}`,
      });
    });
};

exports.deleteHistory = (req, res) => {
  const id = req.params.id;
  db.history.destroy({ 
    where: { history_id: id } })
    .then((num) => {
      if (num == 1) {
        res.redirect("/");
      } else {
        res.send({
          message: `Cannot delete history with id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || `Could not delete history with ${id}`,
      });
  });
};






