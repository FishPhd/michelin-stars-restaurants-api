import { DocumentNode } from "graphql";
import React from "react";
import { GoogleMap } from "../components/google-map";
import {
  FindManyRestaurantsDocument,
  useFindManyRestaurantsQuery,
} from "../graphql/generated/graphql";
import { client, ssrCache } from "../utils/withUrql";
import Head from "next/head";

export default function Home() {
  const [
    {
      data: { findManyRestaurants: restaurants },
    },
  ] = useFindManyRestaurantsQuery();
  return (
    <>
      <Head>
        <title>Michelin Maps</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GoogleMap restaurants={restaurants} />
    </>
  );
}

export async function getStaticProps(ctx) {
  await client.query(FindManyRestaurantsDocument as DocumentNode).toPromise();
  return { props: { urqlState: ssrCache.extractData() } };
}
