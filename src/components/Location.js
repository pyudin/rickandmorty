import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Location({ match }) {
  const [loc, setLoc] = useState({ residents: [] });

  useEffect(() => {
    fetchItem(match.params.id);
  }, []);

  const fetchItem = async (id) => {
    const data = await fetch(`https://rickandmortyapi.com/api/location/${id}`);
    const item = await data.json();
    console.log(item);
    setLoc(item);
  };

  return (
    <div className="fullcard">
      <div>Name: {loc.name}</div>
      <div>Dimension: {loc.dimension}</div>
      <div>Type: {loc.type}</div>
      <div>
        Residents:
        {loc.residents.map((el) => (
          <Link to={`/characters/${el.match(/\d+/)}`}>
            <div>{el}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Location;
