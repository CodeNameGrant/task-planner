import NavigationBar from '../Navigation/NavigationBar';
import styles from './Header.module.css';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header className="flex justify-between items-baseline">
      <p className="uppercase text-green-800 font-bold text-3xl tracking-widest">
        LOGO
      </p>

      <NavigationBar />
    </header>
  );
}

export default Header;
