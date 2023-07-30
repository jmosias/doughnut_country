import { atom } from "jotai";
import { Product } from "./products";

export interface CartItem {
  id: Product["id"];
  quantity: number;
}

const cartAtom = atom<CartItem[]>([]);

export { cartAtom };
