"use strict"
module.exports = function(sequelize, DataTypes)
{
    var tackleBox = sequelize.define("Tackle Box",
    {
        id:
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
        rodAmount:
        {
            type: DataTypes.INTEGER
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
        },
        lureAmount:
        {
            type: DataTypes.INTEGER
        }
    });
    return tackleBox;
};