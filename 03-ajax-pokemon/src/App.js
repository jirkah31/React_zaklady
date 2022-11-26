import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
      axios
          .get("https://pokeapi.co/api/v2/pokemon")
          .then((result) => setData(result.data.results))
          .catch((error) => console.log(error));
  }, []);

//TOTO JE METODA PŘES fetch()
  // const App = () => {
  //   const [data, setData] = useState([]);
  
  //   const url = "https://pokeapi.co/api/v2/pokemon";
  
  //   const fetchUrl = async () => {
  //     const { results } = await fetch(url).then((response) => response.json());
  //     setData(results);
  //   };
  
  //   useEffect(() => {
  //     fetchUrl();
  //   }, []);


  return (
    <div className="container">
      <ul>
        {data.map((pokemon) => (
          <li> {pokemon.name} </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
