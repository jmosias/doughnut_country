import { Outlet } from "react-router-dom";
import { useAtom, useAtomValue } from "jotai";
import { useBreakpoint } from "use-breakpoint";
import {
  breakpointsAtom,
  isCartOpenAtom,
  isChooseOpenAtom,
  isPaymentOpenAtom,
} from "./store/modals";
import AppHeader from "./components/AppHeader";
import CatalogueNavigation from "./components/CatalogueNavigation";
import FABCart from "./components/FABCart";
import ModalCart from "./components/ModalCart";
import ModalChoose from "./components/ModalChoose";
import ModalPayment from "./components/ModalPayment";
import { useEffect } from "react";

function App() {
  const [isCartOpen, setCartOpen] = useAtom(isCartOpenAtom);
  const isChooseOpen = useAtomValue(isChooseOpenAtom);
  const isPaymentOpen = useAtomValue(isPaymentOpenAtom);
  const breakpoints = useAtomValue(breakpointsAtom);
  const { breakpoint } = useBreakpoint(breakpoints);

  useEffect(() => {
    if (breakpoint !== "mobile") {
      setCartOpen(true);
    }
  }, [breakpoint, setCartOpen]);

  return (
    <div className="main-wrapper">
      <main className="main-container">
        <AppHeader />
        <CatalogueNavigation />
        <div className="outlet-wrapper scrollbar">
          <Outlet />
        </div>
        {breakpoint === "mobile" && <FABCart></FABCart>}
      </main>
      {isCartOpen && <ModalCart />}
      {isChooseOpen && <ModalChoose />}
      {isPaymentOpen && <ModalPayment />}
    </div>
  );
}

export default App;
