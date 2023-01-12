"use-strict";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { config } from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import db from "./db/connection";
import { resolvers, typeDefs } from "./graphql";

config();
db();

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
startStandaloneServer(server).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.get("/api", (req, res) => {
  res.json({
    message: "Hellow Api",
  });
});

export default app;
