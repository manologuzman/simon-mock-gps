export interface Coordinates {
  lat: number;
  lng: number;
}

export interface VehicleData {
  deviceId: string;
  origin: Coordinates;
  destination: Coordinates;
}
