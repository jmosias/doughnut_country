import { useAtomValue, useSetAtom } from "jotai";
import { customProductAtom, doughnutsAtom } from "../../store/products";
import { useCallback, useEffect, useState } from "react";
import {
  isCartOpenAtom,
  isChooseOpenAtom,
  isPaymentOpenAtom,
} from "../../store/modals";
import AppProducts from "../AppProducts";

function CatalogueDoughnuts() {
  const setCartOpen = useSetAtom(isCartOpenAtom);
  const setChooseOpen = useSetAtom(isChooseOpenAtom);
  const setPaymentOpen = useSetAtom(isPaymentOpenAtom);
  const doughnuts = useAtomValue(doughnutsAtom);
  const customProduct = useAtomValue(customProductAtom);
  const [allDoughnuts, setAllDoughnuts] = useState(doughnuts);

  const chooseDoughnuts = useCallback(() => {
    setCartOpen(false);
    setPaymentOpen(false);
    setChooseOpen(true);
  }, [setChooseOpen, setCartOpen, setPaymentOpen]);

  useEffect(() => {
    setAllDoughnuts([
      {
        ...customProduct,
        button_function: chooseDoughnuts,
      },
      ...doughnuts,
    ]);
  }, [doughnuts, chooseDoughnuts, customProduct]);

  return (
    <div>
      <AppProducts products={allDoughnuts}></AppProducts>
    </div>
  );
}

export default CatalogueDoughnuts;
