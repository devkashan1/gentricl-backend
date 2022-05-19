import {
  Body,
  Controller,
  Delete,
  HttpCode,
  Param,
  Post,
  UseGuards,
} from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";
import { LeadModel } from "../models";
import { LeadService } from "../services/";

@ApiBearerAuth()
@ApiTags("Lead")
@Controller("lead")
export class LeadController {
  constructor(private leadService: LeadService) {}

  @ApiBody({
    description: "Create a new lead",
    type: LeadModel,
  })
  @HttpCode(200)
  @Post("lead")
  async lead(@Body() lead: LeadModel) {
    return await this.leadService.lead(lead);
  }
}
