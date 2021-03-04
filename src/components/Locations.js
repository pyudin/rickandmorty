import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Locations() {
  const [items, setItems] = useState([]);
  const [nextUrl, setNextUrl] = useState(
    `https://rickandmortyapi.com/api/location`
  );

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

  return (
    <div>
      <div>Locations</div>
      <div className="shop">
        {items.map((item) => (
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
