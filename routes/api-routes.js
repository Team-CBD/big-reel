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

    app.get("/api/catch", function(req, res)
    {
        sequelize_fixtures.loadFile("./fixtures/test catch.js", db).then(function()
        {
            db.catchHistory.findAll({
                attributes: ["id", "fish_type", "bait_type", "lat", "lng"]
            })
            .then(function(result)
            {
                res.json(result);
            });
        });
    });

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
        var newCatchData = req.body;
    
        // Create a routeName
    
        // Using a RegEx Pattern to remove spaces from newCatchData.name
        var routeName = newCatchData.name.replace(/\s+/g, "").toLowerCase();
    
        // Then add the newCatchData to the database using sequelize
        newCatchData.create({
          routeName: routeName + Date.now(),
          fish_type: newCatchData.fish_type,
          bait_type: newCatchData.bait_type,
          lat: newCatchData.lat,
          lng: newCatchData.lng
        });
    
        res.status(204).end();
      });
}