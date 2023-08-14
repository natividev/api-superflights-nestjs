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

@Controller('passenger')
export class ControllerController {
  constructor(private readonly _passengerService: PassengerService) {}
  @Post()
  createPassenger(@Body() passengerDTO: PassengerDTO) {
    return this._passengerService.createPassenger(passengerDTO);
  }

  @Get()
  getAllPassenger(): Promise<IPassenger[]> {
    return this._passengerService.getAllPassenger();
  }

  @Get(':id')
  getPassengerById(@Query('id') id: number): Promise<IPassenger> {
    return this._passengerService.getPassengerById(id);
  }

  @Put()
  updatePassenger(@Query('id') id: number, @Body() passengerDTO: PassengerDTO) {
    return this._passengerService.updatePassenger(id, passengerDTO);
  }

  @Delete(':id')
  deletePassenger(@Query('id') id: number) {
    return this._passengerService.deletePassenger(id);
  }
}
