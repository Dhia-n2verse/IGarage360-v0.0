import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Vehicle from "./pages/vehicle";

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <main>
        <Routes>
          <Route path="/vehicles" element={<Vehicle />} />
          {/* autres routes */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
