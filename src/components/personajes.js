import React, {useEffect, useState} from 'react'

const Personajes = () => {
  const [character, setCharacter] = useState(null)

  useEffect(function getCharacters() {
    fetch("https://www.officeapi.dev/api/characters/random")
      .then(response => response.json())
      .then(data => setCharacter(data.data))
      //.catch(() => console.log("Algo falló"));
  }, []);
  if (!character)
    return null

  return (
    <div> {character?.firstname} </div>
  )
}

export default Personajes