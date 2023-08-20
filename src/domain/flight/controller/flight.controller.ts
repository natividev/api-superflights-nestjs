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
import { FlightDTO } from '../dto';
import { FlightService } from '../service/flight.service';

@Controller('flight')
export class FlightController {
  constructor(readonly _serviceFligh: FlightService) {}
  @Post()
  createFlight(@Body() flightDTO: FlightDTO) {
    return this._serviceFligh.createFlight(flightDTO);
  }

  @Put(':id')
  updateFlight(@Body() flightDTO: FlightDTO, @Param('id') id: number) {
    return this._serviceFligh.updateFlight(id, flightDTO);
  }

  @Get('all')
  getAllFlight() {
    return this._serviceFligh.getAllFlight();
  }

  @Get(':id')
  getPassengerById(@Param('id') id: number) {
    return this._serviceFligh.getByIdFlight(id);
  }

  @Delete(':id')
  deleteFlight(@Param('id') id: number) {
    return this._serviceFligh.deleteFlight(id);
  }
}
