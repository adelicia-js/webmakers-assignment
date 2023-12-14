import "./App.css";
import BackToTop from "./components/Top";
import NavBar from "./components/Nav";
import Introduction from "./components/Intro";

function App() {
  return (
    <div
      id="home"
      className="p-8 bg-fixed bg-gradient-to-bl from-pink-200/60 via-white to-white max-w-screen"
    >
      <BackToTop/>
      <NavBar />
      <main>
        <Introduction />
        <section id="how-it-works"></section>
        <section id="pricing"></section>
        <section id="faq"></section>
        <section id="contact-us"></section>
      </main>
      <footer id="footer"></footer>
    </div>
  );
}

export default App;
