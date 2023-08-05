import AppLogo from "../../assets/images/app_logo.png";
import styles from "./AppHeader.module.css";
import { NavLink } from "react-router-dom";

function AppHeader() {
  return (
    <header className={styles.header}>
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
    </header>
  );
}

export default AppHeader;
