"use strict"
// module.exports = function(sequelize, DataTypes)
// {
//     var location = sequelize.define("location",
//     {
//         id:
//         {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             allowNull: false,
//             autoIncrement: true
//         },
//         locationName:
//         {
//             type: DataTypes.STRING
//         }
//     });
//     return location;
// };

app.get('/users', (req, res) => {
    db.users.findAll({
      include: [
        {
          model: db.posts,
          include: [
            {
              model: db.comments
            }
          ]
        }
      ]
    }).then(users => {
      const resObj = users.map(user => {

        //tidy up the user data
        return Object.assign(
          {},
          {
            user_id: user.id,
            username: user.username,
            role: user.role,
            posts: user.posts.map(post => {

              //tidy up the post data
              return Object.assign(
                {},
                {
                  post_id: post.id,
                  user_id: post.user_id,
                  content: post.content,
                  comments: post.comments.map(comment => {

                    //tidy up the comment data
                    return Object.assign(
                      {},
                      {
                        comment_id: comment.id,
                        post_id: comment.post_id,
                        commenter: comment.commenter_username,
                        commenter_email: comment.commenter_email,
                        content: comment.content
                      }
                    )
                  })
                }
                )
            })
          }
        )
      });
      res.json(resObj)
    });
  });