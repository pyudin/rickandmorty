import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Main from "./components/Main";
import Catalog from "./components/Catalog";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route path="/" exact component={Main} />

        <Route
          path="/characters"
          exact
          component={() => (
            <Catalog url={"https://rickandmortyapi.com/api/character"} />
          )}
        />
        {/* <Route path="/characters" exact component={Characters} /> */}
        {/* <Route path="/characters/:id" component={Character} /> */}

        <Route
          path="/episodes"
          exact
          component={() => (
            <Catalog url={"https://rickandmortyapi.com/api/episode"} />
          )}
        />
        {/* <Route path="/episodes/:id" exact component={Episode} /> */}

        <Route
          path="/locations"
          exact
          component={() => (
            <Catalog url={"https://rickandmortyapi.com/api/locations"} />
          )}
        />
        {/* <Route path="/locations" exact component={Locations} /> */}
        {/* <Route path="/locations/:id" exact component={Location} /> */}

        <Route path="/about" exact component={About} />
      </Router>
    </div>
  );
}

export default App;
