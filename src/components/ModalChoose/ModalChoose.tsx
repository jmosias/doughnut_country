import { ReactSortable } from "react-sortablejs";
import { useAtom } from "jotai";
import { Flavour, flavoursAtom } from "../../store/flavours";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal";
import styles from "./ModalChoose.module.css";

function ModalChoose() {
  const navigate = useNavigate();
  const [flavourList, setFlavourList] = useAtom(flavoursAtom);
  const [boxList, setBoxList] = useState<Flavour[]>([]);

  return (
    <Modal>
      <div className={`${styles.catalogue} scrollbar`}>
        <ReactSortable
          list={flavourList}
          setList={setFlavourList}
          group={{ name: "groupName", pull: "clone" }}
          animation={200}
          delayOnTouchOnly
          delay={2}
          className={`${styles.scrollbar} ${styles.flavours}`}
        >
          {flavourList &&
            flavourList.map((flavour) => (
              <div key={flavour.id} className={styles.flavour}>
                <img
                  src={flavour.img_src}
                  alt={`${flavour.name} doughnut from Doughnut Country`}
                  className={styles.image}
                />
                <p className={styles.name}>{flavour.name}</p>
              </div>
            ))}
        </ReactSortable>

        <ReactSortable
          list={boxList}
          setList={setBoxList}
          group="groupName"
          animation={200}
          delayOnTouchOnly
          delay={2}
          className={`${styles.scrollbar} ${styles.flavours} ${styles.boxes}`}
        >
          {boxList &&
            boxList.map((flavour) => (
              <div key={flavour.id} className={`${styles.flavour}`}>
                <img
                  src={flavour.img_src}
                  alt={`${flavour.name} doughnut from Doughnut Country`}
                  className={styles.image}
                />
              </div>
            ))}
        </ReactSortable>
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
          onClick={() => alert("pay")}
          className={`${styles.choose} ${styles.button} bg-gradient-primary`}
        >
          Add
        </button>
      </div>
    </Modal>
  );
}
export default ModalChoose;
