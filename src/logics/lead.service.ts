import { Injectable, Res } from "@nestjs/common";

import {
  ResponseHelper,
  ResponseMessage,
  ResponseModel,
} from "../utils/response-handler";

import { LeadModel } from "../models";
import EmailHelper from "../utils/email.helper";
import Generic from "../utils/generic";
const hubspot = require("@hubspot/api-client");
@Injectable()
export class LeadService {
  constructor() {}
  async lead(lead: LeadModel): Promise<ResponseModel> {
    try {
      const hubspotClient = new hubspot.Client({
        apiKey: process.env.HUBSPOT_API_KEY,
      });
      const contactObj = {
        properties: {
          firstname: lead.firstname,
          lastname: lead.lastname,
          country: lead.country,
          phone: lead.phone,
          company: lead.company,
          service: lead.service,
          email: lead.email,
          engineer: lead.engineer,
          source: lead.source,
          industry: lead.industry,
        },
        };
      const createContactResponse =
        await hubspotClient.crm.contacts.basicApi.create(contactObj);
      return ResponseHelper.SucessResponse({}, ResponseMessage.SuccessMesssage);
    } catch (error) {
      return ResponseHelper.InvalidResponse(error?.body?.message);
    }
  }
}
