const { ApolloServer, gql } = require('apollo-server-lambda')
const { getAllProjects, addProject } = require('./utils/airtable')

const typeDefs = gql`
  type Project {
    id: ID
    name: String
    description: String
    date: String
    status: String
  }

  input ProjectInput {
    name: String
    description: String
    date: String
  }

  type Query {
    getProjects: [Project]
    addProject(project: ProjectInput): Project
  }
`

const resolvers = {
  Query: {
    getProjects: () => {
      try {
        const allRecords = getAllProjects()
        return allRecords
      } catch (error) {
        throw new Error(error)
      }
    },
    addProject: (_, args) => {
      try {
        const createProject = addProject(args)
        return createProject
      } catch (error) {}
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = server.createHandler()

module.exports = { handler }
