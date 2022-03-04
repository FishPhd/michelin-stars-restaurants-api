import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";

@TypeGraphQL.InputType("RestaurantsCreateInput", {
  isAbstract: true,
})
export class RestaurantsCreateInput {
  @TypeGraphQL.Field((_type) => GraphQLScalars.BigIntResolver, {
    nullable: false,
  })
  id!: bigint;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name?: string | undefined;

  @TypeGraphQL.Field((_type) => GraphQLScalars.BigIntResolver, {
    nullable: true,
  })
  rating?: bigint | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  guide?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  img?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  link?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  location?: string | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  lat?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  long?: number | undefined;

  @TypeGraphQL.Field((_type) => GraphQLScalars.BigIntResolver, {
    nullable: true,
  })
  year?: bigint | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  cuisine?: string | undefined;
}
