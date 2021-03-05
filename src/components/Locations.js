import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Locations({
  items,
  filterInput,
  selectedFilter,
  filterInputHandler,
  selectFilter,
  clearFilterHandler,
}) {
  return (
    <div>
      <div className="title">
        <h1>Locations</h1>
      </div>
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
            <Link to={`/locations/${item.id}`} className="link">
              <div className="card" key={item.id}>
                <div>Name: {item.name}</div>
                <div>Dimension: {item.dimension}</div>
                <div>Type: {item.type}</div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Locations;
