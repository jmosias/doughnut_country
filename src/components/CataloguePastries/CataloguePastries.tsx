import { useAtomValue } from "jotai";
import { pastriesAtom } from "../../store/products";
import AppProducts from "../AppProducts";

function CataloguePastries() {
  const pastries = useAtomValue(pastriesAtom);
  const title = "Pastries";

  return (
    <div>
      <AppProducts title={title} products={pastries}></AppProducts>
    </div>
  );
}

export default CataloguePastries;
