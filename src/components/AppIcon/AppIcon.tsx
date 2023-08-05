import beverages from "../../assets/svgs/beverages.svg";
import delivery_van from "../../assets/svgs/delivery_van.svg";
import doughnut_box from "../../assets/svgs/doughnut_box.svg";
import doughnuts from "../../assets/svgs/doughnuts.svg";
import pastries from "../../assets/svgs/pastries.svg";
import styles from "./AppIcon.module.css";

export interface AppIconProps {
  name:
    | "beverages"
    | "delivery_van"
    | "doughnut_box"
    | "doughnuts"
    | "pastries";
}

function AppIcon({ name }: { name: AppIconProps["name"] }) {
  const appIcons = {
    beverages: beverages,
    delivery_van: delivery_van,
    doughnut_box: doughnut_box,
    doughnuts: doughnuts,
    pastries: pastries,
  };

  return (
    <div className={styles.container}>
      <img src={appIcons[name]} alt={`${name} icon`} className={styles.icon} />
    </div>
  );
}

export default AppIcon;
