import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Episodes from "./Episodes";
import Episode from "./Episode";
import Locations from "./Locations";
import Location from "./Location";
import Characters from "./Characters";
import Character from "./Character";

function Catalog({ url }) {
  const [items, setItems] = useState([]);
  const [nextUrl, setNextUrl] = useState(url);
  const [filterInput, setFilterInput] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("name");

  useEffect(() => {
    fetchItem();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [nextUrl]);

  const fetchItem = async () => {
    if (nextUrl === null) return;
    const data = await fetch(nextUrl);
    const el = await data.json();
    setItems((prevItems) => [...prevItems, ...el.results]);
    setNextUrl(el.info.next);
  };

  //Infinite scroll
  const onScroll = () => {
    let nearBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;
    if (nearBottom) fetchItem();
  };

  // Filter
  const filterInputHandler = (e) => {
    setFilterInput(e.target.value);
  };

  const selectFilter = (e) => {
    let idx = e.target.selectedIndex;
    let dataset = e.target.options[idx].value;
    setSelectedFilter(dataset);
  };

  const clearFilterHandler = () => {
    setFilterInput("");
  };

  return (
    <Router>
      <Route
        path="/episodes"
        exact
        component={() => (
          <Episodes
            items={items}
            filterInput={filterInput}
            selectedFilter={selectedFilter}
            filterInputHandler={filterInputHandler}
            selectFilter={selectFilter}
            clearFilterHandler={clearFilterHandler}
          />
        )}
      />
      <Route path="/episodes/:id" exact component={Episode} />

      <Route
        path="/characters"
        exact
        component={() => (
          <Characters
            items={items}
            filterInput={filterInput}
            selectedFilter={selectedFilter}
            filterInputHandler={filterInputHandler}
            selectFilter={selectFilter}
            clearFilterHandler={clearFilterHandler}
          />
        )}
      />
      <Route path="/characters/:id" component={Character} />

      <Route
        path="/locations"
        exact
        component={() => (
          <Locations
            items={items}
            filterInput={filterInput}
            selectedFilter={selectedFilter}
            filterInputHandler={filterInputHandler}
            selectFilter={selectFilter}
            clearFilterHandler={clearFilterHandler}
          />
        )}
      />
      <Route path="/locations/:id" exact component={Location} />
    </Router>
  );
}

export default Catalog;
