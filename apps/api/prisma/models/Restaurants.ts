import { Field, ObjectType, Float } from "type-graphql";
import { BigIntResolver } from "graphql-scalars";

@ObjectType("Restaurants", {
  isAbstract: true,
})
export class Restaurants {
  @Field(() => BigIntResolver, {
    nullable: false,
  })
  id!: bigint;

  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @Field(() => BigIntResolver, {
    nullable: true,
  })
  rating?: bigint | null;

  @Field(() => String, {
    nullable: true,
  })
  guide?: string | null;

  @Field(() => String, {
    nullable: true,
  })
  img?: string | null;

  @Field(() => String, {
    nullable: true,
  })
  link?: string | null;

  @Field(() => String, {
    nullable: true,
  })
  location?: string | null;

  @Field(() => Float, {
    nullable: true,
  })
  lat?: number | null;

  @Field(() => Float, {
    nullable: true,
  })
  long?: number | null;

  @Field(() => BigIntResolver, {
    nullable: true,
  })
  year?: bigint | null;

  @Field(() => String, {
    nullable: true,
  })
  cuisine?: string | null;
}
