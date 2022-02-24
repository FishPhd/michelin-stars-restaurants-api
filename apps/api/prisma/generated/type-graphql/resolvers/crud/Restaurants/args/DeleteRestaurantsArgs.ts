import * as TypeGraphQL from "type-graphql";
import { RestaurantsWhereUniqueInput } from "../../../inputs/RestaurantsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteRestaurantsArgs {
  @TypeGraphQL.Field((_type) => RestaurantsWhereUniqueInput, {
    nullable: false,
  })
  where!: RestaurantsWhereUniqueInput;
}
