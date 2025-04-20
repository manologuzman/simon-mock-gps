import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  geoServiceUrl: process.env.GEO_SERVICE_URL || 'http://localhost:3001/geo',
};