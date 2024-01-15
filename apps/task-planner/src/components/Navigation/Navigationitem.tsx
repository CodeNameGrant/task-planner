import React from 'react';
import { NavLink } from 'react-router-dom';

type NavigationItemProps = {
  to: string;
  label: string;
};

export default function NavigationItem({ to, label }: NavigationItemProps) {
  return (
    <NavLink
      to={to}
      className={
        'text-green-700 rounded-md px-2 py-1 hover:border-green-500 hover:bg-green-200 hover:text-gray-500 border-2 border-transparent'
      }
    >
      {label}
    </NavLink>
  );
}
