import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { PrismaService } from 'src/prisma.service';
import { UserService } from './service/user.service';
import { RepositoryUser } from './repository/user.repository';

@Module({
  controllers: [UserController],
  providers: [PrismaService, UserService, RepositoryUser],
})
export class UserModule {}
