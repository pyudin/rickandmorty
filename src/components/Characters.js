import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Characters() {
  const [items, setItems] = useState([]);
  const [nextUrl, setNextUrl] = useState("");

  useEffect(() => {
    fetchItem("https://rickandmortyapi.com/api/character");
  }, []);

  const fetchItem = async (url) => {
    if (nextUrl === null) return;
    const data = await fetch(url);
    const el = await data.json();
    console.log(el);
    setItems((prevItems) => [...prevItems, ...el.results]);
    setNextUrl((prev) => {
      console.log("set ", el.info.next);
      return el.info.next;
    });
  };

  return (
    <div>
      <div>Characters</div>

      <div className="shop">
        <button onClick={() => fetchItem(nextUrl)}>Next</button>
        {items.map((item) => (
          <Link to={`/characters/${item.id}`} className="link">
            <div className="card" key={item.id}>
              <div>{item.name}</div>
              <img src={item.image} alt={item.name} width="200" height="200" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Characters;
