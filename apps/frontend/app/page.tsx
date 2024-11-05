import { Suspense } from "react";
import { MapClient } from "../components/map-client";
import { sql } from "@vercel/postgres";

const getRestaurants = async () => {
  "use cache";
  const { rows } = await sql`SELECT * from restaurants`;
  return rows;
};

export default async function Home() {
  const restaurants = await getRestaurants();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MapClient initialRestaurants={restaurants} />
    </Suspense>
  );
}
