/* global google */
import MarkerClusterer from "@googlemaps/markerclustererplus";
import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { Restaurants } from "../graphql/generated/graphql";
import infoWindowHTML from "../utils/html/infoWindowHTML";
const styles = require("../styles/google-maps.json");

interface MapProps {
  restaurants: Restaurants[];
}

export class GoogleMap extends React.Component<MapProps> {
  map = undefined;
  clusterer = undefined;
  currentMarkers = [];

  defaultCenter = {
    lat: 34.0522,
    lng: -118.2437,
  };

  componentDidMount() {
    document.body.classList.add("is-map");
    this.handleAttachGoogleMap();
  }

  componentWillUnmount() {
    document.body.classList.remove("is-map");
  }

  handleAttachGoogleMap() {
    const google = window.google;
    this.map = new google.maps.Map(document.getElementById("google-map"), {
      center: this.defaultCenter,
      styles: styles,
      zoom: 10,
      mapTypeControl: false,
    });

    setTimeout(() => {
      this.handleDrawMarkers();
    }, 2000);
  }

  handleDrawMarkers() {
    const google = window.google;
    const infoWindow = new google.maps.InfoWindow({
      content: "",
      disableAutoPan: false,
    });

    const markers = this.props.restaurants?.map((r) => {
      const marker = new google.maps.Marker({
        position: { lat: r.lat, lng: r.long },
      });

      marker.addListener("click", () => {
        let infoWindowContent = reactElementToJSXString(
          infoWindowHTML(r)
        ).replaceAll("className", "class");

        infoWindow.setContent(infoWindowContent);
        infoWindow.open(this.map, marker);
      });

      return marker;
    });
    this.clusterer = new MarkerClusterer(this.map, [], {
      gridSize: 30,
      minimumClusterSize: 4,
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });

    this.clusterer.addMarkers(
      (this.currentMarkers = markers.filter(
        (marker) =>
          marker.getVisible() &&
          this.map.getBounds().contains(marker.getPosition())
      ))
    );

    google.maps.event.addListener(this.map, "tilesloaded", () => {
      this.clusterer.clearMarkers();
      this.clusterer.addMarkers(
        (this.currentMarkers = markers.filter(
          (marker) =>
            marker.getVisible() &&
            this.map.getBounds().contains(marker.getPosition())
        ))
      );
    });
  }

  render() {
    return <div id="google-map" />;
  }
}
