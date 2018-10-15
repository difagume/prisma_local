const { prisma } = require('./generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')

// const allUsers = await prisma.usuarioses()

const resolvers = {
    Query: {
        articuloes(root, args, context) {
            return context.prisma.articuloes({ where: { activo: true } }).menuId()
        }
    },
    Mutation: {
        createArticulo(root, args, context) {
            return context.prisma.createArticulo(
                {
                    articuloDetalleId: args.articuloDetalleId,
                    menuId: args.menuId,
                    nombre: args.nombre,
                    tiempoPreparacion: args.tiempoPreparacion,
                    valor: args.valor
                },
            )
        }
    }
}

const server = new GraphQLServer({
    typeDefs: './generated/prisma.graphql',
    resolvers,
    context: {
        prisma
    },
})
server.start(() => console.log('Server is running on http://localhost:4000'))