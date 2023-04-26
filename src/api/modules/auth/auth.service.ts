import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserServices } from '../users/user.service';
import { signUpDto } from '../users/dtos/wallet-auth-dto';

@Injectable()
export class AuthServices {
  constructor(
    private readonly UserService: UserServices,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string) {
    // find if user exist with this email
    const user = await this.UserService.findOneByEmail(username);
    if (!user) {
      return null;
    }

    // find if user password match
    const match = await this.comparePassword(pass, user.password);

    if (!match) {
      return null;
    }

    // tslint:disable-next-line: no-string-literal
    const { password, ...result } = user['dataValues'];
    return result;
  }

  public async login(user: any) {
    const token = await this.generateToken(user);
    return { user, token };
  }

  public async create(user: signUpDto) {
    // hash the password
    const pass = await this.hashPassword(user.password);

    // create the user
    const newUser = await this.UserService.create({ ...user, password: pass });

    // tslint:disable-next-line: no-string-literal
    const { password, ...result } = newUser['dataValues'];

    // generate token
    // const token = await this.generateToken(result);

    // return the user and the token
    return result;
  }

  private async generateToken(user: string | object | Buffer) {
    const token = await this.jwtService.signAsync(user);
    return token;
  }

  private async hashPassword(password: string) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }

  private async comparePassword(enteredPassword: string, dbPassword: string) {
    const match = await bcrypt.compare(enteredPassword, dbPassword);
    return match;
  }
}
