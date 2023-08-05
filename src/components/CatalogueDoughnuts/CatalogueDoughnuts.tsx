import { useAtomValue } from "jotai";
import { doughnutsAtom } from "../../store/products";
import AppProducts from "../AppProducts";

function CatalogueDoughnuts() {
  const doughnuts = useAtomValue(doughnutsAtom);

  return (
    <div>
      <AppProducts products={doughnuts}></AppProducts>
    </div>
  );
}

export default CatalogueDoughnuts;
