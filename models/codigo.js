'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Codigo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Codigo.init({
    codigo: DataTypes.TEXT,
    detalle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Codigo',
    timestamps: false,
  });
  return Codigo;
};