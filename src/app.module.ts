import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './domain/user/user.module';
import { PassengerModule } from './domain/passenger/passenger.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true,
    }),
    UserModule,
    PassengerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
