import './index.css';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer"
import CreatorsSection from "./components/CreatorsSection";
import WeatherSection from "./components/WeatherSection";
import Support from "./components/Support";

function App() {
  return (
    <>
      <Navigation/>
        <CreatorsSection/>
        <WeatherSection/>
        <Support/>
      <Footer/>
    </>
  );
}

export default App;
