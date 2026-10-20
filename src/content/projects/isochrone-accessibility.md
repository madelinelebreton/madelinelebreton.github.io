---
title: Accessibility mapping for architects
summary: A Shiny app that maps travel-time areas on foot, by bike and by car, with a QGIS-ready export.
year: "2026"
place: Santiago de Compostela, Spain
organization: Fundación RIA
tileRatio: 1.6
mediaWide: true
order: 4
cover: ../../assets/projects/isochrone-accessibility/lead.gif
coverAlt: "Animation of the app's map: a pin on Noia, then walking isochrones in blue, cycling in green and driving in orange spreading out around it with pharmacies marked, and the layers switched off again."
coverAside:
  src: ../../assets/projects/isochrone-accessibility/presentation.jpg
  alt: A woman presenting beside a screen showing a map of travel-time areas around a city
  caption: Presenting the isochrone project.
tools: [R, Shiny, Leaflet, OpenRouteService, Overpass, QGIS]
links:
  - label: Project repository on GitHub
    href: https://github.com/madelinelebreton/isochrone-accessibility-app
tags: [data]
---
An interactive R Shiny tool that answers spatial accessibility questions for non-technical users. Click a point on the map (or search an address), pick travel modes and OpenStreetMap amenities, and the app draws travel-time isochrones, overlays the amenities that fall inside them, and exports everything as a QGIS-ready GeoPackage.

<div class="doc-embed video-embed video-inline">
<video controls muted loop playsinline preload="metadata" poster="/video/isochrones-demo-poster.jpg" aria-label="Screen recording of the app: entering isochrone times of 5, 10 and 15 minutes, choosing walking, cycling and driving, picking pharmacies, then generating a map of travel-time areas and named pharmacies with a layer control to toggle each mode" style="aspect-ratio:2.216">
<source src="/video/isochrones-demo.mp4" type="video/mp4" />
</video>
<p class="doc-open">Demo: setting isochrone times and travel modes, choosing pharmacies as the amenity, then generating the map and toggling each mode with the layer control.</p>
</div>

## Why I built it

I built it during my internship at Fundación RIA so that architects could run accessibility analyses for site and exhibition research without writing code or opening a GIS.

## Features

- **Two ways to set an origin:** click the map, or geocode an address with OpenStreetMap Nominatim.
- **Isochrones for walking, cycling and driving,** computed with the OpenRouteService API. Any combination of modes and up to 10 time thresholds (for example 5, 10, 15 minutes). Requests are checked against OpenRouteService's per-mode range limits.
- **Amenity overlay from OpenStreetMap:** 20 presets (schools, pharmacies, supermarkets, parks, bus stops and more) or any custom `key=value` OSM tag, such as `amenity=veterinary`.
- **Reachability attribute per amenity:** each amenity is tagged with the smallest time band that contains it, per mode (`walk_min`, `bike_min`, `drive_min`).
- **Readable map:** one colour per mode, ring opacity scaled by travel time, a layer control to toggle each mode and each amenity type, optional name labels, and a "named amenities only" filter to cut duplicates.
- **One-click export:** a single `.gpkg` with `isochrones`, `amenities` and `origin_point` layers, ready to open in QGIS.

![Three nested blue areas around a pin, labelled 10, 20 and 30, building up one ring at a time.](../../assets/projects/isochrone-accessibility/iso-rings.gif "even14: An isochrone: everywhere reachable from one point within 10, 20 and 30 minutes.")
![Maps of Santiago de Compostela and its surroundings showing the areas reachable in 10, 20 and 30 minutes on foot in blue, by bike in green and by car in orange.](../../assets/projects/isochrone-accessibility/iso-modes.gif "Walking, cycling and driving from Santiago de Compostela.")

<div class="three-col">

<div>

![Map of the walking areas around a point in Santiago de Compostela, with an ice cream label and the amenities inside the 5 and 10 minute areas marked.](../../assets/projects/isochrone-accessibility/iso-ice-cream.gif "Ice cream on foot.")

</div>

<div>

![Map of Galicia with the 45 minute driving area from Santiago de Compostela, then the 60 minute area, with the beaches inside them marked.](../../assets/projects/isochrone-accessibility/iso-beaches.gif "Beaches within an hour's drive of Santiago de Compostela.")

</div>

<div>

![Map of a stretch of coast with a pin, then tourist attractions marked, then the 20, 40 and 60 minute driving areas that reach them.](../../assets/projects/isochrone-accessibility/iso-tourist.gif "Tourist attractions by car from a coastal town.")

</div>

</div>

## How it works

The workflow is shown in the diagram below. The origin comes from a map click or a Nominatim search. OpenRouteService returns isochrone polygons for each mode, and the bounding box of those polygons is used to fetch amenities for each OSM tag from Overpass (through `osmdata` and `callr`). A spatial join then assigns each amenity to the smallest time band that contains it, and the result is drawn on a Leaflet map or exported as a GeoPackage.

![Flowchart of the app's workflow, from clicking the map or searching an address through to a Leaflet map and a GeoPackage export](../../assets/projects/isochrone-accessibility/pipeline.jpg "full: How the app works: click the map or search an address (Nominatim), generate isochrone polygons per travel mode (OpenRouteService), fetch amenities per OSM tag (Overpass via osmdata and callr), join each amenity to its smallest time band, then show a Leaflet map or export a GeoPackage for QGIS.")

The core logic is kept separate from the interface. A helpers file holds the functions for geocoding an address, parsing the time list, clamping times to each travel mode's limits, requesting isochrones, fetching amenities and assigning time bands. The Shiny interface (a bslib sidebar layout) handles the reactive state for origin, isochrones and amenities, map drawing, the layer control and export.

## Using it

1. Set an origin by clicking the map or searching an address.
2. Enter isochrone times in minutes, comma-separated (default 5, 10, 15).
3. Choose one or more travel modes.
4. Pick amenities from the presets, or type a custom OSM `key=value` tag.
5. Press Generate map, toggle layers as needed, then download the `.gpkg`.

The map opens on Santiago de Compostela, Galicia, but the app works anywhere OpenStreetMap and OpenRouteService have coverage. To run it yourself you need R 4.1 or later and a free OpenRouteService API key, which the app reads from an environment variable and never stores in the code. Setup steps are in the repository.

## Limitations

- It relies on free public services (OpenRouteService, Nominatim and Overpass), so it is subject to their rate limits and usage policies. It is meant for interactive, small-scale use rather than bulk analysis.
- Amenity completeness depends on OpenStreetMap coverage in the area.

Map data © OpenStreetMap contributors. Routing by OpenRouteService. Basemap © CARTO. Released under the MIT licence.
