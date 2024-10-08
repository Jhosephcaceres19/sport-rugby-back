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
      Diagrama.hasMany(models.Codigo, {
        foreignKey: 'diagramaID',
        sourceKey: 'id'
      })

      models.Codigo.belongsTo(models.Diagrama, {
        foreignKey: 'diagramaID',
        targetKey: 'id'
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
    timestamps: false,
  });
  return Diagrama;
};