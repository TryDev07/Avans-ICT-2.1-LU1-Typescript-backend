import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateVkmDto {

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  ec: number;

  @IsNotEmpty()
  @IsString()
  niveau: string;

  @IsNotEmpty()
  @IsString()
  thema: string;

}
