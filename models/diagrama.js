'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diagrama extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Diagrama.init({
    nombre: DataTypes.STRING,
    imagen: DataTypes.BLOB,
    nota: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Diagrama',
  });
  return Diagrama;
};