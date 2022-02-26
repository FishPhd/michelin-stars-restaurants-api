import * as TypeGraphQL from "type-graphql";
import { RestaurantsCreateManyInput } from "../../../inputs/RestaurantsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyRestaurantsArgs {
  @TypeGraphQL.Field((_type) => [RestaurantsCreateManyInput], {
    nullable: false,
  })
  data!: RestaurantsCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
