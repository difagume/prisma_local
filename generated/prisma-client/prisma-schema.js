module.exports = {
        typeDefs: /* GraphQL */ `type AggregateArticulo {
  count: Int!
}

type AggregateArticulo_detalle {
  count: Int!
}

type AggregateMenu {
  count: Int!
}

type AggregateProducto {
  count: Int!
}

type AggregateRol {
  count: Int!
}

type AggregateUsuarios {
  count: Int!
}

type Articulo {
  id: Int!
  activo: Boolean!
  articulo_detalles(where: Articulo_detalleWhereInput, orderBy: Articulo_detalleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Articulo_detalle!]
  id_menu: Menu
  nombre: String!
  tiempo_preparacion: DateTime
  valor: Float!
}

type Articulo_detalle {
  id: Int!
  activo: Boolean!
  cantidad: Int!
  id_articulo: Articulo
  id_producto: Producto
}

type Articulo_detalleConnection {
  pageInfo: PageInfo!
  edges: [Articulo_detalleEdge]!
  aggregate: AggregateArticulo_detalle!
}

input Articulo_detalleCreateInput {
  activo: Boolean
  cantidad: Int!
  id_articulo: ArticuloCreateOneWithoutArticulo_detallesInput
  id_producto: ProductoCreateOneWithoutArticulo_detallesInput
}

input Articulo_detalleCreateManyWithoutId_articuloInput {
  create: [Articulo_detalleCreateWithoutId_articuloInput!]
  connect: [Articulo_detalleWhereUniqueInput!]
}

input Articulo_detalleCreateManyWithoutId_productoInput {
  create: [Articulo_detalleCreateWithoutId_productoInput!]
  connect: [Articulo_detalleWhereUniqueInput!]
}

input Articulo_detalleCreateWithoutId_articuloInput {
  activo: Boolean
  cantidad: Int!
  id_producto: ProductoCreateOneWithoutArticulo_detallesInput
}

input Articulo_detalleCreateWithoutId_productoInput {
  activo: Boolean
  cantidad: Int!
  id_articulo: ArticuloCreateOneWithoutArticulo_detallesInput
}

type Articulo_detalleEdge {
  node: Articulo_detalle!
  cursor: String!
}

enum Articulo_detalleOrderByInput {
  id_ASC
  id_DESC
  activo_ASC
  activo_DESC
  cantidad_ASC
  cantidad_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type Articulo_detallePreviousValues {
  id: Int!
  activo: Boolean!
  cantidad: Int!
}

type Articulo_detalleSubscriptionPayload {
  mutation: MutationType!
  node: Articulo_detalle
  updatedFields: [String!]
  previousValues: Articulo_detallePreviousValues
}

input Articulo_detalleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: Articulo_detalleWhereInput
  AND: [Articulo_detalleSubscriptionWhereInput!]
  OR: [Articulo_detalleSubscriptionWhereInput!]
  NOT: [Articulo_detalleSubscriptionWhereInput!]
}

input Articulo_detalleUpdateInput {
  activo: Boolean
  cantidad: Int
  id_articulo: ArticuloUpdateOneWithoutArticulo_detallesInput
  id_producto: ProductoUpdateOneWithoutArticulo_detallesInput
}

input Articulo_detalleUpdateManyWithoutId_articuloInput {
  create: [Articulo_detalleCreateWithoutId_articuloInput!]
  delete: [Articulo_detalleWhereUniqueInput!]
  connect: [Articulo_detalleWhereUniqueInput!]
  disconnect: [Articulo_detalleWhereUniqueInput!]
  update: [Articulo_detalleUpdateWithWhereUniqueWithoutId_articuloInput!]
  upsert: [Articulo_detalleUpsertWithWhereUniqueWithoutId_articuloInput!]
}

input Articulo_detalleUpdateManyWithoutId_productoInput {
  create: [Articulo_detalleCreateWithoutId_productoInput!]
  delete: [Articulo_detalleWhereUniqueInput!]
  connect: [Articulo_detalleWhereUniqueInput!]
  disconnect: [Articulo_detalleWhereUniqueInput!]
  update: [Articulo_detalleUpdateWithWhereUniqueWithoutId_productoInput!]
  upsert: [Articulo_detalleUpsertWithWhereUniqueWithoutId_productoInput!]
}

input Articulo_detalleUpdateWithoutId_articuloDataInput {
  activo: Boolean
  cantidad: Int
  id_producto: ProductoUpdateOneWithoutArticulo_detallesInput
}

input Articulo_detalleUpdateWithoutId_productoDataInput {
  activo: Boolean
  cantidad: Int
  id_articulo: ArticuloUpdateOneWithoutArticulo_detallesInput
}

input Articulo_detalleUpdateWithWhereUniqueWithoutId_articuloInput {
  where: Articulo_detalleWhereUniqueInput!
  data: Articulo_detalleUpdateWithoutId_articuloDataInput!
}

input Articulo_detalleUpdateWithWhereUniqueWithoutId_productoInput {
  where: Articulo_detalleWhereUniqueInput!
  data: Articulo_detalleUpdateWithoutId_productoDataInput!
}

input Articulo_detalleUpsertWithWhereUniqueWithoutId_articuloInput {
  where: Articulo_detalleWhereUniqueInput!
  update: Articulo_detalleUpdateWithoutId_articuloDataInput!
  create: Articulo_detalleCreateWithoutId_articuloInput!
}

input Articulo_detalleUpsertWithWhereUniqueWithoutId_productoInput {
  where: Articulo_detalleWhereUniqueInput!
  update: Articulo_detalleUpdateWithoutId_productoDataInput!
  create: Articulo_detalleCreateWithoutId_productoInput!
}

input Articulo_detalleWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  activo: Boolean
  activo_not: Boolean
  cantidad: Int
  cantidad_not: Int
  cantidad_in: [Int!]
  cantidad_not_in: [Int!]
  cantidad_lt: Int
  cantidad_lte: Int
  cantidad_gt: Int
  cantidad_gte: Int
  id_articulo: ArticuloWhereInput
  id_producto: ProductoWhereInput
  AND: [Articulo_detalleWhereInput!]
  OR: [Articulo_detalleWhereInput!]
  NOT: [Articulo_detalleWhereInput!]
}

input Articulo_detalleWhereUniqueInput {
  id: Int
}

type ArticuloConnection {
  pageInfo: PageInfo!
  edges: [ArticuloEdge]!
  aggregate: AggregateArticulo!
}

input ArticuloCreateInput {
  activo: Boolean
  articulo_detalles: Articulo_detalleCreateManyWithoutId_articuloInput
  id_menu: MenuCreateOneWithoutArticulosInput
  nombre: String!
  tiempo_preparacion: DateTime
  valor: Float!
}

input ArticuloCreateManyWithoutId_menuInput {
  create: [ArticuloCreateWithoutId_menuInput!]
  connect: [ArticuloWhereUniqueInput!]
}

input ArticuloCreateOneWithoutArticulo_detallesInput {
  create: ArticuloCreateWithoutArticulo_detallesInput
  connect: ArticuloWhereUniqueInput
}

input ArticuloCreateWithoutArticulo_detallesInput {
  activo: Boolean
  id_menu: MenuCreateOneWithoutArticulosInput
  nombre: String!
  tiempo_preparacion: DateTime
  valor: Float!
}

input ArticuloCreateWithoutId_menuInput {
  activo: Boolean
  articulo_detalles: Articulo_detalleCreateManyWithoutId_articuloInput
  nombre: String!
  tiempo_preparacion: DateTime
  valor: Float!
}

type ArticuloEdge {
  node: Articulo!
  cursor: String!
}

enum ArticuloOrderByInput {
  id_ASC
  id_DESC
  activo_ASC
  activo_DESC
  nombre_ASC
  nombre_DESC
  tiempo_preparacion_ASC
  tiempo_preparacion_DESC
  valor_ASC
  valor_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ArticuloPreviousValues {
  id: Int!
  activo: Boolean!
  nombre: String!
  tiempo_preparacion: DateTime
  valor: Float!
}

type ArticuloSubscriptionPayload {
  mutation: MutationType!
  node: Articulo
  updatedFields: [String!]
  previousValues: ArticuloPreviousValues
}

input ArticuloSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ArticuloWhereInput
  AND: [ArticuloSubscriptionWhereInput!]
  OR: [ArticuloSubscriptionWhereInput!]
  NOT: [ArticuloSubscriptionWhereInput!]
}

input ArticuloUpdateInput {
  activo: Boolean
  articulo_detalles: Articulo_detalleUpdateManyWithoutId_articuloInput
  id_menu: MenuUpdateOneWithoutArticulosInput
  nombre: String
  tiempo_preparacion: DateTime
  valor: Float
}

input ArticuloUpdateManyWithoutId_menuInput {
  create: [ArticuloCreateWithoutId_menuInput!]
  delete: [ArticuloWhereUniqueInput!]
  connect: [ArticuloWhereUniqueInput!]
  disconnect: [ArticuloWhereUniqueInput!]
  update: [ArticuloUpdateWithWhereUniqueWithoutId_menuInput!]
  upsert: [ArticuloUpsertWithWhereUniqueWithoutId_menuInput!]
}

input ArticuloUpdateOneWithoutArticulo_detallesInput {
  create: ArticuloCreateWithoutArticulo_detallesInput
  update: ArticuloUpdateWithoutArticulo_detallesDataInput
  upsert: ArticuloUpsertWithoutArticulo_detallesInput
  delete: Boolean
  disconnect: Boolean
  connect: ArticuloWhereUniqueInput
}

input ArticuloUpdateWithoutArticulo_detallesDataInput {
  activo: Boolean
  id_menu: MenuUpdateOneWithoutArticulosInput
  nombre: String
  tiempo_preparacion: DateTime
  valor: Float
}

input ArticuloUpdateWithoutId_menuDataInput {
  activo: Boolean
  articulo_detalles: Articulo_detalleUpdateManyWithoutId_articuloInput
  nombre: String
  tiempo_preparacion: DateTime
  valor: Float
}

input ArticuloUpdateWithWhereUniqueWithoutId_menuInput {
  where: ArticuloWhereUniqueInput!
  data: ArticuloUpdateWithoutId_menuDataInput!
}

input ArticuloUpsertWithoutArticulo_detallesInput {
  update: ArticuloUpdateWithoutArticulo_detallesDataInput!
  create: ArticuloCreateWithoutArticulo_detallesInput!
}

input ArticuloUpsertWithWhereUniqueWithoutId_menuInput {
  where: ArticuloWhereUniqueInput!
  update: ArticuloUpdateWithoutId_menuDataInput!
  create: ArticuloCreateWithoutId_menuInput!
}

input ArticuloWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  activo: Boolean
  activo_not: Boolean
  articulo_detalles_every: Articulo_detalleWhereInput
  articulo_detalles_some: Articulo_detalleWhereInput
  articulo_detalles_none: Articulo_detalleWhereInput
  id_menu: MenuWhereInput
  nombre: String
  nombre_not: String
  nombre_in: [String!]
  nombre_not_in: [String!]
  nombre_lt: String
  nombre_lte: String
  nombre_gt: String
  nombre_gte: String
  nombre_contains: String
  nombre_not_contains: String
  nombre_starts_with: String
  nombre_not_starts_with: String
  nombre_ends_with: String
  nombre_not_ends_with: String
  tiempo_preparacion: DateTime
  tiempo_preparacion_not: DateTime
  tiempo_preparacion_in: [DateTime!]
  tiempo_preparacion_not_in: [DateTime!]
  tiempo_preparacion_lt: DateTime
  tiempo_preparacion_lte: DateTime
  tiempo_preparacion_gt: DateTime
  tiempo_preparacion_gte: DateTime
  valor: Float
  valor_not: Float
  valor_in: [Float!]
  valor_not_in: [Float!]
  valor_lt: Float
  valor_lte: Float
  valor_gt: Float
  valor_gte: Float
  AND: [ArticuloWhereInput!]
  OR: [ArticuloWhereInput!]
  NOT: [ArticuloWhereInput!]
}

input ArticuloWhereUniqueInput {
  id: Int
  nombre: String
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Menu {
  id: Int!
  activo: Boolean!
  articulos(where: ArticuloWhereInput, orderBy: ArticuloOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Articulo!]
  nombre: String!
}

type MenuConnection {
  pageInfo: PageInfo!
  edges: [MenuEdge]!
  aggregate: AggregateMenu!
}

input MenuCreateInput {
  activo: Boolean
  articulos: ArticuloCreateManyWithoutId_menuInput
  nombre: String!
}

input MenuCreateOneWithoutArticulosInput {
  create: MenuCreateWithoutArticulosInput
  connect: MenuWhereUniqueInput
}

input MenuCreateWithoutArticulosInput {
  activo: Boolean
  nombre: String!
}

type MenuEdge {
  node: Menu!
  cursor: String!
}

enum MenuOrderByInput {
  id_ASC
  id_DESC
  activo_ASC
  activo_DESC
  nombre_ASC
  nombre_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MenuPreviousValues {
  id: Int!
  activo: Boolean!
  nombre: String!
}

type MenuSubscriptionPayload {
  mutation: MutationType!
  node: Menu
  updatedFields: [String!]
  previousValues: MenuPreviousValues
}

input MenuSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MenuWhereInput
  AND: [MenuSubscriptionWhereInput!]
  OR: [MenuSubscriptionWhereInput!]
  NOT: [MenuSubscriptionWhereInput!]
}

input MenuUpdateInput {
  activo: Boolean
  articulos: ArticuloUpdateManyWithoutId_menuInput
  nombre: String
}

input MenuUpdateOneWithoutArticulosInput {
  create: MenuCreateWithoutArticulosInput
  update: MenuUpdateWithoutArticulosDataInput
  upsert: MenuUpsertWithoutArticulosInput
  delete: Boolean
  disconnect: Boolean
  connect: MenuWhereUniqueInput
}

input MenuUpdateWithoutArticulosDataInput {
  activo: Boolean
  nombre: String
}

input MenuUpsertWithoutArticulosInput {
  update: MenuUpdateWithoutArticulosDataInput!
  create: MenuCreateWithoutArticulosInput!
}

input MenuWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  activo: Boolean
  activo_not: Boolean
  articulos_every: ArticuloWhereInput
  articulos_some: ArticuloWhereInput
  articulos_none: ArticuloWhereInput
  nombre: String
  nombre_not: String
  nombre_in: [String!]
  nombre_not_in: [String!]
  nombre_lt: String
  nombre_lte: String
  nombre_gt: String
  nombre_gte: String
  nombre_contains: String
  nombre_not_contains: String
  nombre_starts_with: String
  nombre_not_starts_with: String
  nombre_ends_with: String
  nombre_not_ends_with: String
  AND: [MenuWhereInput!]
  OR: [MenuWhereInput!]
  NOT: [MenuWhereInput!]
}

input MenuWhereUniqueInput {
  id: Int
  nombre: String
}

type Mutation {
  createArticulo(data: ArticuloCreateInput!): Articulo!
  updateArticulo(data: ArticuloUpdateInput!, where: ArticuloWhereUniqueInput!): Articulo
  updateManyArticuloes(data: ArticuloUpdateInput!, where: ArticuloWhereInput): BatchPayload!
  upsertArticulo(where: ArticuloWhereUniqueInput!, create: ArticuloCreateInput!, update: ArticuloUpdateInput!): Articulo!
  deleteArticulo(where: ArticuloWhereUniqueInput!): Articulo
  deleteManyArticuloes(where: ArticuloWhereInput): BatchPayload!
  createArticulo_detalle(data: Articulo_detalleCreateInput!): Articulo_detalle!
  updateArticulo_detalle(data: Articulo_detalleUpdateInput!, where: Articulo_detalleWhereUniqueInput!): Articulo_detalle
  updateManyArticulo_detalles(data: Articulo_detalleUpdateInput!, where: Articulo_detalleWhereInput): BatchPayload!
  upsertArticulo_detalle(where: Articulo_detalleWhereUniqueInput!, create: Articulo_detalleCreateInput!, update: Articulo_detalleUpdateInput!): Articulo_detalle!
  deleteArticulo_detalle(where: Articulo_detalleWhereUniqueInput!): Articulo_detalle
  deleteManyArticulo_detalles(where: Articulo_detalleWhereInput): BatchPayload!
  createMenu(data: MenuCreateInput!): Menu!
  updateMenu(data: MenuUpdateInput!, where: MenuWhereUniqueInput!): Menu
  updateManyMenus(data: MenuUpdateInput!, where: MenuWhereInput): BatchPayload!
  upsertMenu(where: MenuWhereUniqueInput!, create: MenuCreateInput!, update: MenuUpdateInput!): Menu!
  deleteMenu(where: MenuWhereUniqueInput!): Menu
  deleteManyMenus(where: MenuWhereInput): BatchPayload!
  createProducto(data: ProductoCreateInput!): Producto!
  updateProducto(data: ProductoUpdateInput!, where: ProductoWhereUniqueInput!): Producto
  updateManyProductoes(data: ProductoUpdateInput!, where: ProductoWhereInput): BatchPayload!
  upsertProducto(where: ProductoWhereUniqueInput!, create: ProductoCreateInput!, update: ProductoUpdateInput!): Producto!
  deleteProducto(where: ProductoWhereUniqueInput!): Producto
  deleteManyProductoes(where: ProductoWhereInput): BatchPayload!
  createRol(data: RolCreateInput!): Rol!
  updateRol(data: RolUpdateInput!, where: RolWhereUniqueInput!): Rol
  updateManyRols(data: RolUpdateInput!, where: RolWhereInput): BatchPayload!
  upsertRol(where: RolWhereUniqueInput!, create: RolCreateInput!, update: RolUpdateInput!): Rol!
  deleteRol(where: RolWhereUniqueInput!): Rol
  deleteManyRols(where: RolWhereInput): BatchPayload!
  createUsuarios(data: UsuariosCreateInput!): Usuarios!
  updateUsuarios(data: UsuariosUpdateInput!, where: UsuariosWhereUniqueInput!): Usuarios
  updateManyUsuarioses(data: UsuariosUpdateInput!, where: UsuariosWhereInput): BatchPayload!
  upsertUsuarios(where: UsuariosWhereUniqueInput!, create: UsuariosCreateInput!, update: UsuariosUpdateInput!): Usuarios!
  deleteUsuarios(where: UsuariosWhereUniqueInput!): Usuarios
  deleteManyUsuarioses(where: UsuariosWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Producto {
  id: Int!
  activo: Boolean!
  articulo_detalles(where: Articulo_detalleWhereInput, orderBy: Articulo_detalleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Articulo_detalle!]
  nombre: String!
  stock: Int!
  valor: Float!
}

type ProductoConnection {
  pageInfo: PageInfo!
  edges: [ProductoEdge]!
  aggregate: AggregateProducto!
}

input ProductoCreateInput {
  activo: Boolean
  articulo_detalles: Articulo_detalleCreateManyWithoutId_productoInput
  nombre: String!
  stock: Int!
  valor: Float!
}

input ProductoCreateOneWithoutArticulo_detallesInput {
  create: ProductoCreateWithoutArticulo_detallesInput
  connect: ProductoWhereUniqueInput
}

input ProductoCreateWithoutArticulo_detallesInput {
  activo: Boolean
  nombre: String!
  stock: Int!
  valor: Float!
}

type ProductoEdge {
  node: Producto!
  cursor: String!
}

enum ProductoOrderByInput {
  id_ASC
  id_DESC
  activo_ASC
  activo_DESC
  nombre_ASC
  nombre_DESC
  stock_ASC
  stock_DESC
  valor_ASC
  valor_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProductoPreviousValues {
  id: Int!
  activo: Boolean!
  nombre: String!
  stock: Int!
  valor: Float!
}

type ProductoSubscriptionPayload {
  mutation: MutationType!
  node: Producto
  updatedFields: [String!]
  previousValues: ProductoPreviousValues
}

input ProductoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductoWhereInput
  AND: [ProductoSubscriptionWhereInput!]
  OR: [ProductoSubscriptionWhereInput!]
  NOT: [ProductoSubscriptionWhereInput!]
}

input ProductoUpdateInput {
  activo: Boolean
  articulo_detalles: Articulo_detalleUpdateManyWithoutId_productoInput
  nombre: String
  stock: Int
  valor: Float
}

input ProductoUpdateOneWithoutArticulo_detallesInput {
  create: ProductoCreateWithoutArticulo_detallesInput
  update: ProductoUpdateWithoutArticulo_detallesDataInput
  upsert: ProductoUpsertWithoutArticulo_detallesInput
  delete: Boolean
  disconnect: Boolean
  connect: ProductoWhereUniqueInput
}

input ProductoUpdateWithoutArticulo_detallesDataInput {
  activo: Boolean
  nombre: String
  stock: Int
  valor: Float
}

input ProductoUpsertWithoutArticulo_detallesInput {
  update: ProductoUpdateWithoutArticulo_detallesDataInput!
  create: ProductoCreateWithoutArticulo_detallesInput!
}

input ProductoWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  activo: Boolean
  activo_not: Boolean
  articulo_detalles_every: Articulo_detalleWhereInput
  articulo_detalles_some: Articulo_detalleWhereInput
  articulo_detalles_none: Articulo_detalleWhereInput
  nombre: String
  nombre_not: String
  nombre_in: [String!]
  nombre_not_in: [String!]
  nombre_lt: String
  nombre_lte: String
  nombre_gt: String
  nombre_gte: String
  nombre_contains: String
  nombre_not_contains: String
  nombre_starts_with: String
  nombre_not_starts_with: String
  nombre_ends_with: String
  nombre_not_ends_with: String
  stock: Int
  stock_not: Int
  stock_in: [Int!]
  stock_not_in: [Int!]
  stock_lt: Int
  stock_lte: Int
  stock_gt: Int
  stock_gte: Int
  valor: Float
  valor_not: Float
  valor_in: [Float!]
  valor_not_in: [Float!]
  valor_lt: Float
  valor_lte: Float
  valor_gt: Float
  valor_gte: Float
  AND: [ProductoWhereInput!]
  OR: [ProductoWhereInput!]
  NOT: [ProductoWhereInput!]
}

input ProductoWhereUniqueInput {
  id: Int
  nombre: String
}

type Query {
  articulo(where: ArticuloWhereUniqueInput!): Articulo
  articuloes(where: ArticuloWhereInput, orderBy: ArticuloOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Articulo]!
  articuloesConnection(where: ArticuloWhereInput, orderBy: ArticuloOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ArticuloConnection!
  articulo_detalle(where: Articulo_detalleWhereUniqueInput!): Articulo_detalle
  articulo_detalles(where: Articulo_detalleWhereInput, orderBy: Articulo_detalleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Articulo_detalle]!
  articulo_detallesConnection(where: Articulo_detalleWhereInput, orderBy: Articulo_detalleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): Articulo_detalleConnection!
  menu(where: MenuWhereUniqueInput!): Menu
  menus(where: MenuWhereInput, orderBy: MenuOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Menu]!
  menusConnection(where: MenuWhereInput, orderBy: MenuOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MenuConnection!
  producto(where: ProductoWhereUniqueInput!): Producto
  productoes(where: ProductoWhereInput, orderBy: ProductoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Producto]!
  productoesConnection(where: ProductoWhereInput, orderBy: ProductoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductoConnection!
  rol(where: RolWhereUniqueInput!): Rol
  rols(where: RolWhereInput, orderBy: RolOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Rol]!
  rolsConnection(where: RolWhereInput, orderBy: RolOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RolConnection!
  usuarios(where: UsuariosWhereUniqueInput!): Usuarios
  usuarioses(where: UsuariosWhereInput, orderBy: UsuariosOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Usuarios]!
  usuariosesConnection(where: UsuariosWhereInput, orderBy: UsuariosOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UsuariosConnection!
  node(id: ID!): Node
}

type Rol {
  id: Int!
  activo: Boolean!
  nombre: String!
}

type RolConnection {
  pageInfo: PageInfo!
  edges: [RolEdge]!
  aggregate: AggregateRol!
}

input RolCreateInput {
  activo: Boolean
  nombre: String!
}

type RolEdge {
  node: Rol!
  cursor: String!
}

enum RolOrderByInput {
  id_ASC
  id_DESC
  activo_ASC
  activo_DESC
  nombre_ASC
  nombre_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RolPreviousValues {
  id: Int!
  activo: Boolean!
  nombre: String!
}

type RolSubscriptionPayload {
  mutation: MutationType!
  node: Rol
  updatedFields: [String!]
  previousValues: RolPreviousValues
}

input RolSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RolWhereInput
  AND: [RolSubscriptionWhereInput!]
  OR: [RolSubscriptionWhereInput!]
  NOT: [RolSubscriptionWhereInput!]
}

input RolUpdateInput {
  activo: Boolean
  nombre: String
}

input RolWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  activo: Boolean
  activo_not: Boolean
  nombre: String
  nombre_not: String
  nombre_in: [String!]
  nombre_not_in: [String!]
  nombre_lt: String
  nombre_lte: String
  nombre_gt: String
  nombre_gte: String
  nombre_contains: String
  nombre_not_contains: String
  nombre_starts_with: String
  nombre_not_starts_with: String
  nombre_ends_with: String
  nombre_not_ends_with: String
  AND: [RolWhereInput!]
  OR: [RolWhereInput!]
  NOT: [RolWhereInput!]
}

input RolWhereUniqueInput {
  id: Int
  nombre: String
}

type Subscription {
  articulo(where: ArticuloSubscriptionWhereInput): ArticuloSubscriptionPayload
  articulo_detalle(where: Articulo_detalleSubscriptionWhereInput): Articulo_detalleSubscriptionPayload
  menu(where: MenuSubscriptionWhereInput): MenuSubscriptionPayload
  producto(where: ProductoSubscriptionWhereInput): ProductoSubscriptionPayload
  rol(where: RolSubscriptionWhereInput): RolSubscriptionPayload
  usuarios(where: UsuariosSubscriptionWhereInput): UsuariosSubscriptionPayload
}

type Usuarios {
  id: Int!
  activo: Boolean!
  apellido: String
  email: String
  estado: String
  img: String
  nombre: String
  password: String
  rol: String
  social: Boolean
  usuario: String
}

type UsuariosConnection {
  pageInfo: PageInfo!
  edges: [UsuariosEdge]!
  aggregate: AggregateUsuarios!
}

input UsuariosCreateInput {
  activo: Boolean
  apellido: String
  email: String
  estado: String
  img: String
  nombre: String
  password: String
  rol: String
  social: Boolean
  usuario: String
}

type UsuariosEdge {
  node: Usuarios!
  cursor: String!
}

enum UsuariosOrderByInput {
  id_ASC
  id_DESC
  activo_ASC
  activo_DESC
  apellido_ASC
  apellido_DESC
  email_ASC
  email_DESC
  estado_ASC
  estado_DESC
  img_ASC
  img_DESC
  nombre_ASC
  nombre_DESC
  password_ASC
  password_DESC
  rol_ASC
  rol_DESC
  social_ASC
  social_DESC
  usuario_ASC
  usuario_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UsuariosPreviousValues {
  id: Int!
  activo: Boolean!
  apellido: String
  email: String
  estado: String
  img: String
  nombre: String
  password: String
  rol: String
  social: Boolean
  usuario: String
}

type UsuariosSubscriptionPayload {
  mutation: MutationType!
  node: Usuarios
  updatedFields: [String!]
  previousValues: UsuariosPreviousValues
}

input UsuariosSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UsuariosWhereInput
  AND: [UsuariosSubscriptionWhereInput!]
  OR: [UsuariosSubscriptionWhereInput!]
  NOT: [UsuariosSubscriptionWhereInput!]
}

input UsuariosUpdateInput {
  activo: Boolean
  apellido: String
  email: String
  estado: String
  img: String
  nombre: String
  password: String
  rol: String
  social: Boolean
  usuario: String
}

input UsuariosWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  activo: Boolean
  activo_not: Boolean
  apellido: String
  apellido_not: String
  apellido_in: [String!]
  apellido_not_in: [String!]
  apellido_lt: String
  apellido_lte: String
  apellido_gt: String
  apellido_gte: String
  apellido_contains: String
  apellido_not_contains: String
  apellido_starts_with: String
  apellido_not_starts_with: String
  apellido_ends_with: String
  apellido_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  estado: String
  estado_not: String
  estado_in: [String!]
  estado_not_in: [String!]
  estado_lt: String
  estado_lte: String
  estado_gt: String
  estado_gte: String
  estado_contains: String
  estado_not_contains: String
  estado_starts_with: String
  estado_not_starts_with: String
  estado_ends_with: String
  estado_not_ends_with: String
  img: String
  img_not: String
  img_in: [String!]
  img_not_in: [String!]
  img_lt: String
  img_lte: String
  img_gt: String
  img_gte: String
  img_contains: String
  img_not_contains: String
  img_starts_with: String
  img_not_starts_with: String
  img_ends_with: String
  img_not_ends_with: String
  nombre: String
  nombre_not: String
  nombre_in: [String!]
  nombre_not_in: [String!]
  nombre_lt: String
  nombre_lte: String
  nombre_gt: String
  nombre_gte: String
  nombre_contains: String
  nombre_not_contains: String
  nombre_starts_with: String
  nombre_not_starts_with: String
  nombre_ends_with: String
  nombre_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  rol: String
  rol_not: String
  rol_in: [String!]
  rol_not_in: [String!]
  rol_lt: String
  rol_lte: String
  rol_gt: String
  rol_gte: String
  rol_contains: String
  rol_not_contains: String
  rol_starts_with: String
  rol_not_starts_with: String
  rol_ends_with: String
  rol_not_ends_with: String
  social: Boolean
  social_not: Boolean
  usuario: String
  usuario_not: String
  usuario_in: [String!]
  usuario_not_in: [String!]
  usuario_lt: String
  usuario_lte: String
  usuario_gt: String
  usuario_gte: String
  usuario_contains: String
  usuario_not_contains: String
  usuario_starts_with: String
  usuario_not_starts_with: String
  usuario_ends_with: String
  usuario_not_ends_with: String
  AND: [UsuariosWhereInput!]
  OR: [UsuariosWhereInput!]
  NOT: [UsuariosWhereInput!]
}

input UsuariosWhereUniqueInput {
  id: Int
  email: String
  usuario: String
}
`
      }
    