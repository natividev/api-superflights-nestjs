import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UserDTO } from '../dto/user.dto';
import { UserService } from '../service/user.service';
import { IUser } from 'src/common/interface/user.interface';

@Controller('user')
export class ControllerController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async create(@Body() userDTO: UserDTO) {
    const newUser = await this.userService.createUser(userDTO);
    return {
      message: 'Usuario creado exitosamente',
      user: newUser,
    };
  }

  @Get(':id')
  getUserById(@Query('id') id: number): Promise<IUser> {
    return this.userService.getUserById(id);
  }

  @Get()
  getAllUser(): Promise<IUser[]> {
    return this.userService.getUserAll();
  }

  @Put()
  async updateUser(@Query('id') id: number, @Body() userDto: UserDTO) {
    const updateUser = await this.userService.updateUser(id, userDto);
    return {
      message: 'Usuario actualizado exitosamente',
      user: updateUser,
    };
  }

  @Delete(':id')
  async deleteUser(@Query('id') id: number) {
    await this.userService.deleteUser(id);
    return {
      message: 'Usuario eliminado exitosamente',
    };
  }
}
