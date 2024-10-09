
const{
    Model
} = require('sequelize');
module.exports = (sequelize,DataTypes) => {
    class Lenguaje extends Model{
        static associate(models){
            //asociaciones
        }
    }

    Lenguaje.init({
        tipo: DataTypes.STRING,
        estructura: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Lenguaje',
        timestamps: false,
    });
    return Lenguaje;
};