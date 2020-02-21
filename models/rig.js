"use strict"
module.exports = function(sequelize, DataTypes)
{
    var Rig = sequelize.define("Rig",{
    
        rig_id:
        {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        rig_name: 
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        rod: DataTypes.STRING,

        line: DataTypes.STRING,

        tackle: DataTypes.STRING,

        createdAt: 
        {
            type: DataTypes.DATE,
            field: 'beginTime',
            defaultValue: sequelize.literal('NOW()')
        },
        updatedAt: 
        {
            type: DataTypes.DATE,
            field: 'beginTime',
            defaultValue: sequelize.literal('NOW()')
        }
        }, {
            timestamps: true,
        
            freezeTableName: true        
        
    });
    return Rig;
};