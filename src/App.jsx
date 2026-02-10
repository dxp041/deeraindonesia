import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Catalog from "./pages/Catalog";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME → REDIRECT */}
        <Route path="/" element={<Navigate to="/catalog" replace />} />

        {/* SINGLE PAGE */}
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  );
}
