import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";

@TypeGraphQL.InputType("RestaurantsWhereUniqueInput", {
  isAbstract: true,
})
export class RestaurantsWhereUniqueInput {
  @TypeGraphQL.Field((_type) => GraphQLScalars.BigIntResolver, {
    nullable: true,
  })
  id?: bigint | undefined;
}
