import "./App.css";
// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

const App = () => {
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "https://portfolio-lab-v101.herokuapp.com/";
  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/projects">
        <Projects URL={URL} />
      </Route>
      <Route path="/about">
        <About URL={URL} />
      </Route>
      <Footer />
    </div>
  );
};

export default App;
