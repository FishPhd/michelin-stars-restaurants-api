"use client";

import React from "react";
import { GoogleMap } from "../components/google-map";
import { useLoading } from "../hooks/useLoading";
import Script from "next/script";

interface MapClientProps {
  initialRestaurants: any[]; // Replace 'any' with your restaurant type
}

export function MapClient({ initialRestaurants }: MapClientProps) {
  const [loading, setLoading] = React.useState(false);

  useLoading(setLoading);

  if (loading) {
    return <div className="grid place-items-center h-screen">Loading...</div>;
  }

  return <GoogleMap restaurants={initialRestaurants} />;
}
