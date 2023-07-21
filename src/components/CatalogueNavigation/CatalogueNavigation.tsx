import styles from "./CatalogueNavigation.module.css";

function CatalogueNavigation() {
  return (
    <nav className={`${styles.nav} bg-gradient-secondary`}>
      <ul className={styles.list}>
        <li className={styles.doughnuts}>doughnuts</li>
        <li className={styles.pastries}>pastries</li>
        <li className={styles.beverages}>beverages</li>
      </ul>
    </nav>
  );
}

export default CatalogueNavigation;
