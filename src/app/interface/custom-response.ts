import { Server } from './server';

export interface CustomResponse {
  timerStamp: Date;
  statusCode: number;
  status: string;
  reason: string;
  message: string;
  developerMessage: string;
  data: { servers?: Server[]; server?: Server };
}
