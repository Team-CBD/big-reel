var db = require("../models");
const sequelize_fixtures = require("sequelize-fixtures");

module.exports = function(app)
{
    app.get("/api/profile", function(req, res)
    {
        sequelize_fixtures.loadFile("./fixtures/test.js", db).then(function()
        {
            db.profile.findAll({
                attributes: ["id", "username", "firstName", "lastName"]
            })
            .then(function(result)
            {
                res.json(result);
            });
        });
    });

    // app.get("/api/catch", function(req, res)
    // {
    //     sequelize_fixtures.loadFile("./fixtures/test catch.js", db).then(function()
    //     {
    //         db.catchHistory.findAll({
    //             attributes: ["id", "currentRod", "current_bait", "current_lure", "lng"]
    //         })
    //         .then(function(result)
    //         {
    //             res.json(result);
    //         });
    //     });
    // });

    app.get("/api/tackle", function(req, res)
    {
        db.tackleBox.findAll({
            attributes: ["id", "rod", "rodAmount", "bait", "baitAmount", "lure", "lureAmount"]
        })
        .then(function(result)
        {
            res.json(result);
        });
    });

    app.get("/api/rig", function(req, res)
    {
        db.rig.findAll({
            attributes: ["id", "currentRod", "currentBait", "currentBaitAmount", "currentLure", "currentLureAmount"]
        })
        .then(function(result)
        {
            res.json(result);
        });
    });

    app.post("/api/catch", function(req, res) {
        // Take the request...
        var newRig = req.body;
    
        // Create a routeName
    
        // Using a RegEx Pattern to remove spaces from newRig.name
        var routeName = newRig.name.replace(/\s+/g, "").toLowerCase();
    
        // Then add the newRig to the database using sequelize
        newRig.create({
          routeName: routeName + Date.now(),
          currentRod: newRig.currentRod,
          current_bait: newRig.current_bait,
          current_lure: newRig.current_lure,
          lng: newRig.lng
        });
    
        res.status(204).end();
      });

      app.post("/api/rig", function(req, res) {
        // Take the request...
        var newRig = req.body;
    
        // Create a routeName
    
        // Using a RegEx Pattern to remove spaces from newRig.name
        var routeName = newRig.name.replace(/\s+/g, "").toLowerCase();
    
        // Then add the newRig to the database using sequelize
        newRig.create({
          routeName: routeName + Date.now(),
          currentRod: newRig.currentRod,
          current_bait: newRig.current_bait,
          current_lure: newRig.current_lure
        });
    
        res.status(204).end();
      });
}