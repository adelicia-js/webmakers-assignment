import "./App.css";
import BackToTop from "./components/Top";
import NavBar from "./components/Header";
import MainSection from "./components/Body";
import FooterSection from "./components/footer/Footer";

function App() {
  return (
    <div
      id="home"
      className="bg-fixed bg-gradient-to-bl from-pink-200 via-white to-white max-w-screen"
    >
      <BackToTop/>
      <NavBar />
      <MainSection/>
      <FooterSection/>
    </div>
  );
}

export default App;
