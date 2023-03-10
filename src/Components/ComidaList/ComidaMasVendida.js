import React, {useContext, useEffect, useState} from 'react';
import ComidaCard from "../ComidaCard/ComidaCard";
import {Link} from "react-router-dom";
import axios from 'axios';



const ComidaMasVendida = () => {
    const [Item, setItem] = useState([]);
    useEffect(() => {
        axios('./json/data.json').then((res) => setItem(res.data.filter(p=>p.masVendido===true)));
      }, []);


    return( 
    <div>
      {Item.map(hamburguesa => {
      return (
      <Link to={`/detail/${hamburguesa.id}`}>
        <ComidaCard key={hamburguesa.id} data={hamburguesa}/>
      </Link>);
     })}
     </div>
    );
  };

export default ComidaMasVendida;