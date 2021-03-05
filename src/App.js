import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Characters from "./components/Characters";
import Character from "./components/Character";
import Episodes from "./components/Episodes";
import Locations from "./components/Locations";
import Nav from "./components/Nav";
import Location from "./components/Location";
import Episode from "./components/Episode";
import About from "./components/About";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route path="/" exact component={Main} />

        <Route path="/characters" exact component={Characters} />
        <Route path="/characters/:id" component={Character} />

        <Route path="/episodes" exact component={Episodes} />
        <Route path="/episodes/:id" exact component={Episode} />

        <Route path="/locations" exact component={Locations} />
        <Route path="/locations/:id" exact component={Location} />

        <Route path="/about" exact component={About} />
      </Router>
    </div>
  );
}

export default App;
