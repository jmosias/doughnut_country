import CinnamonRolls from "../../assets/images/pastry/cinnamon_rolls.png";
import CountryBites from "../../assets/images/pastry/country_bites.png";
import AppProducts from "../AppProducts";
import { AppProductsProps } from "../AppProducts/AppProducts";

const products: AppProductsProps["products"] = [
  {
    id: "5",
    img_src: CinnamonRolls,
    name: "Cinnamon Rolls",
    description: "Get 12 cinnamon rolls",
    price: 249,
  },
  {
    id: "6",
    img_src: CountryBites,
    name: "Country Bites",
    description: "Get 16 honey glazed country bites",
    price: 109,
  },
];

const title = "Pastries";

function CataloguePastries() {
  return (
    <div>
      <AppProducts title={title} products={products}></AppProducts>
    </div>
  );
}

export default CataloguePastries;
