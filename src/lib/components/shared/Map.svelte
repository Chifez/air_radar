<script lang="ts">
  import type { LatLngExpression, Map, Marker, Polyline } from 'leaflet';
  import { onMount } from 'svelte';
  import 'leaflet/dist/leaflet.css';
  import { Maximize } from 'lucide-svelte';

  let { flightData } = $props();

  let map: Map;
  let flightMarkers: Marker[] = [];
  let flightPaths: Polyline[] = [];
  let fullScreen = false;

  let mapContainer: HTMLDivElement; // Bind the map container to this variable

  // Function to toggle fullscreen
  const toggleFullscreen = (element: HTMLElement) => {
    if (!document.fullscreenElement) {
      // Enter fullscreen
      element
        .requestFullscreen()
        .then(() => {
          console.log('Entered fullscreen mode');
        })
        .catch((err) => {
          console.error('Error attempting to enable fullscreen:', err);
        });
    } else {
      // Exit fullscreen
      document
        .exitFullscreen()
        .then(() => {
          console.log('Exited fullscreen mode');
        })
        .catch((err) => {
          console.error('Error attempting to exit fullscreen:', err);
        });
    }
  };

  onMount(async () => {
    const L = await import('leaflet');

    map = L.map('map').setView([36.2856, -106.807], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    flightData.forEach(
      (flight: {
        departure: any;
        arrival: any;
        live: any;
        flight: { number: any };
      }) => {
        const departure = flight.departure;
        const arrival = flight.arrival;
        const live = flight.live;

        const rotationAngle = live.direction - 45;

        const planeIcon = L.divIcon({
          html: `<div style="color: black; transform: rotate(${rotationAngle}deg);">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
                </svg>
              </div>`,
          className: 'plane',
          iconSize: [24, 24],
          iconAnchor: [12, 12],
        });

        // Add arrival marker
        L.marker([arrival.latitude, arrival.longitude], {
          title: arrival.airport,
        })
          .addTo(map)
          .bindPopup(`Arrival: ${arrival.airport}`);

        // Add flight marker
        const flightMarker = L.marker([live.latitude, live.longitude], {
          title: `Flight ${flight.flight.number}`,
          icon: planeIcon,
        })
          .addTo(map)
          .bindPopup(
            `Flight ${flight.flight.number}<br>Altitude: ${live.altitude}m<br>Speed: ${live.speed_horizontal} km/h`
          );

        flightMarkers.push(flightMarker);

        // Add flight path
        const flightPath = L.polyline(
          [
            [live.latitude, live.longitude],
            [arrival.latitude, arrival.longitude],
          ],
          { color: 'blue', dashArray: '5, 10' }
        ).addTo(map);

        flightPaths.push(flightPath);
      }
    );

    // Fit the map to show all flights
    const bounds = flightData.flatMap(
      (flight: {
        departure: { latitude: any; longitude: any };
        arrival: { latitude: any; longitude: any };
      }) => [
        [flight.departure.latitude, flight.departure.longitude],
        [flight.arrival.latitude, flight.arrival.longitude],
      ]
    );
    map.fitBounds(bounds);
  });

  $effect(() => {
    if (map && flightMarkers.length > 0) {
      flightData.forEach(
        (
          flight: {
            live: { latitude: any; longitude: any };
            arrival: {
              latitude: number | LatLngExpression | LatLngExpression[];
              longitude: number | LatLngExpression | LatLngExpression[];
            };
          },
          index: string | number
        ) => {
          const { latitude, longitude } = flight.live;
          flightMarkers[index].setLatLng([latitude, longitude]);
          flightPaths[index].setLatLngs([
            [latitude, longitude],
            [flight.arrival.latitude, flight.arrival.longitude],
          ]);
        }
      );
    }
  });
</script>

<div id="map" class="relative" bind:this={mapContainer}>
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="absolute top-2 right-2 z-[99999]"
    onclick={() => toggleFullscreen(mapContainer)}
  >
    <Maximize />
  </div>
</div>

<style>
  #map {
    height: 500px;
    width: 100%;
    border-radius: 8px;
  }

  :global(.plane) {
    transform-origin: center;
  }
</style>
