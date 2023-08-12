import { Body, Controller, Post } from '@nestjs/common';
import { UserDTO } from '../dto/user.dto';
import { UserService } from '../service/user/user.service';

@Controller('user')
export class ControllerController {
  constructor(private readonly userService: UserService) {}
  @Post()
  create(@Body() userDTO: UserDTO) {
    return this.userService.create(userDTO);
  }
}
