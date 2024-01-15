import { ReactNode } from 'react';
import Header from '../Header/Header';

/* eslint-disable-next-line */
export interface PageProps {
  children: ReactNode;
}

export function Page({ children }: PageProps) {
  return (
    <div className="w-4/5 outline outline-black mx-auto">
      <Header />

      <main>{children}</main>
    </div>
  );
}
