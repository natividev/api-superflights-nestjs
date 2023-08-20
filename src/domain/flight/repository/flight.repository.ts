import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { FlightDTO } from '../dto';
import { IFlight } from 'src/common/interface/flight.interface';

@Injectable()
export class RepositoryFlight {
  constructor(readonly _prismaService: PrismaService) {}

  async createFlight(flightDTO: FlightDTO): Promise<IFlight> {
    return await this._prismaService.flight.create({
      data: {
        ...flightDTO,
      },
    });
  }

  async updateFlight(id: number, flightDTO: FlightDTO): Promise<IFlight> {
    return await this._prismaService.flight.update({
      where: {
        id: +id,
      },
      data: {
        ...flightDTO,
      },
    });
  }

  async deleteFlight(id: number): Promise<IFlight> {
    return await this._prismaService.flight.update({
      where: {
        id: +id,
      },
      data: {
        status: false,
      },
    });
  }

  async getAllFlight(): Promise<IFlight[]> {
    return await this._prismaService.flight.findMany({
      where: {
        status: true,
      },
      include: {
        passenger: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });
  }

  async getByIdFlight(id: number): Promise<IFlight> {
    return await this._prismaService.flight.findUnique({
      where: {
        id: +id,
      },
      include: {
        passenger: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });
  }
}
