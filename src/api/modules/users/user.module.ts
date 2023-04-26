import { Module } from '@nestjs/common';
import { UserServices } from './user.service';
import { UsersProviders } from './users.providers';

@Module({
  providers: [UserServices, ...UsersProviders],
  exports: [UserServices],
})
export class UserModule {}
// export { UserServices };
