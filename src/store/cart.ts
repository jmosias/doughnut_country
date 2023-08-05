import { atom } from "jotai";
import { Product } from "./products";

export interface CartItem {
  id: Product["id"];
  quantity: number;
}

const cartAtom = atom<CartItem[]>([]);

const cartLengthAtom = atom((get) => {
  const cart = get(cartAtom);
  return cart.length;
});

export { cartAtom, cartLengthAtom };
