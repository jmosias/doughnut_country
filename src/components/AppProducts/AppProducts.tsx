import AppProduct, { AppProductProps } from "../AppProduct/AppProduct";
import styles from "./AppProducts.module.css";

export interface AppProductsProps {
  title: string;
  products: AppProductProps[];
}

function AppProducts({
  title,
  products,
}: {
  title: AppProductsProps["title"];
  products: AppProductsProps["products"];
}) {
  return (
    <>
      <h2 className={`${styles.title} special`}>{title}</h2>
      <div className={styles.products}>
        {products.map((product) => (
          <AppProduct
            key={product.id}
            img_src={product.img_src}
            name={product.name}
            price={product.price}
            description={product.description}
            button_name={product.button_name}
            button_function={product.button_function}
          ></AppProduct>
        ))}
      </div>
    </>
  );
}

export default AppProducts;
