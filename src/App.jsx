import HorizontalNavigation from "./components/HorizontalNavigation";
import VerticalNavigation from "./components/VerticalNavigation";

// Main Components

import MainIntroduction from "./components/MainIntroduction";
import AboutComponent from "./components/AboutComponent";
import ProjectsComponent from "./components/ProjectsComponent";
import ExperienceComponent from "./components/ExperienceComponent";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <header>
        <HorizontalNavigation />
        <VerticalNavigation />
      </header>
      <main>
        <MainIntroduction />
        <AboutComponent />
        <ProjectsComponent />
        <ExperienceComponent />
        <Contact />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
