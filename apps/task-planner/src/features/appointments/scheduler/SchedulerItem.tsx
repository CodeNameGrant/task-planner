import {
  SchedulerItemProps,
  SchedulerItem as KendoSchedulerItem,
} from '@progress/kendo-react-scheduler';
import dayjs from 'dayjs';

export function SchedulerItem(props: SchedulerItemProps) {
  return (
    <KendoSchedulerItem {...props}>
      {props.children[0]}
      <div>
        {dayjs(props.dataItem.start).format('HH:mm')} {props.dataItem.title}
      </div>
    </KendoSchedulerItem>
  );
}
