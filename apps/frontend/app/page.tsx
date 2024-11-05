import { Suspense } from "react";
import { MapClient } from "../components/map-client";
import { sql, createClient } from "@vercel/postgres";

const getRestaurants = async () => {
  "use cache";
  const client = createClient();
  await client.connect();
  try {
    const { rows } = await client.query('SELECT * from restaurants');
    return rows;
  } finally {
    await client.end();
  }
};

export default async function Home() {
  const restaurants = await getRestaurants();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MapClient initialRestaurants={restaurants} />
    </Suspense>
  );
}
