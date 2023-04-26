import {
  Controller,
  Response,
  Post,
  Get,
  Body,
  UseGuards,
  HttpCode,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthServices } from './auth.service';
import { signUpDto, signInDto } from '../users/dtos/wallet-auth-dto';
import {
  DoesUserEmailExist,
  DoesUserPhoneNumberExist,
} from '../../core/Guards//auth.guard';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authServices: AuthServices) {}

  @UseGuards(DoesUserEmailExist, DoesUserPhoneNumberExist)
  @Post('/signup')
  async signupUser(@Response() _res, @Body() user: signUpDto) {
    const data = await this.authServices.create(user);
    const newUser = {
      message: 'user successfully created',
      status: HttpStatus.CREATED,
      data,
    };
    _res.json(newUser);
  }

  @HttpCode(HttpStatus.OK)
  @Post('/login')
  async signIn(@Body() user: signInDto) {
    const userData = await this.authServices.validateUser(
      user.email,
      user.password,
    );
    if (!userData) {
      throw new UnauthorizedException('Invalid user credentials');
    }
    return await this.authServices.login(userData);
  }

  @Get()
  getSomeThing() {
    console.log('something happened here...!');
  }
}
