import { useAtom } from "jotai";
import { cartAtom } from "../../store/cart";
import { Product } from "../../store/products";
import styles from "./AppProduct.module.css";

function AppProduct({
  id,
  img_src,
  name,
  price,
  description,
  button_name,
  button_function,
}: Product) {
  const [cart, setCart] = useAtom(cartAtom);

  const defaultButtonName = "Add";
  const defaultProductFunction = (id: Product["id"]) => {
    const filteredItem = cart.filter((item) => item.id === id)[0];

    if (filteredItem) {
      filteredItem.quantity++;
    } else {
      setCart((cart) => [
        ...cart,
        {
          id,
          quantity: 1,
        },
      ]);
    }
  };

  return (
    <div className={styles.product}>
      <div className={styles["image-container"]}>
        <img src={img_src} alt={name} className={styles.image} />
      </div>
      <div className={styles["product-info"]}>
        <p className={styles["product-name"]}>{name}</p>
        <p className={styles.price}>
          <span className={styles.currency}>&#x20B1;</span> {price}
        </p>
        <p className={styles.description}>- {description}</p>
        <button
          className={`${styles.button} bg-gradient-primary`}
          onClick={(e) => {
            e.preventDefault();
            if (button_function) {
              button_function();
            } else {
              defaultProductFunction(id);
            }
          }}
        >
          {button_name ? button_name : defaultButtonName}
        </button>
      </div>
    </div>
  );
}

export default AppProduct;
