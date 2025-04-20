import axios from "axios";
import { config } from "../config/env";
import { VehicleData } from "../domain/Vehicle";

export async function sendGpsData(vehicle: VehicleData) {
  const response = await axios.post(config.geoServiceUrl, vehicle);
  return response.data;
}
