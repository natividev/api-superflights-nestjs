export interface IFlight {
  readonly pilot: string;
  readonly airplane: string;
  readonly destinationCity: string;
  readonly flighDate: Date;
  readonly id?: number;
  readonly passengerId: number;
}
