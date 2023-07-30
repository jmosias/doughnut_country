import { Product } from "../../store/products";
import AppProduct from "../AppProduct/AppProduct";
import styles from "./AppProducts.module.css";

interface AppProductsProps {
  title: string;
  products: Product[];
}

function AppProducts({ title, products }: AppProductsProps) {
  return (
    <>
      <h2 className={`${styles.title} special`}>{title}</h2>
      <div className={styles.products}>
        {products.map((product) => (
          <AppProduct
            key={product.id}
            id={product.id}
            category={product.category}
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
