import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { FlightDTO } from '../dto';
import { FlightService } from '../service/flight.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/domain/auth/guards/jwt.auth.guard';

@ApiTags('flights')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('flights')
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
