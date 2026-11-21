-- CreateTable
CREATE TABLE "abonados" (
    "id_abonado" SERIAL NOT NULL,
    "dni" VARCHAR(15) NOT NULL,
    "nombre" VARCHAR(80) NOT NULL,
    "apellido" VARCHAR(80) NOT NULL,
    "telefono" VARCHAR(30),
    "email" VARCHAR(120),
    "fecha_alta" DATE NOT NULL DEFAULT CURRENT_DATE,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "abonados_pkey" PRIMARY KEY ("id_abonado")
);

-- CreateTable
CREATE TABLE "accesos" (
    "id_acceso" SERIAL NOT NULL,
    "id_vehiculo" INTEGER NOT NULL,
    "id_sector" INTEGER NOT NULL,
    "id_user_operador" INTEGER NOT NULL,
    "fecha_hora_entrada" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fecha_hora_salida" TIMESTAMP(6),
    "monto_cobrado" DECIMAL(10,2),
    "estado" VARCHAR(20) NOT NULL,

    CONSTRAINT "accesos_pkey" PRIMARY KEY ("id_acceso")
);

-- CreateTable
CREATE TABLE "sectores" (
    "id_sector" SERIAL NOT NULL,
    "nombre_sector" VARCHAR(50) NOT NULL,
    "piso" INTEGER NOT NULL,
    "capacidad_maxima" INTEGER NOT NULL,
    "id_tarifa_permitida" INTEGER NOT NULL,

    CONSTRAINT "sectores_pkey" PRIMARY KEY ("id_sector")
);

-- CreateTable
CREATE TABLE "tarifas" (
    "id_tarifa" SERIAL NOT NULL,
    "tipo_vehiculo" VARCHAR(50) NOT NULL,
    "precio_hora" DECIMAL(10,2) NOT NULL,
    "precio_estadia" DECIMAL(10,2) NOT NULL,
    "precio_abono_mensual" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "tarifas_pkey" PRIMARY KEY ("id_tarifa")
);

-- CreateTable
CREATE TABLE "users" (
    "id_user" SERIAL NOT NULL,
    "nombre" VARCHAR(80) NOT NULL,
    "apellido" VARCHAR(80) NOT NULL,
    "email" VARCHAR(120) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "rol" VARCHAR(30) NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "vehiculos" (
    "id_vehiculo" SERIAL NOT NULL,
    "patente" VARCHAR(15) NOT NULL,
    "marca" VARCHAR(50),
    "modelo" VARCHAR(50),
    "id_tarifa" INTEGER NOT NULL,
    "id_abonado" INTEGER,

    CONSTRAINT "vehiculos_pkey" PRIMARY KEY ("id_vehiculo")
);

-- CreateIndex
CREATE UNIQUE INDEX "abonados_dni_key" ON "abonados"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "vehiculos_patente_key" ON "vehiculos"("patente");

-- AddForeignKey
ALTER TABLE "accesos" ADD CONSTRAINT "fk_acceso_sector" FOREIGN KEY ("id_sector") REFERENCES "sectores"("id_sector") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "accesos" ADD CONSTRAINT "fk_acceso_usuario" FOREIGN KEY ("id_user_operador") REFERENCES "users"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "accesos" ADD CONSTRAINT "fk_acceso_vehiculo" FOREIGN KEY ("id_vehiculo") REFERENCES "vehiculos"("id_vehiculo") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sectores" ADD CONSTRAINT "fk_sector_tarifa" FOREIGN KEY ("id_tarifa_permitida") REFERENCES "tarifas"("id_tarifa") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "vehiculos" ADD CONSTRAINT "fk_vehiculo_abonado" FOREIGN KEY ("id_abonado") REFERENCES "abonados"("id_abonado") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "vehiculos" ADD CONSTRAINT "fk_vehiculo_tarifa" FOREIGN KEY ("id_tarifa") REFERENCES "tarifas"("id_tarifa") ON DELETE NO ACTION ON UPDATE NO ACTION;
