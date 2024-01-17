import { MonthView, Scheduler } from '@progress/kendo-react-scheduler';
import { SchedulerItem } from './SchedulerItem';
import { Appointment } from 'apps/task-planner/src/types';

type AppointmentSchedulerProps = { data: Appointment[] };

export function AppointmentScheduler({ data }: AppointmentSchedulerProps) {
  return (
    <Scheduler
      data={data}
      defaultDate={new Date('2024-01-01')}
      item={SchedulerItem}
    >
      <MonthView />
    </Scheduler>
  );
}
