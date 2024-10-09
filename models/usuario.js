'use strict';
const {
  Model
} = require('sequelize');
const diagrama = require('../src/models/diagrama');
const usuario = require('../src/models/usuario');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      usuario.hasMany(diagrama, {
        foreignKey: 'usuarioID',
        sourceyKey: 'id'
      })

      diagrama.belongsTo(usuario, {
        foreignKey: 'usuarioID',
        targetId: 'id'
      })

      usuario.hasMany(codigo, {
        foreignKey: 'usuarioID',
        sourceyKey: 'id'
      })

      codigo.belongsTo(usuario, {
        foreignKey: 'usuarioID',
        targetId: 'id'
      })
    }
  }
  Usuario.init({
    username: DataTypes.STRING,
    password: DataTypes.VARCHAR(255),
    correo: DataTypes.VARCHAR(255),
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
    timestamps: false,
  });
  return Usuario;
};