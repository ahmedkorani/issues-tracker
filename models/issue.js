const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Issue = sequelize.define("Issue", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Issue;
