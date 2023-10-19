// views
import { About, Contact, Experience, Hero, Projects } from "./views";

// components
import { Menu } from "./components";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Menu />
    </>
  );
}

export default App;
