import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Locations() {
  const [items, setItems] = useState([]);
  const [nextUrl, setNextUrl] = useState(
    `https://rickandmortyapi.com/api/location`
  );
  const [filterInput, setFilterInput] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("name");

  useEffect(() => {
    fetchItem(nextUrl);
  }, []);

  const fetchItem = async (url) => {
    if (nextUrl === null) return;
    const data = await fetch(url);
    const item = await data.json();
    console.log(item.results);
    setItems((prevItems) => [...prevItems, ...item.results]);
    setNextUrl(item.info.next);
  };

  const filterInputHandler = (e) => {
    setFilterInput(e.target.value);
  };

  const selectFilter = (e) => {
    let idx = e.target.selectedIndex;
    let dataset = e.target.options[idx].value;
    setSelectedFilter(dataset);
  };

  return (
    <div>
      <div>Locations</div>
      <div>
        <select onChange={selectFilter} className="filter">
          <option value="name" selected>
            Name
          </option>
          <option value="dimension">Dimension</option>
          <option value="type">Type</option>
        </select>
        <input
          onChange={filterInputHandler}
          value={filterInput}
          className="filter"
        />
        <button>Clear Filter</button>
      </div>
      <div className="shop">
        {items
          .filter(
            (elem) =>
              elem[selectedFilter].toLowerCase().indexOf(filterInput) > -1
          )
          .map((item) => (
            <Link to={`/locations/${item.id}`} className="link">
              <div className="card" key={item.id}>
                <div>Name: {item.name}</div>
                <div>Dimension: {item.dimension}</div>
                <div>Type: {item.type}</div>
              </div>
            </Link>
          ))}
        <button onClick={() => fetchItem(nextUrl)}>Next</button>
      </div>
    </div>
  );
}

export default Locations;
