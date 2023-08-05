import { atom } from "jotai";

import AlmondButter from "../assets/images/doughnut/flavours/almond_butter.png";
import Blueberry from "../assets/images/doughnut/flavours/blueberry.png";
import Cappuccino from "../assets/images/doughnut/flavours/cappuccino.png";
import Caramel from "../assets/images/doughnut/flavours/caramel.png";
import Coconut from "../assets/images/doughnut/flavours/coconut.png";
import DarkChoco from "../assets/images/doughnut/flavours/dark_choco.png";
import DarkOreo from "../assets/images/doughnut/flavours/dark_oreo.png";
import HoneyGlazed from "../assets/images/doughnut/flavours/honey_glazed.png";
import IcyGlazed from "../assets/images/doughnut/flavours/icy_glazed.png";
import Kitkat from "../assets/images/doughnut/flavours/kitkat.png";
import Nutella from "../assets/images/doughnut/flavours/nutella.png";
import NuttyRoad from "../assets/images/doughnut/flavours/nutty_road.png";
import Smores from "../assets/images/doughnut/flavours/smores.png";
import Strawberry from "../assets/images/doughnut/flavours/strawberry.png";
import WhiteChoco from "../assets/images/doughnut/flavours/white_choco.png";

export interface Flavour {
  id: number;
  name: string;
  img_src: string;
}

const flavoursAtom = atom<Flavour[]>([
  { id: 1, name: "Almond Butter", img_src: AlmondButter },
  { id: 2, name: "Blueberry", img_src: Blueberry },
  { id: 3, name: "Cappuccino", img_src: Cappuccino },
  { id: 4, name: "Caramel", img_src: Caramel },
  { id: 5, name: "Coconut", img_src: Coconut },
  { id: 6, name: "Dark Choco", img_src: DarkChoco },
  { id: 7, name: "Dark Oreo", img_src: DarkOreo },
  { id: 8, name: "Honey Glazed", img_src: HoneyGlazed },
  { id: 9, name: "Icy Glazed", img_src: IcyGlazed },
  { id: 10, name: "Kitkat", img_src: Kitkat },
  { id: 11, name: "Nutella", img_src: Nutella },
  { id: 12, name: "Nutty Road", img_src: NuttyRoad },
  { id: 13, name: "Smores", img_src: Smores },
  { id: 14, name: "Strawberry", img_src: Strawberry },
  { id: 15, name: "White Choco", img_src: WhiteChoco },
]);

export { flavoursAtom };
