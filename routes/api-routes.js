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
        var newCatch = req.body;
    
        // Create a routeName
    
        // Using a RegEx Pattern to remove spaces from newRig.name
        var routeName = newCatch.name.replace(/\s+/g, "").toLowerCase();
    
        // Then add the newRig to the database using sequelize
        newCatch.create({
          routeName: routeName + Date.now(),
          currentRod: newCatch.currentRod,
          current_bait: newCatch.current_bait,
          current_lure: newCatch.current_lure,
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

    //   // Table join for catch history
    //   app.get('/users', (req, res) => {
    //     db.users.findAll({
    //       include: [
    //         {
    //           model: db.catchs,
    //           include: [
    //             {
    //               model: db.Catch_Histories
    //             }
    //           ]
    //         }
    //       ]
    //     }).then(users => {
    //       const resObj = users.map(user => {
    
    //         //tidy up the user data
    //         return Object.assign(
    //           {},
    //           {
    //             user_id: user.id,
    //             username: user.username,
    //             role: user.role,
    //             posts: user.posts.map(post => {
    
    //               //tidy up the post data
    //               return Object.assign(
    //                 {},
    //                 {
    //                   post_id: post.id,
    //                   user_id: post.user_id,
    //                   content: post.content,
    //                   comments: post.comments.map(comment => {
    
    //                     //tidy up the comment data
    //                     return Object.assign(
    //                       {},
    //                       {
    //                         comment_id: comment.id,
    //                         post_id: comment.post_id,
    //                         commenter: comment.commenter_username,
    //                         commenter_email: comment.commenter_email,
    //                         content: comment.content
    //                       }
    //                     )
    //                   })
    //                 }
    //                 )
    //             })
    //           }
    //         )
    //       });
    //       res.json(resObj)
    //     });
    //   });
}