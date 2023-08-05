import { useAtomValue } from "jotai";
import { beveragesAtom } from "../../store/products";
import AppProducts from "../AppProducts";

function CatalogueBeverages() {
  const beverages = useAtomValue(beveragesAtom);

  return (
    <div>
      <AppProducts products={beverages}></AppProducts>
    </div>
  );
}

export default CatalogueBeverages;
