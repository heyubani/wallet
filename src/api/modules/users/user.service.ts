import { Injectable, Inject } from '@nestjs/common';
import { User } from '../users/user.entity';
import { signUpDto, signInDto } from '../users/dtos/wallet-auth-dto';
import { USER_REPOSITORY } from '../../core/constants';

@Injectable()
export class UserServices {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async create(user: signUpDto): Promise<User> {
    return this.userRepository.create<User>(user);
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { email } });
  }

  async findOneByPhoneNumber(phone_number: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { phone_number } });
  }

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
  }
}
