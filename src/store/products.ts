import { atom } from "jotai";

import PremiumBox from "../assets/images/doughnut/box_premium.png";
import ClassicBox from "../assets/images/doughnut/box_classic.png";
import GlazedBox from "../assets/images/doughnut/box_glazed.png";
import CinnamonRolls from "../assets/images/pastry/cinnamon_rolls.png";
import CountryBites from "../assets/images/pastry/country_bites.png";
import PaperCup from "../assets/images/beverage/paper_cup.png";

export interface Product {
  id: string;
  category: "Doughnuts" | "Pastries" | "Beverages";
  img_src: string;
  name: string;
  price: number;
  description?: string;
  button_name?: string;
  button_function?: () => void;
}

const productsAtom = atom<Product[]>([
  {
    id: "do1",
    category: "Doughnuts",
    img_src: PremiumBox,
    name: "Premium Box",
    description: "Get 6 doughnuts from the newest flavours",
    price: 199,
  },
  {
    id: "do2",
    category: "Doughnuts",
    img_src: ClassicBox,
    name: "Classic Box",
    description: "Get 6 doughnuts from the classic flavours",
    price: 199,
  },
  {
    id: "do3",
    category: "Doughnuts",
    img_src: GlazedBox,
    name: "Honey Glazed Box",
    description: "Get 6 honey glazed doughnuts",
    price: 199,
  },
  {
    id: "pa0",
    category: "Pastries",
    img_src: CinnamonRolls,
    name: "Cinnamon Rolls",
    description: "Get 12 cinnamon rolls",
    price: 249,
  },
  {
    id: "pa1",
    category: "Pastries",
    img_src: CountryBites,
    name: "Country Bites",
    description: "Get 16 honey glazed country bites",
    price: 109,
  },
  {
    id: "be0",
    category: "Beverages",
    img_src: PaperCup,
    name: "Iced Coffee",
    description: "Get 12 oz of iced coffee",
    price: 49,
  },
  {
    id: "be1",
    category: "Beverages",
    img_src: PaperCup,
    name: "Iced Choco",
    description: "Get 12 oz of iced choco",
    price: 49,
  },
  {
    id: "be2",
    category: "Beverages",
    img_src: PaperCup,
    name: "Cold Milk",
    description: "Get 12 oz of cold milk",
    price: 39,
  },
  {
    id: "be3",
    category: "Beverages",
    img_src: PaperCup,
    name: "Hot Coffee",
    description: "Get 12 oz of hot coffee",
    price: 49,
  },
  {
    id: "be4",
    category: "Beverages",
    img_src: PaperCup,
    name: "Hot Choco",
    description: "Get 12 oz of hot choco",
    price: 49,
  },
]);

const doughnutsAtom = atom((get) => {
  const products = get(productsAtom);
  return products.filter((product) => product.category === "Doughnuts");
});

const pastriesAtom = atom((get) => {
  const products = get(productsAtom);
  return products.filter((product) => product.category === "Pastries");
});

const beveragesAtom = atom((get) => {
  const products = get(productsAtom);
  return products.filter((product) => product.category === "Beverages");
});

export { productsAtom, doughnutsAtom, pastriesAtom, beveragesAtom };
