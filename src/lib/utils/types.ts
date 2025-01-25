export const TAB = {
  BOOKINGS: 'bookings',
  TRACKER: 'tracker',
};

export interface FlightTrackingParams {
  flight_number?: string;
  departure_airport?: string;
  departure_country?: string;
  arrival_airport?: string;
  arrival_country?: string;
  departure_date?: string;
  arrival_date?: string;
}

export interface FlightData {
  flight_number: string;
  departure: {
    airport: string;
    country: string;
    scheduled: string;
  };
  arrival: {
    airport: string;
    country: string;
    scheduled: string;
  };
  airline: string;
  status: string;
}
