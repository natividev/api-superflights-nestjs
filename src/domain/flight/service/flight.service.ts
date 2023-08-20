import { Injectable } from '@nestjs/common';
import { FlightDTO } from '../dto';
import { RepositoryFlight } from '../repository/flight.repository';
import { IFlight } from 'src/common/interface/flight.interface';

@Injectable()
export class FlightService {
  constructor(readonly _repositoryFlight: RepositoryFlight) {}
  createFlight(flightFTO: FlightDTO): Promise<IFlight> {
    return this._repositoryFlight.createFlight(flightFTO);
  }

  updateFlight(id: number, flightDTO: FlightDTO): Promise<IFlight> {
    return this._repositoryFlight.updateFlight(id, flightDTO);
  }

  deleteFlight(id: number): Promise<IFlight> {
    return this._repositoryFlight.deleteFlight(id);
  }

  getAllFlight(): Promise<IFlight[]> {
    return this._repositoryFlight.getAllFlight();
  }

  getByIdFlight(id: number): Promise<IFlight> {
    return this._repositoryFlight.getByIdFlight(id);
  }
}
