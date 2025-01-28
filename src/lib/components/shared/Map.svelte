<script lang="ts">
  import type { Map, Marker, Polyline, L } from 'leaflet';
  import { onMount } from 'svelte';
  import 'leaflet/dist/leaflet.css';

  let { flightData } = $props();

  let map: Map;
  let flightMarker: Marker;
  let flightPath: Polyline;

  onMount(async () => {
    map = L.map('map').setView([36.2856, -106.807], 5);

    L.titleLayer('https://{s}.title.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    const departure = flightData.departure;
    const arrival = flightData.arrival;

    L.marker([departure.latitude, departure.longitude], {
      title: departure.airport,
    })
      .addTo(map)
      .bindPopup(`Arrival: ${arrival.airport}`);

    const live = flightData.live;
    flightMarker = L.marker([live.latitude, live.longitude], {
      title: `Flight ${flightData.flight.number}`,
    })
      .addTo(map)
      .bindPopup(
        `Flight ${flightData.flight.number}<br>Altitude : ${live.altitude}m<br>Speed: ${live.speed_horizontal} km/h`
      );

    flightPath = L.polyline(
      [
        [departure.latitude, departure.longitude],
        [arrival.latitude, arrival.longitude],
      ],
      { color: 'blue' }
    ).addTo(map);

    map.fitBounds([
      [departure.latitude, departure.longitude],
      [arrival.latitude, arrival.longitude],
    ]);
  });

  $effect(() => {
    if (map && flightMarker && flightData.live) {
      const { latitude, longitude } = flightData.live;
      flightMarker.setLatLng([latitude, longitude]);
    }
  });
</script>

<div id="map"></div>

<style>
  #map {
    height: 500px;
    width: 100%;
    border-radius: 8px;
  }
</style>
