import { useAtomValue } from "jotai";
import { customProductAtom, doughnutsAtom } from "../../store/products";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import AppProducts from "../AppProducts";

function CatalogueDoughnuts() {
  const navigate = useNavigate();
  const doughnuts = useAtomValue(doughnutsAtom);
  const customProduct = useAtomValue(customProductAtom);
  const [allDoughnuts, setAllDoughnuts] = useState(doughnuts);

  const chooseDoughnuts = useCallback(() => {
    navigate("/choose");
  }, [navigate]);

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
