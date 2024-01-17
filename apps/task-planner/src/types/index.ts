export type Appointment {
  id: number;
  title: string;
  start: Date;
  end: Date;
  recurrenceRule?: string;
}