import ResponseMessage from "./response-message";
import { ResponseModel } from "./response-model";

export default {
  SucessResponse: (
    result: any,
    message: string = ResponseMessage.SuccessMesssage,
  ): ResponseModel => {
    return { response: true, message: message, result: result };
  },
  InvalidResponse: (
    message: string = ResponseMessage.InvalidMessage,
  ): ResponseModel => {
    return { response: false, message: message, result: null };
  },
};
