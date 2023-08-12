import { Injectable } from '@nestjs/common';
import { UserDTO } from '../../dto/user.dto';
import { IUser } from 'src/common/interface/user.interface';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }
  async create(userDTO: UserDTO): Promise<IUser> {
    const hashedPassword = await this.hashPassword(userDTO.password);
    return await this.prismaService.user.create({
      data: {
        name: userDTO.name,
        userName: userDTO.userName,
        email: userDTO.email,
        password: hashedPassword,
      },
    });
  }
}
