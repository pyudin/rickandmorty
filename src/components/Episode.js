import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Episode({ match }) {
  const [epis, setEpis] = useState({ characters: [] });

  useEffect(() => {
    fetchItem(match.params.id);
  }, []);

  const fetchItem = async (id) => {
    const data = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
    const item = await data.json();
    setEpis(item);
  };

  return (
    <div className="fullcard">
      <div>Name: {epis.name}</div>
      <div>Episode: {epis.episode}</div>
      <div>Air date: {epis.air_date}</div>
      <div>
        Characters:
        {epis.characters.map((el) => (
          <Link to={`/characters/${el.match(/\d+/)}`}>
            <div>{`Сharacter ${el.match(/\d+/)}`}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Episode;
