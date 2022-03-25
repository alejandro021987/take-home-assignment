const { ApolloServer } = require('apollo-server');
const { readFileSync } = require('fs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const resolvers = require('./resolvers')
const typeDefs = readFileSync('./schema.graphql').toString('utf-8')

const getUser = token => {
  try {
      if (token) {
          return jwt.verify(token, process.env.JWT_SECRET)
      }
      return null
  } catch (error) {
      return null
  }
}


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.get('Authorization') || ''
    return { user: getUser(token.replace('Bearer', '').trim())}
  }
});

server.listen({ port: 4000 }, () =>
  console.log(`Listening on http://localhost:4000/graphql`)
);