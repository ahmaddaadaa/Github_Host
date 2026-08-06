import Header from "./components/Header";
import Intro from "./components/Intro";
import Features from "./components/Features";
import ProjectOverview from "./components/ProjectOverview";
import Methods from "./components/Methods";
import Demos from "./components/Demos";
import Team from "./components/Team";
import Footer from "./components/Footer";
import "./App.css";

// static project page for our ECE 499 final deliverable
function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Intro />
        <Features />
        <ProjectOverview />
        <Methods />
        <Demos />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;
