var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.user_dashboard.findAll({}).then(function(user_dashboard) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/:user/:id", function(req, res) {
    db.user_dash_board.findOne({ where: { id: req.params.id } }).then(function(user_dashboard) {
      res.render("example", {
        User: user_dashboard
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
