import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { PrismaService } from 'src/prisma.service';
import { UserService } from './service/user.service';
import { RepositoryUser } from './repository/user.repository';

@Module({
  controllers: [ControllerController],
  providers: [PrismaService, UserService, RepositoryUser],
})
export class UserModule {}
