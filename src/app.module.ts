import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { APP_FILTER } from "@nestjs/core";

import { LeadController } from "./controllers";

import { LeadService } from "./services";
import { HttpExceptionFilter } from "./utils/exceptions.filter";

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  controllers: [LeadController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    LeadService,
  ],
})
export class AppModule {}
