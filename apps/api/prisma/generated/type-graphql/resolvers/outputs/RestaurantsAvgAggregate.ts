import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("RestaurantsAvgAggregate", {
  isAbstract: true,
})
export class RestaurantsAvgAggregate {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  id!: number | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  rating!: number | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  lat!: number | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  long!: number | null;
}
