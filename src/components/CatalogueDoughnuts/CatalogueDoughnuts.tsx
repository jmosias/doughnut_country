import { useAtomValue } from "jotai";
import { doughnutsAtom } from "../../store/products";
import AppProducts from "../AppProducts";

function CatalogueDoughnuts() {
  const doughnuts = useAtomValue(doughnutsAtom);
  const title = "Doughnuts";

  return (
    <div>
      <AppProducts title={title} products={doughnuts}></AppProducts>
    </div>
  );
}

export default CatalogueDoughnuts;
