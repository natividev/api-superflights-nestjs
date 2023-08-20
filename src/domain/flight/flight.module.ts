import { Module } from '@nestjs/common';
import { FlightService } from './service/flight.service';
import { FlightController } from './controller/flight.controller';
import { PrismaService } from 'src/prisma.service';
import { RepositoryFlight } from './repository/flight.repository';

@Module({
  providers: [FlightService, PrismaService, RepositoryFlight],
  controllers: [FlightController],
})
export class FlightModule {}
