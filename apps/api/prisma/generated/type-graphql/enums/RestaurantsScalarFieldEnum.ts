import * as TypeGraphQL from "type-graphql";

export enum RestaurantsScalarFieldEnum {
  id = "id",
  name = "name",
  rating = "rating",
  guide = "guide",
  img = "img",
  link = "link",
  location = "location",
  lat = "lat",
  long = "long",
  year = "year",
  cuisine = "cuisine"
}
TypeGraphQL.registerEnumType(RestaurantsScalarFieldEnum, {
  name: "RestaurantsScalarFieldEnum",
  description: undefined,
});
