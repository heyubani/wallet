import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { usersProviders } from './users.providers';
import { AuthController } from '../../controllers/wallet.auth.controller';
@Module({
  providers: [UsersService, ...usersProviders],
  exports: [UsersService],
  controllers: [AuthController],
})
export class UsersModule {}
export { UsersService };
