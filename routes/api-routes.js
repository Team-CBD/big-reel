var db = require("../models");
const sequelize_fixtures = require("sequelize-fixtures");

module.exports = function(app)
{
    app.get("/api/User", function(req, res)
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

    // GET route for getting all of the catches
    app.get("/api/CatchHistory", function(req, res) {
        // findAll returns all entries for a table when used with no options
        db.CatchHistory.findAll({}).then(function(dbCatchHistory) {
        // We have access to the catches as an argument inside of the callback function
        res.json(dbCatchHistory);
        });
    });

    // POST route for saving a new catch
    app.post("/api/CatchHistory", function(req, res) {
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property
        db.CatchHistory.create(req.body).then(function(dbCatchHistory) {
            console.log(dbCatchHistory);
        // We have access to the new catch as an argument inside of the callback function
        res.json(dbCatchHistory);
        res.status(204).end();
        });
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