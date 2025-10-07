import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateVkmDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  ec?: number;

  @IsOptional()
  @IsString()
  niveau?: string;

  @IsOptional()
  @IsString()
  thema?: string;

  @IsOptional()
  @IsArray()
  keywords?: string[];

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}
