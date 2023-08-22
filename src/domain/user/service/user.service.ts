import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { RepositoryUser } from '../repository/user.repository';
import { IUser } from 'src/common/interface/user.interface';
import { UserDTO } from '../dto';

@Injectable()
export class UserService {
  constructor(private readonly _reposotory: RepositoryUser) {}

  async findByUserName(username: string) {
    return this._reposotory.findByUserName(username);
  }
  async checkPassword(
    password: string,
    userPasswordDB: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, userPasswordDB);
  }

  async passwordHastEncry(userDTO: UserDTO) {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(userDTO.password, salt);
    return passwordHash;
  }

  async createUser(userDTO: UserDTO) {
    const passwordHash = await this.passwordHastEncry(userDTO);
    userDTO.passwordHash = passwordHash;
    return this._reposotory.createUser(userDTO);
  }

  async getUserById(id): Promise<IUser> {
    return this._reposotory.getUserById(id);
  }

  async getUserAll(): Promise<IUser[]> {
    return this._reposotory.getAllUser();
  }

  async updateUser(id, userDTO: UserDTO) {
    const passwordHash = await this.passwordHastEncry(userDTO);
    userDTO.passwordHash = passwordHash;
    const existingUser = await this._reposotory.getUserById(id);
    if (!existingUser) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return this._reposotory.updateUser(id, userDTO);
  }

  async deleteUser(id) {
    return this._reposotory.deleteUser(id);
  }
}
