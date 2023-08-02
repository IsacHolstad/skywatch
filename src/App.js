import './index.css';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer"
import CreatorsSection from "./components/CreatorsSection";
import WeatherSection from "./components/WeatherSection";

function App() {
  return (
    <>
      <Navigation/>
        <CreatorsSection/>
        <WeatherSection/>
      <Footer/>
    </>
  );
}

export default App;
