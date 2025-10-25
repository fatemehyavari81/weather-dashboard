import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import type { ThemeMode } from "../theme";

interface AppRoutesProps {
  currentMode: ThemeMode;
  setMode: (m: ThemeMode) => void;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ currentMode, setMode }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={<Dashboard currentMode={currentMode} setMode={setMode} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
