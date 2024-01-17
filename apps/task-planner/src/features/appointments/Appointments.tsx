import { useEffect, useState } from 'react';
import { Heading } from '../../components';
import { AppointmentScheduler } from './scheduler';
import { Appointment } from '../../types';

export function Appointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  useEffect(() => {
    fetch('get-appointments')
      .then((res) => res.json())
      .then((data) =>
        data.map((item: Appointment) => ({
          ...item,
          start: new Date(item.start),
          end: new Date(item.end),
        }))
      )
      .then((data) => setAppointments(data));
  }, []);

  return (
    <div className="space-y-2">
      <Heading heading="Appointments" />

      <AppointmentScheduler data={appointments} />
    </div>
  );
}
