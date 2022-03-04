import { Context } from "./types";

export function getPrismaFromContext(context: Context) {
  const prismaClient = context.prisma;
  if (!prismaClient) {
    throw new Error(
      "Unable to find Prisma Client in GraphQL context. Please provide it under the `context.prisma` key."
    );
  }
  return prismaClient;
}
