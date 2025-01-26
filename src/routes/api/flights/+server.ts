import { env } from '$env/dynamic/private';
import type { FlightData, FlightTrackingParams } from '$lib/utils/types';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
  const params: FlightTrackingParams = {
    flight_number: url.searchParams.get('flight_number') || undefined,
    departure_airport: url.searchParams.get('departure_airport') || undefined,
    departure_country: url.searchParams.get('departure_country') || undefined,
    arrival_airport: url.searchParams.get('arrival_airport') || undefined,
    arrival_country: url.searchParams.get('arrival_country') || undefined,
    departure_date: url.searchParams.get('departure_date') || undefined,
    arrival_date: url.searchParams.get('arrival_date') || undefined,
  };

  // Validate minimum required parameters
  const requiredParamsCount = Object.values(params).filter(Boolean).length;
  if (requiredParamsCount < 1) {
    return new Response(
      JSON.stringify({
        error: 'Provide at least 1 parameters for flight tracking',
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  try {
    // Construct dynamic query based on available parameters
    const queryParams = new URLSearchParams();
    queryParams.append('access_key', env.API_KEY);

    if (params.flight_number)
      queryParams.append('flight_iata', params.flight_number);
    if (params.departure_airport)
      queryParams.append('dep_iata', params.departure_airport);
    if (params.arrival_airport)
      queryParams.append('arr_iata', params.arrival_airport);
    if (params.arrival_date)
      queryParams.append('arr_scheduled_time_arr', params.arrival_date);
    if (params.departure_date)
      queryParams.append('arr_scheduled_time_dep', params.departure_date);

    const apiUrl = `http://api.aviationstack.com/v1/flights?${queryParams.toString()}`;
    // const apiUrl = `http://api.aviationstack.com/v1/flights?access_key=${env.API_KEY}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Flight data fetch failed');
    }

    const data = await response.json();

    if (data.data.length === 0) {
      return new Response(
        JSON.stringify({ message: 'No flights found matching criteria' }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Process and filter results based on additional parameters
    const filteredFlights = data.data.filter((flight: any) => {
      const matchesDepartureCountry =
        !params.departure_country ||
        flight.departure.country.toLowerCase() ===
          params.departure_country.toLowerCase();

      const matchesArrivalCountry =
        !params.arrival_country ||
        flight.arrival.country.toLowerCase() ===
          params.arrival_country.toLowerCase();

      return matchesDepartureCountry && matchesArrivalCountry;
    });

    const processedFlights: FlightData[] = filteredFlights.map(
      (flight: any) => ({
        flight_number: flight.flight.iata,
        departure: {
          airport: flight.departure.airport,
          country: flight.departure.country,
          scheduled: flight.departure.scheduled,
        },
        arrival: {
          airport: flight.arrival.airport,
          country: flight.arrival.country,
          scheduled: flight.arrival.scheduled,
        },
        airline: flight.airline.name,
        status: flight.flight_status,
      })
    );

    return new Response(JSON.stringify(data.data), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Flight tracking error:', error);
    return new Response(
      JSON.stringify({
        message: 'Error fetching flight data',
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

// Example Svelte component usage
