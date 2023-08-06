import { useSetAtom } from "jotai";
import { isCartOpenAtom, isPaymentOpenAtom } from "../../store/modals";
import Modal from "../Modal";
import styles from "./ModalPayment.module.css";
import AppIcon from "../AppIcon";

function ModalPayment() {
  const setCartOpen = useSetAtom(isCartOpenAtom);
  const setPaymentOpen = useSetAtom(isPaymentOpenAtom);

  const completeOrder = () => {
    setPaymentOpen(false);
    setCartOpen(true);
  };

  return (
    <Modal>
      <div className={styles.header}>
        <h2 className={styles.title}>Doughnut Country</h2>
      </div>
      <div className={styles.warning}>
        <AppIcon name="delivery_van" widthSize="7rem" heightSize="7rem" />
        <p>
          Unfortunately, our company <br /> is no longer operating.
        </p>
        <p>
          We would like to thank everyone <br /> who supported our business.
        </p>
        <p>Farewell!</p>
      </div>
      <div className={styles.footer}>
        <button onClick={() => completeOrder()} className={styles.cancel}>
          Go back
        </button>
      </div>
    </Modal>
  );
}

export default ModalPayment;
