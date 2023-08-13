import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export class FilterUserDto<Filter> {
  @IsOptional({ each: true })
  @IsObject({ each: true })
  filters?: Filter;
}

export class FilterUserIdDTO {
  @IsString()
  id: string;
}
