"use strict"
module.exports = function(sequelize, DataTypes)
{
    var rig = sequelize.define("Rig",
    {
        rig_id:
        {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        currentRod:
        {
            type: DataTypes.STRING
        },
        currentBait:
        {
            type: DataTypes.STRING
        },
        currentBaitAmount:
        {
            type: DataTypes.INTEGER
        },
        currentLure:
        {
            type: DataTypes.STRING
        },
        currentLureAmount:
        {
            type: DataTypes.INTEGER
        }
        // foreignKey: {
        //     id: DataTypes.INTEGER,
        //     autoIncrement: true,
        //     allowNull: false
        // }
    });
    return rig;
}