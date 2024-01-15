import React from 'react';
import NavigationItem from './Navigationitem';

/* eslint-disable-next-line */
type NavigationBarProps = {};

export default function NavigationBar({}: NavigationBarProps) {
  return (
    <nav className="flex gap-2">
      <NavigationItem to={'/appointments'} label={'Appointments'} />
      <NavigationItem to={'/tasks'} label={'Tasks'} />
    </nav>
  );
}
