import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Groups from "./pages/Groups";
import Expenses from "./pages/Expenses";
import ImportPage from "./pages/ImportPage";
import Issues from "./pages/Issues";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/groups"
          element={<Groups />}
        />

        <Route
          path="/expenses"
          element={<Expenses />}
        />

        <Route
          path="/import"
          element={<ImportPage />}
        />

        <Route
          path="/issues"
          element={<Issues />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;