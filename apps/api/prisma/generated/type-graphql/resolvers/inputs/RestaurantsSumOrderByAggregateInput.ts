import * as TypeGraphQL from "type-graphql";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RestaurantsSumOrderByAggregateInput", {
  isAbstract: true,
})
export class RestaurantsSumOrderByAggregateInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  rating?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  lat?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  long?: "asc" | "desc" | undefined;
}
