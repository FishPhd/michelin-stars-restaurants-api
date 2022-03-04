import gql from "graphql-tag";
import * as Urql from "urql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: any;
};

export type Query = {
  __typename?: "Query";
  restaurants: Array<Restaurants>;
};

export type Restaurants = {
  __typename?: "Restaurants";
  cuisine?: Maybe<Scalars["String"]>;
  guide?: Maybe<Scalars["String"]>;
  id: Scalars["BigInt"];
  img?: Maybe<Scalars["String"]>;
  lat?: Maybe<Scalars["Float"]>;
  link?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  long?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
  rating?: Maybe<Scalars["BigInt"]>;
  year?: Maybe<Scalars["BigInt"]>;
};

export type RestaurantFragment = {
  __typename?: "Restaurants";
  id: any;
  name?: string | null;
  rating?: any | null;
  guide?: string | null;
  img?: string | null;
  link?: string | null;
  location?: string | null;
  cuisine?: string | null;
  lat?: number | null;
  long?: number | null;
  year?: any | null;
};

export type RestaurantsQueryVariables = Exact<{ [key: string]: never }>;

export type RestaurantsQuery = {
  __typename?: "Query";
  restaurants: Array<{
    __typename?: "Restaurants";
    id: any;
    name?: string | null;
    rating?: any | null;
    guide?: string | null;
    img?: string | null;
    link?: string | null;
    location?: string | null;
    cuisine?: string | null;
    lat?: number | null;
    long?: number | null;
    year?: any | null;
  }>;
};

export const RestaurantFragmentDoc = gql`
  fragment Restaurant on Restaurants {
    id
    name
    rating
    guide
    img
    link
    location
    cuisine
    lat
    long
    year
  }
`;
export const RestaurantsDocument = gql`
  query Restaurants {
    restaurants {
      ...Restaurant
    }
  }
  ${RestaurantFragmentDoc}
`;

export function useRestaurantsQuery(
  options?: Omit<Urql.UseQueryArgs<RestaurantsQueryVariables>, "query">
) {
  return Urql.useQuery<RestaurantsQuery>({
    query: RestaurantsDocument,
    ...options,
  });
}
