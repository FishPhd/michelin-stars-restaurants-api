import * as TypeGraphQL from "type-graphql";
import { NestedFloatNullableFilter } from "../inputs/NestedFloatNullableFilter";

@TypeGraphQL.InputType("FloatNullableFilter", {
  isAbstract: true,
})
export class FloatNullableFilter {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  equals?: number | undefined;

  @TypeGraphQL.Field((_type) => [TypeGraphQL.Float], {
    nullable: true,
  })
  in?: number[] | undefined;

  @TypeGraphQL.Field((_type) => [TypeGraphQL.Float], {
    nullable: true,
  })
  notIn?: number[] | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  lt?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  lte?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  gt?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  gte?: number | undefined;

  @TypeGraphQL.Field((_type) => NestedFloatNullableFilter, {
    nullable: true,
  })
  not?: NestedFloatNullableFilter | undefined;
}
