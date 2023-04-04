import React, { useState } from "react";
import styles from "/styles/NavExample.module.scss";

const NavExample = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src="/logos/Clip path group.png" className={styles.logo} />
        <p className={styles.title}>Cocoa IQ</p>
      </div>
      <div className={styles.tagsContainer}>
        <div className={styles.linksContainer}>
          <p className={styles.link}>Cococa IQ</p>
          <p className={styles.link}>Charts</p>
          <p className={styles.link}>Technology</p>
          <p className={styles.link}>Events</p>
        </div>
        <div className={styles.linksContainerMobile}>
          <img
            src="/logos/menu_FILL0_wght400_GRAD0_opsz48.svg"
            className={styles.logo2}
            onClick={() => {
              setOpenMenu(!openMenu), setOpenLogin(false);
            }}
          />
          <div
            className={
              openMenu
                ? `${styles.linksMobile} ${styles.linksMobileOpen}`
                : styles.linksMobile
            }
          >
            <p className={styles.link}>Cococa IQ</p>
            <p className={styles.link}>Charts</p>
            <p className={styles.link}>Technology</p>
            <p className={styles.link}>Events</p>
          </div>
        </div>

        <div className={styles.loginContainer}>
          <img src="/logos/Vector.png" className={styles.logo2} />
          <button className={styles.login}>Login</button>
          <button className={styles.register}>Register</button>
        </div>
        <div className={styles.loginContainerMobile}>
          <img
            src="/logos/Vector.png"
            className={styles.logo2}
            onClick={() => {
              setOpenLogin(!openLogin), setOpenMenu(false);
            }}
          />
          <div
            className={
              openLogin
                ? `${styles.loginMobile} ${styles.loginMobileOpen}`
                : styles.loginMobile
            }
          >
            <button className={styles.login}>Login</button>
            <button className={styles.register}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavExample;
