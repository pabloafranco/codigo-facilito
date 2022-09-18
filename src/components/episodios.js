import React, {useEffect, useState} from 'react'


const Episodios = () => {
  const [episode, setEpisode] = useState({paceholder: 'cargando'})
  const [shouldRefresh, setShouldRefresh] = useState(true)
  

  useEffect(function getEpisodes() {
    
    fetch("https://www.officeapi.dev/api/episodes/random")
      .then(response => response.json())
      .then(data => setEpisode(data.data))
      
      //.catch(() => console.log("Algo falló"));
  }, [shouldRefresh]);

  function onRefresh(){
    console.log("Refreshing")
    setShouldRefresh(!shouldRefresh);
  }

  if (!episode.title)
    return <div>
      {episode.paceholder}
    </div>

  return (
    <div> 
      <button onClick={onRefresh}>Refresh</button>
      <h1>{episode.title}</h1> - <h2>{episode.description}</h2>
    </div>
  )
}

export default Episodios
