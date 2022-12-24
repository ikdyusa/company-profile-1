import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import IndividualPage from "./components/IndividualPage";
import MSMEPage from "./components/MSMEPage";
import CorporatePage from "./components/CorporatePage";

function App() {
  let Componenent;

  switch (window.location.pathname) {
    case '/':
      Componenent = HomePage;
      break;
    case '/individual':
      Componenent = IndividualPage;
      break;
    case '/msme':
      Componenent = MSMEPage;
      break;
    case '/corporate':
      Componenent = CorporatePage;
      break;
    default:
      // code block
  }
  return (
    <>
      <Navbar/>
      <Componenent/>
    </>
  );
}

export default App;
