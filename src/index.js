import {ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import express from 'express';

import {typeDefs} from './typeDefs';
import {resolvers} from './resolvers';



const startServer = async ()=>{
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers,
      });
      
      server.applyMiddleware({ app });
      await mongoose.connect('mongodb://localhost:27017/hospital-records', {useNewUrlParser: true, useUnifiedTopology: true});

      app.listen({ port: 4000 }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
      )
}
startServer();