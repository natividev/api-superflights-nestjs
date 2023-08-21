import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class UserDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsNotEmpty()
  readonly userName: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly password: string;

  // Nueva propiedad para el hash de la contraseña
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  passwordHash: string;
}
