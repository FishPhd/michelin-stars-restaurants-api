import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { Restaurants } from "../models/Restaurants";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../helpers";

@TypeGraphQL.Resolver((_of) => Restaurants)
export class FindManyRestaurantsResolver {
  @TypeGraphQL.Query((_returns) => [Restaurants], {
    nullable: false,
  })
  async findManyRestaurants(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo
  ): Promise<Restaurants[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).restaurants.findMany({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
