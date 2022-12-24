import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import IndividualPage from "./pages/IndividualPage";
import MSMEPage from "./pages/MSMEPage";
import CorporatePage from "./pages/CorporatePage";
import {Routes, Route} from "react-router-dom";
import './app.css';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/individual" element={<IndividualPage/>}/>
        <Route path="/msme" element={<MSMEPage/>}/>
        <Route path="/corporate" element={<CorporatePage/>}/>
      </Routes>
    </>
  );
}

export default App;
