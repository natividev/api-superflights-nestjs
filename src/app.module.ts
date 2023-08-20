import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './domain/user/user.module';
import { PassengerModule } from './domain/passenger/passenger.module';
import { FlightModule } from './domain/flight/flight.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true,
    }),
    UserModule,
    PassengerModule,
    FlightModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
