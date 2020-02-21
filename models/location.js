"use strict"
module.exports = function(sequelize, DataTypes)
{
    var location = sequelize.define("location",
    {
        id:
        {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        locationName:
        {
            type: DataTypes.STRING
        }
    });
    return location;
};

