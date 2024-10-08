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
      diagrama.hasMany(codigo, {
        foreignKey: 'diagramaID',
        sourceyKey: 'id'
      })

      codigo this.belongsTo(diagrama,{
        foreignKey: 'diagramaID',
        targetId: 'id'
      })
    }
  }
  Diagrama.init({
    nombre: DataTypes.STRING,
    imagen: DataTypes.BLOB,
    nota: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Diagrama',
  });
  return Diagrama;
};