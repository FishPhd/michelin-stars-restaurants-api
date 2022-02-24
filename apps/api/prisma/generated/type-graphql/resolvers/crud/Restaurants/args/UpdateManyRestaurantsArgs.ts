import * as TypeGraphQL from "type-graphql";
import { RestaurantsUpdateManyMutationInput } from "../../../inputs/RestaurantsUpdateManyMutationInput";
import { RestaurantsWhereInput } from "../../../inputs/RestaurantsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRestaurantsArgs {
  @TypeGraphQL.Field((_type) => RestaurantsUpdateManyMutationInput, {
    nullable: false,
  })
  data!: RestaurantsUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => RestaurantsWhereInput, {
    nullable: true,
  })
  where?: RestaurantsWhereInput | undefined;
}
