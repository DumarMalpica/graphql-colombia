import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import express from 'express';
import cors from 'cors';
import { typeDefs } from './schema.js';
import { resolvers } from './resolvers.js';

const PORT = 4000;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginLandingPageLocalDefault({ embed: true }),
  ],
});
await server.start();
app.use(
  '/graphql',
  cors(),
  express.json(),
  expressMiddleware(server),
);

app.listen(PORT, () => {
  console.log(`corriendo en el puerto ${PORT}`);
});
