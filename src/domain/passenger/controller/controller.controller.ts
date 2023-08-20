import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { PassengerDTO } from '../dto';
import { PassengerService } from '../service/passenger.service';
import { IPassenger } from 'src/common/interface';

@Controller('passengers')
export class ControllerController {
  constructor(private readonly _passengerService: PassengerService) {}
  @Post()
  createPassenger(@Body() passengerDTO: PassengerDTO) {
    return this._passengerService.createPassenger(passengerDTO);
  }

  @Get('all')
  getAllPassenger(): Promise<IPassenger[]> {
    return this._passengerService.getAllPassenger();
  }

  @Get(':id')
  getPassengerById(@Param('id') id: number): Promise<IPassenger> {
    return this._passengerService.getPassengerById(id);
  }

  @Put(':id')
  updatePassenger(@Param('id') id: number, @Body() passengerDTO: PassengerDTO) {
    return this._passengerService.updatePassenger(id, passengerDTO);
  }

  @Delete(':id')
  deletePassenger(@Param('id') id: number) {
    return this._passengerService.deletePassenger(id);
  }
}
