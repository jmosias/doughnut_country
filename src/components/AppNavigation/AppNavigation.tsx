import AppIcon from "../AppIcon";
import AppLogo from "../../assets/images/app_logo.png";
import styles from "./AppNavigation.module.css";

function AppNavigation() {
  return (
    <nav className={`${styles.nav} bg-gradient-primary`}>
      <ul className={styles.list}>
        <li className={styles.logo}>
          <div className={styles["image-container"]}>
            <img
              src={AppLogo}
              alt="Doughnut Country logo"
              className={styles.image}
            />
          </div>
          <p className={styles.text}>
            Doughnut
            <br />
            Country
          </p>
        </li>
        <li className={styles.cart}>
          <div className={styles["order-count"]}>
            <p className={styles["count-text"]}>0</p>
          </div>
          <AppIcon name="doughnut_box" />
        </li>
      </ul>
    </nav>
  );
}

export default AppNavigation;
