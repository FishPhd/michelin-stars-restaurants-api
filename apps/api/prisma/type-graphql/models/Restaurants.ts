import { Field, ObjectType, Float } from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";

@ObjectType("Restaurants", {
  isAbstract: true,
})
export class Restaurants {
  @Field((_type) => GraphQLScalars.BigIntResolver, {
    nullable: false,
  })
  id!: bigint;

  @Field((_type) => String, {
    nullable: true,
  })
  name?: string | null;

  @Field((_type) => GraphQLScalars.BigIntResolver, {
    nullable: true,
  })
  rating?: bigint | null;

  @Field((_type) => String, {
    nullable: true,
  })
  guide?: string | null;

  @Field((_type) => String, {
    nullable: true,
  })
  img?: string | null;

  @Field((_type) => String, {
    nullable: true,
  })
  link?: string | null;

  @Field((_type) => String, {
    nullable: true,
  })
  location?: string | null;

  @Field((_type) => Float, {
    nullable: true,
  })
  lat?: number | null;

  @Field((_type) => Float, {
    nullable: true,
  })
  long?: number | null;

  @Field((_type) => GraphQLScalars.BigIntResolver, {
    nullable: true,
  })
  year?: bigint | null;

  @Field((_type) => String, {
    nullable: true,
  })
  cuisine?: string | null;
}
