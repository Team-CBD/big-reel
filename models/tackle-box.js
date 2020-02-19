module.exports = function(sequelize, DataTypes) {

    // var Example = sequelize.define("Example", {
    //     text: DataTypes.STRING,
    //     description: DataTypes.TEXT
    //   });
    //   return Example;
    var User= sequelize.define("User", {
        email: DataTypes.STRING,
        password: DataTypes.STRING
    });
        return User;

    var TackleBox = sequelize.define("Tackle-box", {
        rigName: DataTypes.STRING,
        pole: DataTypes.STRING,
        reel: DataTypes.STRING,
        bait: DataTypes.STRING,
        accessories: DataTypes.STRING
    });
        return TackleBox;
        
}