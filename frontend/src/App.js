import Header from "./components/Header";
import ProjectOverview from "./components/ProjectOverview";
import MathematicalModel from "./components/MathematicalModel";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />

      <ProjectOverview />

      <MathematicalModel />

      <Calculator />

      <Footer />
    </div>
  );
}

export default App;
