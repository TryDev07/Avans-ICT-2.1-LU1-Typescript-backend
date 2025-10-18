import { IsArray, IsBoolean, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export const NIVEAU_VALUES = ['NLQF-5', 'NLQF-6'] as const;
export type Niveau = typeof NIVEAU_VALUES[number];

export class UpdateVkmDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @Type(() => Number)       // <-- cast "15" -> 15
  @IsNumber()
  ec?: number;

  @IsOptional()
  @IsEnum(NIVEAU_VALUES)    // <-- stricter dan IsString
  niveau?: Niveau;

  @IsOptional()
  @IsString()
  thema?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true }) // <-- items zijn strings
  keywords?: string[];

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}
