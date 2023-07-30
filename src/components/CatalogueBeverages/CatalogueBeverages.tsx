import { useAtomValue } from "jotai";
import { beveragesAtom } from "../../store/products";
import AppProducts from "../AppProducts";

function CatalogueBeverages() {
  const beverages = useAtomValue(beveragesAtom);
  const title = "Beverages";

  return (
    <div>
      <AppProducts title={title} products={beverages}></AppProducts>
    </div>
  );
}

export default CatalogueBeverages;
