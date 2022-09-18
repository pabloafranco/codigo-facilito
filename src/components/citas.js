import React, {useEffect, useState} from 'react'


const Citas = () => {
  const [quote, setQuote] = useState(null)

  useEffect(function getQuotes() {
    fetch("https://www.officeapi.dev/api/quotes/random")
      .then(response => response.json())
      .then(data => setQuote(data.data))
      .catch(() => console.log("Algo falló"));
  }, []);


  return (
    <div> {quote?.content} </div>
  )
}

export default Citas