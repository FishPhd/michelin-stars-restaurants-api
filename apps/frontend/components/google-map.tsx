import MarkerClusterer from "@google/markerclustererplus";
import React from "react";
import { Restaurants } from "../graphql/generated/graphql";
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

    const markers = this.props.restaurants.map((r) => {
      const label = r.name;
      const marker = new google.maps.Marker({
        position: { lat: r.lat, lng: r.long },
      });
      marker.addListener("click", () => {
        infoWindow.setContent(
          "<div class='infowindow-container'>" +
            "<img class='pt-2' src='" +
            r.img +
            "?width=200&height=200'></img><div class='inner'><h4 class='text-xl pt-2 font-bold'>" +
            label +
            "</h4><p class='text-xl	text-red-800'>" +
            "&#x273D".repeat(r.rating) +
            "</p><p>Cuisine: " +
            r.type +
            "</p></div></div>"
        );
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
