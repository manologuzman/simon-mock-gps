
# Mock de GPS

El Mock de GPS Simular 5 vehículos con fallos aleatorios (15%) y Circuit Breaker.

Está construido con Node.

## Características

- Simular 5 vehículos enviando coordenadas cada 2 segundos con un 15% de fallos aleatorios. 
- Implementar un Circuit Breaker que desactive el Servicio de Ruteo tras 3 fallos consecutivos. 

## Requisitos

- Node.js (v16 o superior)
- npm

## Variables de entorno

Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

```
GEO_SERVICE_URL=http://localhost:3001/geo
```

## Download the repository

```bash
$
```

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# watch mode
$ npm run start:dev

```
