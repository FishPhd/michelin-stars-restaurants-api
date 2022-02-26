import { DocumentNode } from "graphql";
import React from "react";
import { GoogleMap } from "../components/google-map";
import {
  RestaurantsDocument,
  useRestaurantsQuery,
} from "../graphql/generated/graphql";
import { client, ssrCache } from "../utils/withUrql";
import Head from "next/head";

export default function Home() {
  const [{ data: { restaurants } = { restaurants: [] } }] =
    useRestaurantsQuery() || [];

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
  await client.query(RestaurantsDocument as DocumentNode).toPromise();
  return { props: { urqlState: ssrCache.extractData() } };
}
