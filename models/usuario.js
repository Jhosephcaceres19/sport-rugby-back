const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      models.Usuario.hasMany(models.Diagrama, {
        foreignKey: 'usuarioID',
        sourceKey: 'id'
      });

      models.Diagrama.belongsTo(models.Usuario, {
        foreignKey: 'usuarioID',
        targetKey: 'id'
      });

      models.Usuario.hasMany(models.Codigo, {
        foreignKey: 'usuarioID',
        sourceKey: 'id'
      });

      models.Codigo.belongsTo(models.Usuario, {
        foreignKey: 'usuarioID',
        targetKey: 'id'
      });
    }
  }

  Usuario.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    correo: DataTypes.STRING,
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
    timestamps: false,
  });

  return Usuario;
};
