// MapChart.js
import React, { useEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import mapIcon from "../assets/Images/MapIcon.png";

const MapChart = ({ selectedLocation, allLocations, onLocationChange }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const root = am5.Root.new(chartRef.current);
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "none",
        projection: am5map.geoNaturalEarth1(),
        wheelable: true,
        zoomControl: am5map.ZoomControl.new(root, {}),
        maxZoomLevel: 64,
        minZoomLevel: 1,
      })
    );

    // Store chart instance for navigation
    chartInstanceRef.current = chart;

    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
      })
    );

    const pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

    const updatePins = (locations) => {
      pointSeries.data.setAll(
        locations.map((loc) => ({
          geometry: {
            type: "Point",
            coordinates: [loc.coordinates.longitude, loc.coordinates.latitude],
          },
          title: loc.title,
          content: loc.content,
          content1: loc.content1 || "",
        }))
      );
    };

    pointSeries.bullets.push((root, series, dataItem) => {
      const container = am5.Container.new(root, {
        centerX: am5.p50,
        centerY: am5.p50,
        interactive: true,
        layout: root.verticalLayout,
      });

      const image = am5.Picture.new(root, {
        width: 25,
        height: 30,
        centerX: am5.p50,
        centerY: am5.p50,
        src: mapIcon,
        interactive: true,
        cursorOverStyle: "pointer",
        tooltipText: `${dataItem.dataContext.content1}`,
        tooltipY: 0,
      });

      // Click to open Google Maps in new tab
      image.events.on("click", (ev) => {
        ev.originalEvent.stopPropagation();
        const address = dataItem.dataContext.content1;
        console.log("Map icon clicked, address:", address); // Debug log
        if (address && address.trim() !== "") {
          const encodedAddress = encodeURIComponent(address);
          const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
          console.log("Opening Google Maps URL:", googleMapsUrl); // Debug log
          window.open(googleMapsUrl, "_blank", "noopener,noreferrer");
        } else {
          console.log("No address found for this location");
        }
      });

      // Also add click event to container for better click detection
      container.events.on("click", (ev) => {
        ev.originalEvent.stopPropagation();
        const address = dataItem.dataContext.content1;
        console.log("Container clicked, address:", address); // Debug log
        if (address && address.trim() !== "") {
          const encodedAddress = encodeURIComponent(address);
          const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
          console.log("Opening Google Maps URL:", googleMapsUrl); // Debug log
          window.open(googleMapsUrl, "_blank", "noopener,noreferrer");
        }
      });

      container.children.push(image);

      return am5.Bullet.new(root, {
        sprite: container,
      });
    });

    // Load either selected location or all
    if (selectedLocation) {
      updatePins([selectedLocation]);
    } else {
      updatePins(allLocations);
    }

    return () => {
      root.dispose();
    };
  }, [selectedLocation, allLocations]);

  // Effect to handle navigation when selectedLocation changes
  useEffect(() => {
    if (selectedLocation && chartInstanceRef.current) {
      const chart = chartInstanceRef.current;

      // Animate to the selected location
      chart.animate({
        key: "rotationX",
        to: -selectedLocation.coordinates.longitude,
        duration: 1000,
        easing: am5.ease.out(am5.ease.cubic),
      });

      chart.animate({
        key: "rotationY",
        to: -selectedLocation.coordinates.latitude,
        duration: 1000,
        easing: am5.ease.out(am5.ease.cubic),
      });

      // Zoom in to the location
      chart.animate({
        key: "zoomLevel",
        to: 4,
        duration: 1000,
        easing: am5.ease.out(am5.ease.cubic),
      });
    } else if (!selectedLocation && chartInstanceRef.current) {
      // Reset to world view
      const chart = chartInstanceRef.current;
      chart.animate({
        key: "rotationX",
        to: 0,
        duration: 1000,
        easing: am5.ease.out(am5.ease.cubic),
      });

      chart.animate({
        key: "rotationY",
        to: 0,
        duration: 1000,
        easing: am5.ease.out(am5.ease.cubic),
      });

      chart.animate({
        key: "zoomLevel",
        to: 1,
        duration: 1000,
        easing: am5.ease.out(am5.ease.cubic),
      });
    }
  }, [selectedLocation]);

  return (
    <div style={{ position: "relative", width: "100%", height: "500px" }}>
      <div
        ref={chartRef}
        id="chartdiv"
        style={{ width: "100%", height: "100%" }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "0px",
          left: "0px",
          width: "100px",
          height: "100px",
          backgroundColor: "white",
          borderRadius: "6px",
          zIndex: 10,
        }}
      ></div>
    </div>
  );
};

export default MapChart;
