import { Result } from 'src/notifications/enum/Result.enum';
import { States } from 'src/notifications/enum/States.enum';

export class ExceptionDTO {
  id?: number;
  comment?: string;
  managerId?: number;
  state?: States;
  result?: Result;
}
