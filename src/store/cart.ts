import { atom } from "jotai";
import { Product } from "./products";
import { Flavour } from "./flavours";

export interface CartItem {
  id: Product["id"];
  quantity: number;
}

export interface CustomItem {
  flavours: Flavour[];
}

const cartAtom = atom<CartItem[]>([]);
const customCartAtom = atom<CustomItem[]>([]);

const cartLengthAtom = atom((get) => {
  const cart = get(cartAtom);
  const customCart = get(customCartAtom);
  return cart.length + customCart.length;
});

export { cartAtom, customCartAtom, cartLengthAtom };
