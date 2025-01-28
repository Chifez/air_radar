import type { FlightTrackingParams } from './types';

export const filterFlights = (data: any, params: FlightTrackingParams) => {
  return {
    ...data,
    data: data.data.filter((items: any) => {
      const matchesFlightNumber: any =
        !params.flight_number ||
        items.flight.iata.toLowerCase() === params.flight_number.toLowerCase();

      const matchesDepartureAirport: any =
        !params.departure_airport ||
        items.departure.iata.toLowerCase() ===
          params.departure_airport.toLowerCase();

      const matchesArrivalAirport: any =
        !params.arrival_airport ||
        items.arrival.iata.toLowerCase() ===
          params.arrival_airport.toLowerCase();

      const matchesDepartureCountry: any =
        !params.departure_country ||
        items.departure.country.toLowerCase() ===
          params.departure_country.toLowerCase();

      const matchesArrivalCountry: any =
        !params.arrival_country ||
        items.arrival.country.toLowerCase() ===
          params.arrival_country.toLowerCase();

      const matchesDepartureDate: any =
        !params.departure_date ||
        items.departure.scheduled.startsWith(params.departure_date);

      const matchesArrivalDate: any =
        !params.arrival_date ||
        items.arrival.scheduled.startsWith(params.arrival_date);

      return (
        matchesFlightNumber &&
        matchesDepartureAirport &&
        matchesArrivalAirport &&
        matchesDepartureCountry &&
        matchesArrivalCountry &&
        matchesDepartureDate &&
        matchesArrivalDate
      );
    }),
  };
};
