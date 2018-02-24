module.exports = function(sequelize, DataTypes) {
  var Quotes = sequelize.define("Quotes", {
    author: {
    	type: DataTypes.STRING, 
    	allowNull: false 
    },
    source: {
    	type: DataTypes.STRING
    },
    talk: {
    	type: DataTypes.STRING,
    },
    date: {
    	type: DataTypes.DATEONLY
    },
    url: {
    	type: DataTypes.STRING 
    }
   });
  return Quotes;
};