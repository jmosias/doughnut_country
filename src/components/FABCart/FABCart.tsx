import { useAtomValue, useSetAtom } from "jotai";
import { cartLengthAtom } from "../../store/cart";
import AppIcon from "../AppIcon";
import styles from "./FABCart.module.css";
import { isCartOpenAtom } from "../../store/modals";

function FABCart() {
  const setCartOpen = useSetAtom(isCartOpenAtom);
  const cartLength = useAtomValue(cartLengthAtom);

  return (
    <button
      onClick={() => setCartOpen(true)}
      className={`${styles.cart} bg-gradient-primary`}
    >
      <p className={styles.text}>Review your Order</p>
      <div className={styles["order-count"]}>
        <p className={styles["count-text"]}>{cartLength}</p>
      </div>
      <AppIcon name="doughnut_box" />
    </button>
  );
}

export default FABCart;
