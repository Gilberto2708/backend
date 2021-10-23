module.exports = (sequelize, DataTypes) => {
    const Persona = sequelize.define('users_test_gilberto_cabrera', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true, 
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        segundo_nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellido_paterno: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellido_materno: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fecha_nacimiento: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
         telefono: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {});
    return Persona
}