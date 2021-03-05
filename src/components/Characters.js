import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Characters({
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
        <h1>Characters</h1>
      </div>
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
