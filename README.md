# Sistema de Estacionamiento Inteligente - Backend

Backend desarrollado con **NestJS** para la materia de Programacion IV de la **UTN FRT** . Este servicio provee una API REST modular para la gestión integral de un estacionamiento (vehículos, tarifas, accesos, abonados, sectores y usuarios).

---

## Tecnologías Utilizadas
* **Framework:** [NestJS] (Node.js framework progresivo en TypeScript).
* **Base de Datos:** Relacional (MySQL / PostgreSQL).
* **Control de Versiones:** Git & GitHub (bajo flujos de trabajo colaborativo).
* **Pruebas de API:** Postman.

---

##  Arquitectura del Proyecto (Estructura Modular)
El proyecto sigue una arquitectura modular 

```text
src/
├── main.ts
└── modules/
    ├── app/
    ├── vehiculos/
    ├── tarifas/
    ├── accesos/
    ├── abonados/
    ├── sectores/
    ├── usuarios/
    └── auth/
```
---

## Instalación y Configuración Local

Sigue estos pasos para clonar y poner en marcha el proyecto en tu entorno local:

Clonar el repositorio:

Bash
git clone [https://github.com/ignaciolazarte/sistema-estacionamiento-backend.git](https://github.com/ignaciolazarte/sistema-estacionamiento-backend.git)

Instalar las dependencias:

Bash
npm install
Configurar las variables de entorno:

Ejecutar la aplicación en modo desarrollo:

Bash
npm run start:dev

# Integrantes del Equipo 

 -Lazarte Ignacio
 -Lucia Cordoba
