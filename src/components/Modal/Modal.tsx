import { ReactNode } from "react";
import styles from "./Modal.module.css";

function Modal({ children }: { children: ReactNode }) {
  return <div className={`${styles.modal} scrollbar`}>{children}</div>;
}

export default Modal;
