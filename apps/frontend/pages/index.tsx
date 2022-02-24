import { DocumentNode } from "graphql";
import React from "react";
import { GoogleMap } from "../components/google-map";
import {
  FindManyRestaurantsDocument,
  useFindManyRestaurantsQuery,
} from "../graphql/generated/graphql";
import { client, ssrCache } from "../utils/withUrql";

export default function Home() {
  const { data: { findManyRestaurants: restaurants } = {} } =
    useFindManyRestaurantsQuery()[0];
  return <GoogleMap restaurants={restaurants}></GoogleMap>; //restaurants={data}
}

export async function getServerSideProps(ctx) {
  await client.query(FindManyRestaurantsDocument as DocumentNode).toPromise();
  return { props: { urqlState: ssrCache.extractData() } };
}
