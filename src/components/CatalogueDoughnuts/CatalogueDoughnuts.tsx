import PremiumBox from "../../assets/images/doughnut/box_premium.png";
import ClassicBox from "../../assets/images/doughnut/box_classic.png";
import GlazedBox from "../../assets/images/doughnut/box_glazed.png";
import EmptyBox from "../../assets/images/doughnut/box_empty.png";
import AppProducts from "../AppProducts";
import { AppProductsProps } from "../AppProducts/AppProducts";

const products: AppProductsProps["products"] = [
  {
    id: "0",
    img_src: EmptyBox,
    name: "Customized Box",
    description: "Choose 6 doughnuts from all 15 flavours",
    price: 199,
    button_name: "Customize",
  },
  {
    id: "1",
    img_src: PremiumBox,
    name: "Premium Box",
    description: "Get 6 doughnuts from the newest flavours",
    price: 199,
  },
  {
    id: "2",
    img_src: ClassicBox,
    name: "Classic Box",
    description: "Get 6 doughnuts from the classic flavours",
    price: 199,
  },
  {
    id: "3",
    img_src: GlazedBox,
    name: "Honey Glazed Box",
    description: "Get 6 honey glazed doughnuts",
    price: 199,
  },
];

const title = "Doughnuts";

function CatalogueDoughnuts() {
  return (
    <div>
      <AppProducts title={title} products={products}></AppProducts>
    </div>
  );
}

export default CatalogueDoughnuts;
