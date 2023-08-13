import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
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

  // Nueva propiedad para el hash de la contraseña
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  passwordHash: string;
}
