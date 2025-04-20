import CircuitBreaker from 'opossum';
import { sendGpsData } from './geoClient';
import { VehicleData } from '../domain/Vehicle';

const options = {
  timeout: 3000,
  errorThresholdPercentage: 50,
  resetTimeout: 10000,
  rollingCountBuckets: 10,
  rollingCountTimeout: 10000
};

export const breaker = new CircuitBreaker<VehicleData[], any>(sendGpsData, options);

breaker.fallback(() => {
  console.warn('[CircuitBreaker] Servicio no disponible temporalmente.');
});
breaker.on('open', () => console.warn('[CircuitBreaker] Circuito abierto'));
breaker.on('close', () => console.info('[CircuitBreaker] Circuito cerrado'));
breaker.on('halfOpen', () => console.info('[CircuitBreaker] En modo prueba'));
