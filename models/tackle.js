"use strict"
module.exports = function(sequelize, DataTypes)
{
    var tackleBox = sequelize.define("Tackle_Box",
    {
        tackle_id:
        {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        rod:
        {
            type: DataTypes.STRING
        },
        bait:
        {
            type: DataTypes.STRING
        },
        baitAmount:
        {
            type: DataTypes.INTEGER
        },
        lure:
        {
            type: DataTypes.STRING
        }
        
    });
    return tackleBox;
};