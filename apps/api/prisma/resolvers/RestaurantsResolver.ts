import { Ctx, Query, Resolver } from "type-graphql";
import { Restaurants } from "../models/Restaurants";
import { getPrismaFromContext } from "../helpers";
import { Context } from "../types";

@Resolver(() => Restaurants)
export class RestaurantsResolver {
  @Query(() => [Restaurants], {
    nullable: false,
  })
  async Restaurants(@Ctx() ctx: Context): Promise<Restaurants[]> {
    return getPrismaFromContext(ctx).restaurants.findMany();
  }
}
