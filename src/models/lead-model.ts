import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";
export class LeadModel {
  @ApiProperty()
  firstname: string;

  @ApiProperty()
  lastname: string;

  @ApiProperty()
  country: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  company: string;

  @ApiProperty()
  service: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  engineer: string;

  @ApiProperty()
  source: string;

  @ApiProperty()
  industry: string;
}
