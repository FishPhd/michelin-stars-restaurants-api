import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("NullableFloatFieldUpdateOperationsInput", {
  isAbstract: true,
})
export class NullableFloatFieldUpdateOperationsInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  set?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  increment?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  decrement?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  multiply?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  divide?: number | undefined;
}
