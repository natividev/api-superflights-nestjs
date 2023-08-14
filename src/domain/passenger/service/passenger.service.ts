import { Injectable } from '@nestjs/common';
import { RepositoryPassenger } from '../repository/passenger.repository';
import { PassengerDTO } from '../dto';
import { IPassenger } from 'src/common/interface';

@Injectable()
export class PassengerService {
  constructor(private readonly _reposotory: RepositoryPassenger) {}
  createPassenger(passengerDTO: PassengerDTO) {
    return this._reposotory.createPassenger(passengerDTO);
  }

  getAllPassenger(): Promise<IPassenger[]> {
    return this._reposotory.getAllPassenger();
  }

  getPassengerById(id: number): Promise<IPassenger> {
    return this._reposotory.getPassengerById(id);
  }

  updatePassenger(id: number, passengerDTO: PassengerDTO) {
    return this._reposotory.updatePassenger(id, passengerDTO);
  }

  deletePassenger(id: number) {
    return this._reposotory.deletePassenger(id);
  }
}
