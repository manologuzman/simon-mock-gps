import { VehicleData } from "../domain/Vehicle";
import { breaker } from "../infrastructure/circuitBreaker";

function getRandomCoordinate(): number {
  return +(4 + Math.random()).toFixed(6);
}

function generateVehicle(deviceId: string): VehicleData {
  return {
    deviceId,
    origin: {
      lat: getRandomCoordinate(),
      lng: -1 * getRandomCoordinate(),
    },
    destination: {
      lat: getRandomCoordinate(),
      lng: -1 * getRandomCoordinate(),
    },
  };
}

export async function simulateVehicle(vehicleId: string) {
  const vehicle = generateVehicle(vehicleId);

  // 15% chance of error
  if (Math.random() < 0.15) {
    console.warn(`[${vehicleId}] Simulando error`);
  }

  try {
    const result = await breaker.fire(vehicle);
    console.log(`[${vehicleId}] GPS enviado →`, result);
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : "Error desconocido";
    console.error(`[${vehicleId}] Error al enviar GPS:`, errorMessage);
  }
}
