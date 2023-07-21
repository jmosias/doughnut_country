import AppNavigation from "./components/AppNavigation";
import CatalogueNavigation from "./components/CatalogueNavigation";
import Catalogue from "./components/Catalogue";

function App() {
  return (
    <main className="main-wrapper">
      <AppNavigation />
      <CatalogueNavigation />
      <Catalogue />
    </main>
  );
}

export default App;
