const typeDefs = `
  type User {
    _id: ID
    email: String
    name: String
    icon: String
  }

  type Response {
    status: Boolean
    text: String
  }

  input PostInput {
    title: String
    subtitle: String
    state: Boolean
    content: String
    img_background: String
    id_type: ID
    user_id: ID
  }

  type Post {
    _id: ID
    title: String
    subtitle: String
    state: Boolean
    content: String
    img_background: String
    id_type: ID
    user_id: ID
    views: Int
    user: User
    typePost: TypePost
  }

  type TypePost {
    _id: ID
    name: String
    icon: String
  }

  type Login {
    token: String
  }

  type Query {
    getUsers(per_page: Int!, page: Int!): [User]
    getPosts(per_page: Int!, page: Int!): [Post]
    getPostsType(per_page: Int, page: Int, type_id: ID): [Post]
    getTypesPost: [TypePost]
  }

  type Mutation {
    createUser(email: String!, icon: String!, password: String!, name: String!): Response
    login(email: String!, password: String!): Login
    createPost(input: PostInput): Response
    createTypePost(name: String!, icon: String!): Response
    updateTypePost(_id: ID!, name: String!, icon: String!): Response
    createViewPost(idPost: ID!): Response
  }
`;
export default typeDefs