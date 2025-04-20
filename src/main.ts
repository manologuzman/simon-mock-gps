import { simulateVehicle } from "./services/gpsSender.service";

const VEHICLES = ["JJW-001", "JJW-002", "JJW-003", "JJW-004", "JJW-005"];

function runMock() {
  setInterval(() => {
    VEHICLES.forEach((v) => simulateVehicle(v));
  }, 2000);
}

runMock();
