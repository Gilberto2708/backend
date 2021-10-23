//Conexion con la Base de Datos.
import Sequelize from 'sequelize'


const sequelize = new Sequelize('testing_ali_fullstack', 'testing', 'Pruebas%ALI%2020', {//Modifica los datos para conectarte a la Bd
    host: 'data-avimo.cgriqmyweq5c.us-east-2.rds.amazonaws.com',
    dialect: 'mysql'
})

const models = {
    persona: sequelize.import('./persona')
}

models.sequelize = sequelize
models.Sequelize = Sequelize

module.exports = models