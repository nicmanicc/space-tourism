import { useState, useEffect, useRef } from 'react';
import logo from '../../assets/shared/logo.svg';
import { HamburgerMenu } from './HamburgerMenu';
import { LinkContainer } from './LinkContainer';
import classes from './NavBar.module.css';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleTouchOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleTouchOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleTouchOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className={classes.navContainer} ref={navRef}>
      <img className={classes.logo} src={logo} alt="space tourism logo" />
      <HamburgerMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <LinkContainer />
    </div>
  );
};
