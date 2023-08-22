import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserDTO } from '../dto/user.dto';
import { IUser } from 'src/common/interface/user.interface';

@Injectable()
export class RepositoryUser {
  constructor(private readonly _prismaService: PrismaService) {}

  async findByUserName(username: string) {
    const user = await this._prismaService.user.findUnique({
      where: {
        userName: username,
      },
    });
    return user;
  }

  async createUser(userDTO: UserDTO): Promise<IUser> {
    return await this._prismaService.user.create({
      data: {
        name: userDTO.name,
        userName: userDTO.userName,
        email: userDTO.email,
        password: userDTO.passwordHash,
      },
      select: {
        name: true,
        userName: true,
        email: true,
      },
    });
  }

  async getUserById(id): Promise<IUser> {
    return await this._prismaService.user.findUnique({
      where: {
        id: +id,
        status: true,
      },
      select: {
        name: true,
        userName: true,
        email: true,
      },
    });
  }
  async getAllUser(): Promise<IUser[]> {
    return await this._prismaService.user.findMany({
      where: {
        status: true,
      },
      select: {
        name: true,
        userName: true,
        email: true,
      },
    });
  }
  async updateUser(id, userDTO: UserDTO): Promise<IUser> {
    return await this._prismaService.user.update({
      where: {
        id: +id,
      },
      data: {
        name: userDTO.name,
        userName: userDTO.userName,
        email: userDTO.email,
        password: userDTO.passwordHash,
      },
      select: {
        name: true,
        userName: true,
        email: true,
      },
    });
  }

  async deleteUser(id) {
    return await this._prismaService.user.update({
      where: {
        id: +id,
      },
      data: {
        status: false,
      },
      select: {
        name: true,
        userName: true,
        email: true,
      },
    });
  }
}
