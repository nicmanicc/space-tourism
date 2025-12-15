import classes from './HamburgerMenu.module.css';
import { LinkContainer } from './LinkContainer';

export const HamburgerMenu = ({ isOpen, setIsOpen }) => {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.hamburgerMenuContainer}>
      <button
        className={`${classes.hamburger} ${isOpen ? classes.open : ''}`}
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span className={`${classes.hamburgerLine}`}></span>
        <span className={`${classes.hamburgerLine}`}></span>
        <span className={`${classes.hamburgerLine}`}></span>
      </button>

      <LinkContainer
        otherStyles={`${classes.menu} ${isOpen ? classes.open : ''}`}
        onLinkClick={() => setIsOpen(false)}
      />
    </div>
  );
};
