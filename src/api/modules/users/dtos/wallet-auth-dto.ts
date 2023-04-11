import { IsEmail, IsString, Length } from 'class-validator';

export class authDto {
  @IsString()
  first_name: string;
  @IsString()
  last_name: string;
  @IsEmail()
  email: string;
  @IsString()
  phone_number: string;
  @Length(8, 16)
  password: string;
}
