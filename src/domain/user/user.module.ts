import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { PrismaService } from 'src/prisma.service';
import { UserService } from './service/user/user.service';

@Module({
  controllers: [ControllerController],
  providers: [PrismaService, UserService],
})
export class UserModule {}
