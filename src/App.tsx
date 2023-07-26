import AppNavigation from "./components/AppNavigation";
import CatalogueNavigation from "./components/CatalogueNavigation";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="main-wrapper">
      <AppNavigation />
      <CatalogueNavigation />
      <div className="outlet-wrapper scrollbar">
        <Outlet />
      </div>
    </main>
  );
}

export default App;
