import styles from "./AppProduct.module.css";

export interface AppProductProps {
  id: string;
  img_src: string;
  name: string;
  price: number;
  description?: string;
  button_name?: string;
  button_function?: () => void;
}

function AppProduct({
  img_src,
  name,
  price,
  description,
  button_name,
  button_function,
}: {
  img_src: AppProductProps["img_src"];
  name: AppProductProps["name"];
  price: AppProductProps["price"];
  description: AppProductProps["description"];
  button_name: AppProductProps["button_name"];
  button_function: AppProductProps["button_function"];
}) {
  const defaultButtonName = "Add to Order";
  const defaultProductFunction = () => {
    console.log("test");
  };

  return (
    <div className={styles.product}>
      <div className={styles["image-container"]}>
        <img src={img_src} alt={name} className={styles.image} />
      </div>
      <div className={styles["product-info"]}>
        <p className={`${styles["product-name"]} special`}>{name}</p>
        <p className={styles.price}>
          <span className={styles.currency}>&#x20B1;</span> {price}
        </p>
        <p className={styles.description}> - {description}</p>
        <button
          className={styles.button}
          onClick={(e) => {
            e.preventDefault();
            if (button_function) {
              button_function();
            } else {
              defaultProductFunction();
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
