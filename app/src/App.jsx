import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Userregister from "./pages/Userregister";
import Providerregister from "./pages/Providerregister";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/userregister" element={<Userregister />} />
        <Route path="/Providerregister" element={<Providerregister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;