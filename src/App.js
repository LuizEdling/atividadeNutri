import React, {useEffect, useState} from 'react';
import './style/style.css';

function App(){
  const [nutri, setNutri] = useState([])

  useEffect(() => {
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

    fetch(url)
    .then((data) => data.json())
    .then(((dataJson) => {
      setNutri(dataJson);
    }))
  }, []);

  return(
    <div>
      <header>
        <strong>
          React Nutri
        </strong>
      </header>

      {nutri.map((data) => {
        return(
          <article key={data.id}>
          <strong>{data.titulo}</strong>
          <img src={data.capa} alt={data.titulo}></img>
          <p> {data.subtitulo} </p>
          <spam>{data.categoria}</spam>
        </article>
        );
      })}
    </div>
  );
}

export default App;