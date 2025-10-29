import styles from '../styles/css/Header.module.css';

function Header() {
  return (
    <header>
      <div className={styles.header-body}>
        {/* Actual Header Content Area (Logo, Navigation, Search Icon, Hamburger menu Icon) */}
        <div className={styles.header-bar}>
          <button className={styles.header-menu-trigger}>
          </button>
          <div className={styles.header-bar-logo}>

          </div>
          <div className={styles.header-navigation}>

          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;