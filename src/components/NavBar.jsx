import logo from '../assets/shared/logo.svg';
import { HamburgerMenu } from './HamburgerMenu';
import { LinkContainer } from './LinkContainer';
import classes from './NavBar.module.css';

export const NavBar = () => {
  return (
    <div className={classes.navContainer}>
      <img className={classes.logo} src={logo} alt="space tourism logo" />
      <HamburgerMenu />
      <LinkContainer />
    </div>
  );
};
