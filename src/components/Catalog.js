import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Episodes from "./Episodes";

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
    // console.log(el.results);
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
    <Episodes
      items={items}
      filterInput={filterInput}
      selectedFilter={selectedFilter}
      filterInputHandler={filterInputHandler}
      selectFilter={selectFilter}
      clearFilterHandler={clearFilterHandler}
    ></Episodes>
  );
}

export default Catalog;
