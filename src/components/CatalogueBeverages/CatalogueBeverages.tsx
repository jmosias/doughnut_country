import PaperCup from "../../assets/images/beverage/paper_cup.png";
import AppProducts from "../AppProducts";
import { AppProductsProps } from "../AppProducts/AppProducts";

const products: AppProductsProps["products"] = [
  {
    id: "7",
    img_src: PaperCup,
    name: "Iced Coffee",
    description: "Get 12 oz of iced coffee",
    price: 49,
  },
  {
    id: "8",
    img_src: PaperCup,
    name: "Iced Choco",
    description: "Get 12 oz of iced choco",
    price: 49,
  },
  {
    id: "9",
    img_src: PaperCup,
    name: "Cold Milk",
    description: "Get 12 oz of cold milk",
    price: 39,
  },
  {
    id: "10",
    img_src: PaperCup,
    name: "Hot Coffee",
    description: "Get 12 oz of hot coffee",
    price: 49,
  },
  {
    id: "11",
    img_src: PaperCup,
    name: "Hot Choco",
    description: "Get 12 oz of hot choco",
    price: 49,
  },
];

const title = "Beverages";

function CatalogueBeverages() {
  return (
    <div>
      <AppProducts title={title} products={products}></AppProducts>
    </div>
  );
}

export default CatalogueBeverages;
