import React, {useEffect, useState} from 'react';
import ComidaCard from '../ComidaCard/ComidaCard';
import {Link} from "react-router-dom"



    const ComidaList = () => {
      const [comida, setComida] = useState([]);
    
      useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => setComida(json));
          
      }, []);

    return( <div>
      {comida.map(hamburguesa => {
      return (<Link to={`/detail/hamburguesa.id`}>
        <ComidaCard key={hamburguesa.id} data={hamburguesa}/>
      </Link>);
     })}
     </div>
    );
  };

export default ComidaList;