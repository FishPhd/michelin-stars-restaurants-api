import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";

@TypeGraphQL.InputType("NullableBigIntFieldUpdateOperationsInput", {
  isAbstract: true,
})
export class NullableBigIntFieldUpdateOperationsInput {
  @TypeGraphQL.Field((_type) => GraphQLScalars.BigIntResolver, {
    nullable: true,
  })
  set?: bigint | undefined;

  @TypeGraphQL.Field((_type) => GraphQLScalars.BigIntResolver, {
    nullable: true,
  })
  increment?: bigint | undefined;

  @TypeGraphQL.Field((_type) => GraphQLScalars.BigIntResolver, {
    nullable: true,
  })
  decrement?: bigint | undefined;

  @TypeGraphQL.Field((_type) => GraphQLScalars.BigIntResolver, {
    nullable: true,
  })
  multiply?: bigint | undefined;

  @TypeGraphQL.Field((_type) => GraphQLScalars.BigIntResolver, {
    nullable: true,
  })
  divide?: bigint | undefined;
}
