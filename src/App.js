import "./App.css";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import WhiteSpace from "./Components/WhiteSpace";

function App() {
  return (
    <div>
      <Header />
      <WhiteSpace />
      <AboutMe />
      <WhiteSpace />
      <Projects />
      <WhiteSpace />
      <Contact />
      <WhiteSpace />
      <Footer />
    </div>
  );
}

export default App;
