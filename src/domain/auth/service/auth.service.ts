import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/domain/user/dto';
import { UserService } from 'src/domain/user/service/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findByUserName(username);

    if (
      !user ||
      !(await this.userService.checkPassword(password, user.password))
    ) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    return user;
  }

  async signIn(user: any) {
    const payload = { username: user.userName, sub: user.userId };
    return { access_token: this.jwtService.sign(payload) };
  }

  async signUp(userDto: UserDTO) {
    return this.userService.createUser(userDto);
  }
}
