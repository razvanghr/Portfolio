import Navbar from "./components/Navbar";
import Main from "./components/Main";

import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
