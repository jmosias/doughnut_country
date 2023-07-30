import { useAtom, useAtomValue } from "jotai";
import { CartItem, cartAtom } from "../../store/cart";
import { Product, productsAtom } from "../../store/products";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal";
import styles from "./ModalCart.module.css";

interface CartProduct extends Product {
  quantity: CartItem["quantity"];
}

function ModalCart() {
  const navigate = useNavigate();
  const products = useAtomValue(productsAtom);
  const [cart, setCart] = useAtom(cartAtom);
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  const getProductById = useCallback(
    (id: Product["id"]) => {
      return products.filter((product) => id === product.id)[0];
    },
    [products]
  );

  const getCartProducts = useCallback(() => {
    const cartProducts: CartProduct[] = [];
    cart.forEach((item) => {
      cartProducts.push({
        ...getProductById(item.id),
        quantity: item.quantity,
      });
    });
    return cartProducts;
  }, [cart, getProductById]);

  const addQuantityById = (id: Product["id"]) => {
    const filteredItem = cart.filter((item) => item.id === id)[0];
    filteredItem.quantity++;
    updateCartProducts();
  };

  const subtractQuantityById = (id: Product["id"]) => {
    const filteredItem = cart.filter((item) => item.id === id)[0];
    filteredItem.quantity--;
    if (filteredItem.quantity <= 0) removeItemById(id);
    updateCartProducts();
  };

  const removeItemById = (id: Product["id"]) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateCartProducts = useCallback(() => {
    setCartProducts(getCartProducts());
  }, [getCartProducts]);

  useEffect(() => {
    updateCartProducts();
  }, [updateCartProducts]);

  return (
    <Modal>
      <div className={styles.cart}>
        <h2 className={styles.title}>My Order</h2>
        <div className={styles.orders}>
          {cartProducts.map((item) => (
            <div className={styles.item} key={item.id}>
              <div className={styles["img-container"]}>
                <img
                  src={item.img_src}
                  alt={item.name}
                  className={styles.img}
                />
              </div>
              <div className={styles.info}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.subtotal}>
                  &#x20B1;{item.price * item.quantity}
                </p>
                <div className={styles["quantity-container"]}>
                  <button
                    onClick={() => subtractQuantityById(item.id)}
                    className={styles["quantity-button"]}
                  >
                    -
                  </button>
                  <p className={styles.quantity}>{item.quantity}</p>
                  <button
                    onClick={() => addQuantityById(item.id)}
                    className={styles["quantity-button"]}
                  >
                    +
                  </button>
                </div>
                <button onClick={() => removeItemById(item.id)}>x</button>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    </Modal>
  );
}

export default ModalCart;
