import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

import { UserServices } from 'src/api/modules/users/user.service';

@Injectable()
export class DoesUserEmailExist implements CanActivate {
  constructor(private readonly userService: UserServices) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateEmailRequest(request);
  }

  async validateEmailRequest(request) {
    const userExist = await this.userService.findOneByEmail(request.body.email);
    if (userExist) {
      throw new ForbiddenException('This email already exist');
    }
    return true;
  }
}

@Injectable()
export class DoesUserPhoneNumberExist implements CanActivate {
  constructor(private readonly userService: UserServices) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validatePhoneNumberRequest(request);
  }

  async validatePhoneNumberRequest(request) {
    const userExist = await this.userService.findOneByPhoneNumber(
      request.body.phone_number,
    );
    if (userExist) {
      throw new ForbiddenException('This phone number already exist');
    }
    return true;
  }
}
