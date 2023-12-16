import "./App.css";
import BackToTop from "./components/Top";
import NavBar from "./components/Header";
import MainSection from "./components/Body";
import FooterSection from "./components/Footer";

function App() {
  return (
    <div
      id="home"
      className="bg-fixed bg-gradient-to-bl from-pink-200 via-white to-white max-w-screen"
    >
      {/* A back to top button that is fixed close to the bottom, visible at all times */}
      <BackToTop/>

      {/* Navigation Bar(s) - Different for mobiles / bigger devices */}
      <NavBar />

      {/* Main Section */}
      <MainSection/>

      {/* Footer */}
      <FooterSection/>
    </div>
  );
}

export default App;
