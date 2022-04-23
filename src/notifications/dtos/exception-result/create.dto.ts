import { Result } from 'src/notifications/enum/Result.enum';

export class ExceptionResultData {
  managerId: number;
  exceptionId: number;
  comment: string;
  result: Result;
}
