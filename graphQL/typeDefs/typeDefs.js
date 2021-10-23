const { gql } = require('apollo-server-express')

const typeDefs = gql`

type Persona{
    id: Int!
    nombre: String!
    segundo_nombre: String!
    apellido_paterno: String!
    apellido_materno: String!
    fecha_nacimiento: String!
    email: String!
    telefono: String!
}

type Query{
    getPersonas: [Persona],
    getPersona(id: Int!): Persona
}


type Mutation{
    createPersona(nombre: String!,segundo_nombre: String!, apellido_paterno: String!, apellido_materno: String!,fecha_nacimiento: String!,email: String!,telefono: String!): Persona!
}
`
module.exports = typeDefs