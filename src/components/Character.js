import React, { useEffect, useState } from "react";

function Character({ match }) {
  const [char, setChar] = useState({});
  useEffect(() => {
    fetchItem(match.params.id);
  }, []);

  const fetchItem = async (id) => {
    const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const item = await data.json();
    console.log(item);
    setChar(item);
  };

  return (
    <div>
      <div>Character</div>
      <img src={char.image} alt={char.name} />
      <div>Name: {char.name}</div>
      <div>Gender: {char.gender}</div>
      <div>Species: {char.species}</div>
      <div>Status: {char.status}</div>
    </div>
  );
}

export default Character;
