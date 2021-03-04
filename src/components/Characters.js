import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Characters() {
  const [items, setItems] = useState([]);
  const [nextUrl, setNextUrl] = useState(
    "https://rickandmortyapi.com/api/character"
  );
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
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
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

  const clearHandler = () => {
    setFilterInput("");
  };

  return (
    <div>
      <div>Characters</div>
      <div>
        <select onChange={selectFilter} className="filter">
          <option value="name" selected>
            Name
          </option>
          <option value="species">Species</option>
          <option value="status">Status</option>
        </select>
        <input
          onChange={filterInputHandler}
          value={filterInput}
          className="filter"
        />
        <button className="btn-primary" onClick={clearHandler}>
          Clear Filter
        </button>
      </div>
      <div className="shop">
        {items
          .filter(
            (elem) =>
              elem[selectedFilter].toLowerCase().indexOf(filterInput) > -1
          )
          .map((item) => (
            <Link to={`/characters/${item.id}`} className="link">
              <div className="card" key={item.id}>
                <div>{item.name}</div>
                <img
                  src={item.image}
                  alt={item.name}
                  width="200"
                  height="200"
                />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Characters;
