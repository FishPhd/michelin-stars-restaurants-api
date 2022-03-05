import { DocumentNode } from "graphql";
import React from "react";
import { GoogleMap } from "../components/google-map";
import {
  RestaurantsDocument,
  useRestaurantsQuery,
} from "../graphql/generated/graphql";
import { client, ssrCache } from "../utils/withUrql";
import Head from "next/head";
import isFetching from "../utils/isFetching";
import { Router } from "next/router";

export default function Home() {
  const [loading, setLoading] = React.useState(false);
  const [{ data }] = useRestaurantsQuery();

  React.useEffect(() => {
    isFetching(setLoading);
  }, [setLoading]);

  return (
    <>
      <Head>
        <title>Michelin Maps</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {loading ? (
        <div className="grid place-items-center h-screen">Loading...</div>
      ) : (
        <GoogleMap restaurants={data?.restaurants} />
      )}
    </>
  );
}

export async function getServerSideProps(ctx) {
  await client.query(RestaurantsDocument as DocumentNode).toPromise();
  return { props: { urqlState: ssrCache.extractData() } };
}
