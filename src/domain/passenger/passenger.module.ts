import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { PassengerService } from './service/passenger.service';
import { RepositoryPassenger } from './repository/passenger.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PrismaService, PassengerService, RepositoryPassenger],
  controllers: [ControllerController],
})
export class PassengerModule {}
