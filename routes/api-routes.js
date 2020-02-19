var db = require("../models");

module.exports = function(app) {
  
  ////User CRUD
  // Get a user profile
  app.get("/api/:user", function(req, res) {
    db.User.findAll({}).then(function(user) {
      res.json(user);
    });
  });

  // Create a new user profile
  app.post("/api/:user", function(req, res) {
    db.Example.create(req.body).then(function(user) {
      res.json(user);
    });
  });

  // Delete a user by id
  // app.delete("/api/user/:id", function(req, res) {
  //   db.catch.destroy({ where: { id: req.params.id } }).then(function(dbCatch) {
  //     res.json(dbCatch);
  //   });
  // });

  //// Catch CRUD
  //get user's catch history
  app.get("/api/:user/catches", function(req, res) {
    db.Catches.findAll({}).then(function(dbCatches) {
      res.json(dbCatches);
    });
  });

  // Create a new catch
  app.post("/api/:user/:catches", function(req, res) {
    db.Catches.create(req.body).then(function(dbCatches) {
      res.json(Catches);
    });
  });

  // Delete a catch by id
  app.delete("/api/:user/:id", function(req, res) {
    db.Catches.destroy({ where: { id: req.params.id } }).then(function(dbCatches) {
      res.json(dbCatches);
    });
  });

  //// Tackle box CRUD
  //get user's catch history
  app.get("/api/:user/tackle-box", function(req, res) {
    db.Catches.findAll({}).then(function(dbCatches) {
      res.json(dbCatches);
    });
  });

  // Create a new Tackle box
  app.post("/api/:user/:tackle-box", function(req, res) {
    db.Catches.create(req.body).then(function(dbCatches) {
      res.json(Catches);
    });
  });

  // Delete a tackle box by id
  app.delete("/api/:user/:id", function(req, res) {
    db.Catches.destroy({ where: { id: req.params.id } }).then(function(dbCatches) {
      res.json(dbCatches);
    });
  });
};
