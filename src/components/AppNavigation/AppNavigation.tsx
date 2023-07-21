import styles from "./AppNavigation.module.css";

function AppNavigation() {
  return (
    <nav className={`${styles.nav} bg-gradient-primary`}>
      <ul className={styles.list}>
        <li className={styles.menu}>menu</li>
        <li className={styles.cart}>cart</li>
      </ul>
    </nav>
  );
}

export default AppNavigation;
