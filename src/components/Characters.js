import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Characters() {
  const [items, setItems] = useState([]);
  const [nextUrl, setNextUrl] = useState(
    "https://rickandmortyapi.com/api/character"
  );
  const [filterInput, setFilterInput] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("name");

  //Infinite scroll
  const onScroll = () => {
    let nearBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
    console.log(nextUrl);
    // if (nearBottom) fetchItem();
    return nearBottom;
  };
  useEffect(() => {
    fetchItem();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    fetchItem();
  }, [onScroll]);

  const fetchItem = async () => {
    if (nextUrl === null) return;
    const data = await fetch(nextUrl);
    const el = await data.json();
    console.log(el);
    setItems((prevItems) => [...prevItems, ...el.results]);
    setNextUrl((prev) => {
      console.log("prev  ", prev);
      console.log("set ", el.info.next);
      return el.info.next;
    });
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
      <button onClick={() => fetchItem(nextUrl)}>Next</button>
    </div>
  );
}

export default Characters;
