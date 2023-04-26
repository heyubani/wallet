import { Module } from '@nestjs/common';
import { AuthServices } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../users/user.module';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: process.env.JWTKEY,
      signOptions: { expiresIn: process.env.TOKEN_EXPIRATION },
    }),
  ],
  providers: [AuthServices],
  controllers: [AuthController],
})
export class AuthModule {}
// export { AuthServices };
