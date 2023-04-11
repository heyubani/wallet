import { Controller, Post, Get, Body } from '@nestjs/common';
import { UsersService } from '../modules/users/users.module';
import { authDto } from '../modules/users/dtos/wallet-auth-dto';

@Controller('/auth')
export class AuthController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  signupUser(@Body() user: authDto): Promise<authDto> {
    return this.usersService.create(user);
  }

  @Get()
  getSomeThing() {
    console.log('something happened here...!');
  }
}
