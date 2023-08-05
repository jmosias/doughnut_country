import { Outlet } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import CatalogueNavigation from "./components/CatalogueNavigation";
import FABCart from "./components/FABCart";

function App() {
  return (
    <main className="main-wrapper">
      <AppHeader />
      <CatalogueNavigation />
      <div className="outlet-wrapper scrollbar">
        <Outlet />
      </div>
      <FABCart></FABCart>
    </main>
  );
}

export default App;
