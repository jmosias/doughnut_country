import { useAtomValue } from "jotai";
import { doughnutsAtom } from "../../store/products";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import EmptyBox from "../../assets/images/doughnut/box_empty.png";
import AppProducts from "../AppProducts";

function CatalogueDoughnuts() {
  const navigate = useNavigate();
  const doughnuts = useAtomValue(doughnutsAtom);
  const [allDoughnuts, setAllDoughnuts] = useState(doughnuts);

  const chooseDoughnuts = useCallback(() => {
    navigate("/choose");
  }, [navigate]);

  useEffect(() => {
    setAllDoughnuts([
      {
        id: "do0",
        category: "Doughnuts",
        img_src: EmptyBox,
        name: "Customized Box",
        description: "Choose 6 doughnuts from all 15 flavours",
        price: 199,
        button_name: "Choose",
        button_function: chooseDoughnuts,
      },
      ...doughnuts,
    ]);
  }, [doughnuts, chooseDoughnuts]);

  return (
    <div>
      <AppProducts products={allDoughnuts}></AppProducts>
    </div>
  );
}

export default CatalogueDoughnuts;
