import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class UserDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  @IsString()
  @IsNotEmpty()
  readonly userName: string;
  @IsNotEmpty()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
