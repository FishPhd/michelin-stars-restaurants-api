"use client";

import React from "react";
import { GoogleMap } from "../components/google-map";
import { useLoading } from "../hooks/useLoading";

interface MapClientProps {
  initialRestaurants: any[]; // Replace 'any' with your restaurant type
}

export function MapClient({ initialRestaurants }: MapClientProps) {
  return <GoogleMap restaurants={initialRestaurants} />;
}
