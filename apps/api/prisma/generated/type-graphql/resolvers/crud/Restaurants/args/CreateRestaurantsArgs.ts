import * as TypeGraphQL from "type-graphql";
import { RestaurantsCreateInput } from "../../../inputs/RestaurantsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateRestaurantsArgs {
  @TypeGraphQL.Field((_type) => RestaurantsCreateInput, {
    nullable: false,
  })
  data!: RestaurantsCreateInput;
}
