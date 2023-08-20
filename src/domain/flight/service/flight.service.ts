import { Injectable } from '@nestjs/common';
import { FlightDTO } from '../dto';
import { RepositoryFlight } from '../repository/flight.repository';
import { IFlight } from 'src/common/interface/flight.interface';

@Injectable()
export class FlightService {
  constructor(readonly _repositoryFlight: RepositoryFlight) {}
  async createFlight(flightFTO: FlightDTO): Promise<IFlight> {
    return await this._repositoryFlight.createFlight(flightFTO);
  }

  async updateFlight(id: number, flightDTO: FlightDTO): Promise<IFlight> {
    return await this._repositoryFlight.updateFlight(id, flightDTO);
  }

  async deleteFlight(id: number) {
    return await this._repositoryFlight.deleteFlight(id);
  }

  async getAllFlight(): Promise<IFlight[]> {
    return await this._repositoryFlight.getAllFlight();
  }

  async getByIdFlight(id: number): Promise<IFlight> {
    return await this._repositoryFlight.getByIdFlight(id);
  }
}
