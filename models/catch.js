"use strict"
module.exports = function(sequelize, DataTypes)
{
    var catchHistory = sequelize.define("Catch History", 
    {
        id:
        {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        fish_type:
        {
            type: DataTypes.STRING
        },
        bait_type:
        {
            type: DataTypes.STRING
        },
        lat:
        {
            type: DataTypes.INTEGER
        },
        lng:
        {
            type: DataTypes.INTEGER
        },
        userId:
        {
            type: DataTypes.INTEGER
        }
    });
    return catchHistory;
};