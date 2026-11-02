import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AbonadosModule } from '../Abonados/abonados.module.js';
import { AccesosModule } from '../Accesos/accesos.module.js';
import { AuthModule } from '../auth/auth.module.js';
import { SectoresModule } from '../Sectores/sectores.module.js';
import { TarifasModule } from '../Tarifas/tarifas.module.js';
import { UsersModule } from '../users/users.module.js';
import { VehiculosModule } from '../Vehiculos/vehiculos.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ObserveModule.forRoot({
      appKey: process.env.OBSERVE_APP_KEY ?? 'YOUR_APP_KEY',
      appSecret: process.env.OBSERVE_APP_SECRET ?? 'YOUR_APP_SECRET',
      serviceId: 'sistema-backend',
    }),
    AbonadosModule,
    AccesosModule,
    AuthModule,
    SectoresModule,
    TarifasModule,
    UsersModule,
    VehiculosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
