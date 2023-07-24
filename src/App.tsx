import AppNavigation from "./components/AppNavigation";
import CatalogueNavigation from "./components/CatalogueNavigation";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="main-wrapper">
      <AppNavigation />
      <CatalogueNavigation />
      <Outlet />
    </main>
  );
}

export default App;
