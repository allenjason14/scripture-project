module.exports = function(sequelize, DataTypes) {
  var Test = sequelize.define("Test", {
    test1: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
    },  {
      timestamps: false
    })
  return Test;
};