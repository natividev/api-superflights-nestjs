import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PassengerDTO } from '../dto';
import { IPassenger } from 'src/common/interface';

@Injectable()
export class RepositoryPassenger {
  constructor(private readonly _prismaService: PrismaService) {}

  async createPassenger(passengerDTO: PassengerDTO): Promise<IPassenger> {
    return await this._prismaService.passenger.create({
      data: {
        ...passengerDTO,
      },
    });
  }

  async getAllPassenger(): Promise<IPassenger[]> {
    return await this._prismaService.passenger.findMany({
      where: {
        status: true,
      },
    });
  }

  async getPassengerById(id): Promise<IPassenger> {
    return await this._prismaService.passenger.findUnique({
      where: {
        id: +id,
        status: true,
      },
    });
  }

  async updatePassenger(id, passengerDTO: PassengerDTO): Promise<IPassenger> {
    return this._prismaService.passenger.update({
      where: {
        id: +id,
      },
      data: {
        name: passengerDTO.name,
        email: passengerDTO.email,
      },
    });
  }

  async deletePassenger(id): Promise<IPassenger> {
    return this._prismaService.passenger.update({
      where: {
        id: +id,
      },
      data: {
        status: false,
      },
    });
  }
}
