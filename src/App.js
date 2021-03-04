import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Characters from "./components/Characters";
import Character from "./components/Character";
import Episodes from "./components/Episodes";
import Locations from "./components/Locations";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route path="/characters" exact component={Characters} />
        <Route path="/characters/:id" component={Character} />

        <Route path="/episodes" exact component={Episodes} />
        <Route path="/locations" exact component={Locations} />
      </Router>
    </div>
  );
}

export default App;
