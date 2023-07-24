import AppIcon from "../AppIcon";
import styles from "./CatalogueNavigation.module.css";
import { NavLink } from "react-router-dom";

function CatalogueNavigation() {
  return (
    <nav className={`${styles.nav} bg-gradient-secondary`}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            end
            to="/doughnuts"
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.link}` : styles.link
            }
          >
            <AppIcon name="doughnuts"></AppIcon>
            <p className="special text">Doughnuts</p>
          </NavLink>
        </li>

        <li className={styles.item}>
          <NavLink
            end
            to="/pastries"
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.link}` : styles.link
            }
          >
            <AppIcon name="pastries"></AppIcon>
            <p className="special text">Pastries</p>
          </NavLink>
        </li>

        <li className={styles.item}>
          <NavLink
            end
            to="/beverages"
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.link}` : styles.link
            }
          >
            <AppIcon name="beverages"></AppIcon>
            <p className="special text">Beverages</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default CatalogueNavigation;
