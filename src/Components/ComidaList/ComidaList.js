import React, {useEffect, useState} from 'react';
import ComidaCard from '../ComidaCard/ComidaCard';
import {Link} from "react-router-dom"
import axios from 'axios';


    const ComidaList = () => {
      const [comida, setComida] = useState([]);
    
      useEffect(() => {
        axios('./json/data.json').then((res) => setComida(res.data));
      }, []);

    return( 
    <div>
      {comida.map(hamburguesa => {
      return (
      <Link to={`/detail/${hamburguesa.id}`}>
        <ComidaCard key={hamburguesa.id} data={hamburguesa}/>
      </Link>);
     })}
     </div>
    );
  };

export default ComidaList;
