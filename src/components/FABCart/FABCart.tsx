import { NavLink } from "react-router-dom";
import { useAtomValue } from "jotai";
import { cartLengthAtom } from "../../store/cart";
import AppIcon from "../AppIcon";
import styles from "./FABCart.module.css";

function FABCart() {
  const cartLength = useAtomValue(cartLengthAtom);

  return (
    <NavLink to="/cart" className={`${styles.cart} bg-gradient-primary`}>
      <p className={styles.text}>Review your Order</p>
      <div className={styles["order-count"]}>
        <p className={styles["count-text"]}>{cartLength}</p>
      </div>
      <AppIcon name="doughnut_box" />
    </NavLink>
  );
}

export default FABCart;
