import "./App.css";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import WhiteSpace from "./Components/WhiteSpace";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <WhiteSpace />
      <AboutMe />
      <WhiteSpace />
      <Projects />
      <WhiteSpace />
      <Footer />
      <Contact />
    </div>
  );
}

export default App;
