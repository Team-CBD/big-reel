"use strict"
module.exports = function(sequelize, DataTypes)
{
    var profile = sequelize.define("Profile",
    {
        profile_id:
        {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        username:
        {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return profile;
};