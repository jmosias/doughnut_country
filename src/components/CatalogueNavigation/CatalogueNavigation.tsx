import AppIcon from "../AppIcon";
import { AppIconProps } from "../AppIcon/AppIcon";
import styles from "./CatalogueNavigation.module.css";
import { NavLink } from "react-router-dom";

interface Category {
  path: string;
  name: AppIconProps["name"];
}

const categories: Category[] = [
  {
    path: "/doughnuts",
    name: "doughnuts",
  },
  {
    path: "/pastries",
    name: "pastries",
  },
  {
    path: "/beverages",
    name: "beverages",
  },
];

function CatalogueNavigation() {
  return (
    <nav className={styles.nav}>
      <h3 className={styles.title}>Categories:</h3>
      <ul className={styles.list}>
        {categories &&
          categories.map((category, index) => (
            <li key={index} className={styles.item}>
              <NavLink
                end
                to={category.path}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.active} ${styles.link} bg-gradient-primary`
                    : styles.link
                }
              >
                <AppIcon name={category.name}></AppIcon>
                <p className={styles.text}>{category.name}</p>
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default CatalogueNavigation;
