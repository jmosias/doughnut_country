import AppIcon from "../AppIcon";
import AppLogo from "../../assets/images/app_logo.png";
import styles from "./AppNavigation.module.css";
import { NavLink } from "react-router-dom";

function AppNavigation() {
  return (
    <nav className={`${styles.nav} bg-gradient-primary`}>
      <ul className={styles.list}>
        <li>
          <NavLink to="/" className={styles.logo}>
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
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={styles.cart}>
            <div className={styles["order-count"]}>
              <p className={styles["count-text"]}>0</p>
            </div>
            <AppIcon name="doughnut_box" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNavigation;
