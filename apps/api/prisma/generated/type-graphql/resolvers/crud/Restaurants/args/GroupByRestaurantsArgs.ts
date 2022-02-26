import * as TypeGraphQL from "type-graphql";
import { RestaurantsOrderByWithAggregationInput } from "../../../inputs/RestaurantsOrderByWithAggregationInput";
import { RestaurantsScalarWhereWithAggregatesInput } from "../../../inputs/RestaurantsScalarWhereWithAggregatesInput";
import { RestaurantsWhereInput } from "../../../inputs/RestaurantsWhereInput";
import { RestaurantsScalarFieldEnum } from "../../../../enums/RestaurantsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByRestaurantsArgs {
  @TypeGraphQL.Field((_type) => RestaurantsWhereInput, {
    nullable: true,
  })
  where?: RestaurantsWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [RestaurantsOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: RestaurantsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RestaurantsScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    | "id"
    | "name"
    | "rating"
    | "guide"
    | "img"
    | "link"
    | "location"
    | "type"
    | "lat"
    | "long"
    | "year"
  >;

  @TypeGraphQL.Field((_type) => RestaurantsScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: RestaurantsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
