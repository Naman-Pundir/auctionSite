import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./scenes/Landing/landing";
import { GlobalStyle } from "./GlobalStyle";
import Blogin from "./scenes/BuyerLogin/Blogin";
import Bsignup from "./scenes/BuyerSignup/Bsignup";
import Slogin from "./scenes/SellerLogin/Slogin";
import Ssignup from "./scenes/SellerSignup/Ssignup";
import Sdashboard from "./scenes/SellerDashboard/Sdashboard";
import Bdashboard from "./scenes/BuyerDashboard/Bdashboard";
import Additem from "./scenes/Additem/Additem";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <GlobalStyle/>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/buyerLogin" element={<Blogin/>}/>
          <Route path="/buyerSignup" element={<Bsignup/>}/>
          <Route path="/sellerLogin" element={<Slogin/>}/>
          <Route path="/sellerSignup" element={<Ssignup/>}/>
          <Route path="/sellerDashboard" element={<Sdashboard/>}/>
          <Route path="/buyerDashboard" element={<Bdashboard/>}/>
          <Route path="/addItem" element={<Additem/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
