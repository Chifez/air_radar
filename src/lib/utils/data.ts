function generateMockFlight() {
  return {
    flight_date: '2019-12-12',
    flight_status: 'active',
    departure: {
      airport: 'San Francisco International',
      timezone: 'America/Los_Angeles',
      iata: 'SFO',
      icao: 'KSFO',
      terminal: '2',
      gate: 'D11',
      delay: 13,
      scheduled: '2019-12-12T04:20:00+00:00',
      estimated: '2019-12-12T04:20:00+00:00',
      actual: '2019-12-12T04:20:13+00:00',
      estimated_runway: '2019-12-12T04:20:13+00:00',
      actual_runway: '2019-12-12T04:20:13+00:00',
    },
    arrival: {
      airport: 'Dallas/Fort Worth International',
      timezone: 'America/Chicago',
      iata: 'DFW',
      icao: 'KDFW',
      terminal: 'A',
      gate: 'A22',
      baggage: 'A17',
      delay: 0,
      scheduled: '2019-12-12T04:20:00+00:00',
      estimated: '2019-12-12T04:20:00+00:00',
      actual: null,
      estimated_runway: null,
      actual_runway: null,
    },
    airline: {
      name: 'American Airlines',
      iata: 'AA',
      icao: 'AAL',
    },
    flight: {
      number: '1004',
      iata: 'AA1004',
      icao: 'AAL1004',
      codeshared: null,
    },
    aircraft: {
      registration: 'N160AN',
      iata: 'A321',
      icao: 'A321',
      icao24: 'A0F1BB',
    },
    live: {
      updated: '2019-12-12T10:00:00+00:00',
      latitude: 36.2856,
      longitude: -106.807,
      altitude: 8846.82,
      direction: 114.34,
      speed_horizontal: 894.348,
      speed_vertical: 1.188,
      is_ground: false,
    },
  };
}

export const mockFlights = {
  pagination: {
    limit: 100,
    offset: 0,
    count: 100, // Adjust this to the number of flights you generate
    total: 1669022,
  },
  data: Array.from({ length: 100 }, generateMockFlight), // Generate 100 mock flights
};

export const airportList = {
  pagination: {
    limit: 100,
    offset: 0,
    count: 20,
    total: 6471,
  },
  data: [
    {
      airport_name: 'Anaa',
      iata_code: 'AAA',
      country_name: 'French Polynesia',
    },
    {
      airport_name: 'John F Kennedy International Airport',
      iata_code: 'JFK',
      country_name: 'United States',
    },
    {
      airport_name: 'Heathrow Airport',
      iata_code: 'LHR',
      country_name: 'United Kingdom',
    },
    {
      airport_name: 'Charles de Gaulle Airport',
      iata_code: 'CDG',
      country_name: 'France',
    },
    {
      airport_name: 'Tokyo Haneda Airport',
      iata_code: 'HND',
      country_name: 'Japan',
    },
    {
      airport_name: 'Sydney Kingsford Smith Airport',
      iata_code: 'SYD',
      country_name: 'Australia',
    },
    {
      airport_name: 'Dubai International Airport',
      iata_code: 'DXB',
      country_name: 'United Arab Emirates',
    },
    {
      airport_name: 'Frankfurt Airport',
      iata_code: 'FRA',
      country_name: 'Germany',
    },
    {
      airport_name: 'Chhatrapati Shivaji Maharaj International Airport',
      iata_code: 'BOM',
      country_name: 'India',
    },
    {
      airport_name: 'Toronto Pearson International Airport',
      iata_code: 'YYZ',
      country_name: 'Canada',
    },
    {
      airport_name: 'São Paulo-Guarulhos International Airport',
      iata_code: 'GRU',
      country_name: 'Brazil',
    },
    {
      airport_name: 'Beijing Capital International Airport',
      iata_code: 'PEK',
      country_name: 'China',
    },
    {
      airport_name: 'Amsterdam Airport Schiphol',
      iata_code: 'AMS',
      country_name: 'Netherlands',
    },
    {
      airport_name: 'Hong Kong International Airport',
      iata_code: 'HKG',
      country_name: 'Hong Kong',
    },
    {
      airport_name: 'Singapore Changi Airport',
      iata_code: 'SIN',
      country_name: 'Singapore',
    },
    {
      airport_name: 'Incheon International Airport',
      iata_code: 'ICN',
      country_name: 'South Korea',
    },
    {
      airport_name: 'Adolfo Suárez Madrid–Barajas Airport',
      iata_code: 'MAD',
      country_name: 'Spain',
    },
    {
      airport_name: 'Leonardo da Vinci–Fiumicino Airport',
      iata_code: 'FCO',
      country_name: 'Italy',
    },
    {
      airport_name: 'Istanbul Airport',
      iata_code: 'IST',
      country_name: 'Turkey',
    },
    {
      airport_name: 'Cairo International Airport',
      iata_code: 'CAI',
      country_name: 'Egypt',
    },
  ],
};
