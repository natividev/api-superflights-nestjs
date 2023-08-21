import { Module } from '@nestjs/common';
import { PassengersController } from './controller/passengers.controller';
import { PassengerService } from './service/passenger.service';
import { RepositoryPassenger } from './repository/passenger.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PrismaService, PassengerService, RepositoryPassenger],
  controllers: [PassengersController],
})
export class PassengerModule {}
