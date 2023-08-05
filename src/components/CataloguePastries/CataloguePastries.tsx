import { useAtomValue } from "jotai";
import { pastriesAtom } from "../../store/products";
import AppProducts from "../AppProducts";

function CataloguePastries() {
  const pastries = useAtomValue(pastriesAtom);

  return (
    <div>
      <AppProducts products={pastries}></AppProducts>
    </div>
  );
}

export default CataloguePastries;
