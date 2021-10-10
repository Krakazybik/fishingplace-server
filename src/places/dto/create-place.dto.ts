import { IsNumber, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePlaceDto {
  @IsNumber({}, { message: 'lng should be number type' })
  @ApiProperty({ example: '35.25678', description: 'Place longitude.' })
  readonly lng: number;

  @IsNumber({}, { message: 'lat should be number type' })
  @ApiProperty({ example: '55.12678', description: 'Place latitude.' })
  readonly lat: number;

  @IsString({ message: 'description should be string type' })
  @Length(3, 400, { message: 'description length should be in range 3-400' })
  @ApiProperty({ example: 'Good place.', description: 'Place description.' })
  readonly description: string;
}
