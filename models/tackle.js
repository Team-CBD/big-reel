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
        bait:
        {
            type: DataTypes.STRING
        },
        lure:
        {
            type: DataTypes.STRING
        }
    });
    return tackleBox;
};