import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Episodes({
  items,
  filterInput,
  selectedFilter,
  filterInputHandler,
  selectFilter,
  clearFilterHandler,
}) {
  useEffect(() => {
    console.log(items);
  }, []);
  return (
    <div>
      <div className="title">
        <h1>Episodes</h1>
      </div>
      <div>
        <select onChange={selectFilter} className="filter">
          <option value="name" selected>
            Name
          </option>
          <option value="episode">Episode</option>
          <option value="air_date">Air date</option>
        </select>
        <input
          onChange={filterInputHandler}
          value={filterInput}
          className="filter"
        />
        <button className="btn-primary" onClick={clearFilterHandler}>
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
            <Link to={`/episodes/${item.id}`} className="link" key={item.id}>
              <div className="card">
                <div>Episode: {item.episode}</div>
                <div>Name: {item.name}</div>
                <div>Air date: {item.air_date}</div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Episodes;
