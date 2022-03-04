import { ApolloServer } from "apollo-server";
import { PrismaClient } from "@prisma/client";
import "reflect-metadata";
import { buildSchemaSync } from "type-graphql";
import { RestaurantsResolver } from "./prisma/resolvers/RestaurantsResolver";

const PORT = process.env.PORT || 4000;

const schema = buildSchemaSync({
  resolvers: [RestaurantsResolver],
  validate: false,
});

const prisma = new PrismaClient();

const server = new ApolloServer({ schema, context: () => ({ prisma }) });

// The `listen` method launches a web server.
server.listen(PORT).then(async ({ url }: { url: string }) => {
  console.log(`🚀  Server ready at ${url}`);
});
