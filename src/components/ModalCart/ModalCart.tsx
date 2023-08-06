import { useAtom, useAtomValue } from "jotai";
import { CartItem, cartAtom, customCartAtom } from "../../store/cart";
import { Product, customProductAtom, productsAtom } from "../../store/products";
import { Flavour } from "../../store/flavours";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal";
import styles from "./ModalCart.module.css";
import AppIcon from "../AppIcon";

interface CartProduct extends Product {
  quantity: CartItem["quantity"];
  flavours?: Flavour[];
}

function ModalCart() {
  const navigate = useNavigate();
  const products = useAtomValue(productsAtom);
  const customProduct = useAtom(customProductAtom);
  const [cart, setCart] = useAtom(cartAtom);
  const [customCart, setCustomCart] = useAtom(customCartAtom);
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  const [total, setTotal] = useState("0");

  const pay = () => {
    navigate("/payment");
  };

  const getProductById = useCallback(
    (id: Product["id"]) => {
      return products.filter((product) => id === product.id)[0];
    },
    [products]
  );

  const getCartProducts = useCallback(() => {
    const cartProducts: CartProduct[] = [];
    customCart.forEach((item) => {
      cartProducts.push({
        ...customProduct[0],
        flavours: item.flavours,
        quantity: 1,
      });
    });
    cart.forEach((item) => {
      cartProducts.push({
        ...getProductById(item.id),
        quantity: item.quantity,
      });
    });
    return cartProducts;
  }, [cart, getProductById, customCart, customProduct]);

  const updateTotal = useCallback(() => {
    let total = 0;
    getCartProducts().forEach((product) => {
      total += product.price * product.quantity;
    });
    setTotal((Math.round(total * 100) / 100).toFixed(2));
  }, [getCartProducts]);

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

  const removeCustom = (index: number) => {
    setCustomCart(customCart.filter((item, i) => i !== index && item));
  };

  const updateCartProducts = useCallback(() => {
    setCartProducts(getCartProducts());
    updateTotal();
  }, [getCartProducts, updateTotal]);

  useEffect(() => {
    updateCartProducts();
  }, [updateCartProducts, cartProducts]);

  return (
    <Modal>
      <div className={styles.header}>
        <h2 className={styles.title}>Your Order</h2>
        <button onClick={() => navigate(-1)} className={styles.close}>
          Close
        </button>
      </div>
      <div className={`${styles.orders} scrollbar`}>
        {cartProducts.length <= 0 ? (
          <div className={styles.empty}>
            <AppIcon name="doughnut_box" />
            <p>Your cart is empty</p>
          </div>
        ) : (
          cartProducts.length > 0 &&
          cartProducts.map((item, index) => (
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
                {item.flavours && (
                  <div>
                    {item.flavours.map((e) => (
                      <p>1x {e.name}</p>
                    ))}
                  </div>
                )}
                {!item.flavours && (
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
                )}
              </div>
              <div className={styles.price}>
                <p className={styles.subtotal}>
                  &#x20B1;{item.price * item.quantity}
                </p>
              </div>
              <div>
                <button
                  onClick={
                    item.flavours
                      ? () => removeCustom(index)
                      : () => removeItemById(item.id)
                  }
                  className={styles.remove}
                >
                  -
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className={styles.footer}>
        {cartProducts.length > 0 && (
          <p className={styles.total}>
            Total <span className={styles.price}>&#x20B1; {total}</span>
          </p>
        )}
        <button
          disabled={cartProducts.length <= 0}
          onClick={() => pay()}
          className={`${styles.pay} bg-gradient-primary`}
        >
          Review Payment
        </button>
      </div>
    </Modal>
  );
}

export default ModalCart;
