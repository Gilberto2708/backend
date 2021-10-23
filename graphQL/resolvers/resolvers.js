const resolvers = {

    Query: {

       //Pruebas
        async getPersonas(root, args, { models }){
            return await models.persona.findAll()
        },
        async getPersona(root, args, { models }){
            return await models.persona.findByPk(args.id)
        }

    },
    Mutation: {
        async createPersona(root, { nombre,segundo_nombre, apellido_paterno,apellido_materno,fecha_nacimiento,email,telefono }, { models }){
            return await models.persona.create( {nombre,segundo_nombre, apellido_paterno,apellido_materno,fecha_nacimiento,email,telefono} )
        }
    }

}

module.exports = resolvers