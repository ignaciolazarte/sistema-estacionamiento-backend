# Sistema de Estacionamiento Inteligente — Backend

API backend para el sistema de gestión de un estacionamiento, desarrollada con [NestJS](https://nestjs.com/) y TypeScript. Proyecto de la materia Programación IV de la UTN FRT.

> **Estado del proyecto:** está en desarrollo. Actualmente está disponible la ruta raíz `GET /`. Los módulos de dominio contienen controladores y servicios iniciales, pero todavía no están conectados a la aplicación ni implementan persistencia.

## Contenido

- [Alcance](#alcance)
- [Tecnologías](#tecnologías)
- [Requisitos](#requisitos)
- [Instalación y ejecución](#instalación-y-ejecución)
- [Variables de entorno](#variables-de-entorno)
- [API disponible](#api-disponible)
- [Módulos en desarrollo](#módulos-en-desarrollo)
- [Comandos](#comandos)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Pruebas](#pruebas)

## Alcance

El sistema busca centralizar la administración de vehículos, accesos, tarifas, abonados, sectores, usuarios y autenticación. Estas funcionalidades representan el alcance previsto; todavía no todas están implementadas.

## Tecnologías

- **Entorno:** Node.js y npm.
- **Framework:** NestJS 12.
- **Lenguaje:** TypeScript.
- **Pruebas:** Vitest y Supertest.
- **Observabilidad:** integración inicial con `@nestjs/observe`.

La conexión a una base de datos aún no está implementada.

## Requisitos

- Node.js compatible con NestJS 12.
- npm.
- Git para clonar el repositorio.

## Instalación y ejecución

Cloná el repositorio e instalá las dependencias:

```bash
git clone https://github.com/ignaciolazarte/sistema-estacionamiento-backend.git
cd sistema-estacionamiento-backend
npm install
```

Creá un archivo `.env` en la raíz del proyecto. Para iniciar localmente alcanza con:

```dotenv
PORT=3000
```

Iniciá el servidor en modo desarrollo:

```bash
npm run start:dev
```

La aplicación queda disponible en `http://localhost:3000` (o en el puerto definido por `PORT`). El modo desarrollo reinicia el servidor cuando detecta cambios.

## Variables de entorno

| Variable | Uso | Valor predeterminado |
| --- | --- | --- |
| `PORT` | Puerto HTTP de la aplicación. | `3000` |
| `OBSERVE_APP_KEY` | Clave de NestJS Observe. | Valor de ejemplo definido por la aplicación. |
| `OBSERVE_APP_SECRET` | Secreto de NestJS Observe. | Valor de ejemplo definido por la aplicación. |

Las credenciales de Observe pueden configurarse con `npx @nestjs/observe link`. No guardes credenciales reales en el repositorio. Aunque puede existir una variable `DATABASE_URL` en el entorno local, actualmente la aplicación no la consume ni abre una conexión a una base de datos.

## API disponible

### Verificar que el servidor responde

```http
GET /
```

Respuesta `200 OK`:

```text
Hello World!
```

Ejemplo:

```bash
curl http://localhost:3000/
```

Los controladores de vehículos, accesos, tarifas, abonados, sectores, usuarios y autenticación todavía no están registrados en `AppModule`; sus rutas no forman parte de la API disponible.

## Módulos en desarrollo

| Módulo | Propósito |
| --- | --- |
| `Vehiculos` | Gestión de vehículos. |
| `Accesos` | Registro de accesos. |
| `Tarifas` | Administración de tarifas. |
| `Abonados` | Gestión de abonados. |
| `Sectores` | Administración de sectores. |
| `users` | Gestión de usuarios. |
| `auth` | Funcionalidades de autenticación. |

Los controladores generados siguen una estructura CRUD (`POST /`, `GET /`, `GET /:id`, `PATCH /:id` y `DELETE /:id` bajo la ruta de cada módulo), pero sus servicios aún son de ejemplo y esas rutas no están activas.

## Comandos

| Comando | Descripción |
| --- | --- |
| `npm run start` | Inicia la aplicación. |
| `npm run start:dev` | Inicia en modo desarrollo con recarga automática. |
| `npm run start:debug` | Inicia en modo desarrollo con depuración. |
| `npm run start:prod` | Ejecuta la versión compilada desde `dist/`. |
| `npm run build` | Compila el proyecto. |
| `npm run lint` | Analiza el código fuente y las pruebas con Oxlint. |
| `npm run format` | Formatea los archivos TypeScript de `src/` y `test/`. |
| `npm test` | Ejecuta las pruebas unitarias. |
| `npm run test:watch` | Ejecuta las pruebas en modo watch. |
| `npm run test:cov` | Ejecuta las pruebas y genera cobertura. |
| `npm run test:e2e` | Ejecuta las pruebas end-to-end. |

Para compilar y ejecutar en modo producción:

```bash
npm run build
npm run start:prod
```

## Estructura del proyecto

```text
src/
├── main.ts
└── modules/
    ├── App/          # Módulo principal y ruta de bienvenida
    ├── Abonados/
    ├── Accesos/
    ├── Sectores/
    ├── Tarifas/
    ├── Vehiculos/
    ├── auth/
    └── users/
test/                 # Pruebas end-to-end
```

Los módulos de dominio organizan controladores, servicios, DTOs y entidades en subdirectorios. Las pruebas unitarias están junto a las clases que prueban, con extensión `.spec.ts`.

## Pruebas

Ejecutá las pruebas unitarias y end-to-end con:

```bash
npm test
npm run test:e2e
```
