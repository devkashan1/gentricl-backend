import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from "@nestjs/common";
import { Request, Response } from "express";
import { ResponseHelper, ResponseMessage } from "./response-handler";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const res: any = exception.getResponse();
    switch (status) {
      case 401:
        response
          .status(401)
          .json(ResponseHelper.InvalidResponse(ResponseMessage.Unauthorized));
        break;
      case 406:
        response
          .status(500)
          .json(ResponseHelper.InvalidResponse(res.message[0]?.charAt(0).toUpperCase() + res.message[0]?.slice(1)));
        break;
      default:
        response
          .status(500)
          .json(ResponseHelper.InvalidResponse(exception.message));
        break;
    }
  }
}
