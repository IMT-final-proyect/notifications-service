import { States } from 'src/notifications/enum/States.enum';

export class ArrivalDTO {
  id?: number;
  driverId: number;
  vehicleId: number;
  securityId: number;
  driver?: string;
  vehicle?: string;
  contractor?: string;
  state: States;
  exception: boolean;
  arrivalTime: Date;
}
