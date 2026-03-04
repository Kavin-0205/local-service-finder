import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Userregister from "./pages/Userregister";
import Providerregister from "./pages/Providerregister";
import UserDashboard from "./pages/UserDashboard"; 
import ProviderDashboard from "./pages/ProviderDashBoard"; 
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
function App() {
  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/userregister" element={<Userregister />} />
        <Route path="/Providerregister" element={<Providerregister />} />
        <Route path="/UserDashboard" element={< UserDashboard />} />
        <Route path="/ProviderDashboard" element={< ProviderDashboard />} />
        <Route path="/Home" element={< Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;