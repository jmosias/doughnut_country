import AppIcon from "../AppIcon";
import styles from "./AppNavigation.module.css";

function AppNavigation() {
  return (
    <nav className={`${styles.nav} bg-gradient-primary`}>
      <ul className={styles.list}>
        <li className={styles.menu}>logo here</li>
        <li className={styles.cart}>
          <AppIcon name="doughnut_box"></AppIcon>
        </li>
      </ul>
    </nav>
  );
}

export default AppNavigation;
