/* eslint-disable prefer-spread */

import { useAtomValue, useAtom } from "jotai";
import { Flavour, flavoursAtom } from "../../store/flavours";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal";
import styles from "./ModalChoose.module.css";
import { customCartAtom } from "../../store/cart";

function ModalChoose() {
  const navigate = useNavigate();
  const flavourList = useAtomValue(flavoursAtom);
  const [customCart, setCustomCart] = useAtom(customCartAtom);
  const [boxList, setBoxList] = useState<Flavour[]>([]);
  const max = 6;

  const addToBox = (flavour: Flavour) => {
    if (boxList.length >= 6) return;
    setBoxList([...boxList, flavour]);
  };

  const removeFromBox = (index: number) => {
    const newList = boxList.filter((flavour, i) => i !== index && flavour);
    setBoxList(newList);
  };

  const addToCart = (flavours: Flavour[]) => {
    setCustomCart([
      ...customCart,
      {
        flavours,
      },
    ]);
    navigate(-1);
  };

  return (
    <Modal>
      <div className={styles.header}>
        <h2 className={styles.title}>Choose 6 Flavours</h2>
      </div>

      <div className={`${styles.catalogue} scrollbar`}>
        <div className={`${styles.flavours}`}>
          {flavourList &&
            flavourList.map((flavour) => (
              <div
                key={flavour.id}
                className={styles.flavour}
                onClick={() => addToBox(flavour)}
              >
                <img
                  src={flavour.img_src}
                  alt={`${flavour.name} doughnut from Doughnut Country`}
                  className={styles.image}
                />
                <p className={styles.name}>{flavour.name}</p>
              </div>
            ))}
        </div>
      </div>

      <div className={styles["chosen-container"]}>
        <p className={styles["chosen-text"]}>Your pick:</p>
        <div className={styles["chosen-list"]}>
          {boxList.map((flavour, index) => (
            <div className={`${styles["chosen-item"]}`}>
              <img
                src={flavour.img_src}
                alt={`${flavour.name} from Doughnut Country`}
                className={styles["chosen-img"]}
              />
              <button
                onClick={() => removeFromBox(index)}
                className={`${styles["small-button"]} ${styles.remove}`}
              >
                -
              </button>
            </div>
          ))}
          {Array.apply(null, Array(max - boxList.length)).map(() => (
            <div className={`${styles["chosen-item"]} ${styles.empty}`}></div>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <button
          onClick={() => navigate(-1)}
          className={`${styles.cancel} ${styles.button}`}
        >
          Cancel
        </button>
        <button
          disabled={boxList.length < 6}
          onClick={() => addToCart(boxList)}
          className={`${styles.choose} ${styles.button} bg-gradient-primary`}
        >
          Add
        </button>
      </div>
    </Modal>
  );
}
export default ModalChoose;
