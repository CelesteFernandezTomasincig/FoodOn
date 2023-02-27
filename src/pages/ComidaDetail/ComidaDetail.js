import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ComidaCard from '../../Components/ComidaCard/ComidaCard';


const ComidaDetail = () => {
  const [hamburguesa, setComidas] = useState ({});

  let { id } = useParams();

  useEffect(()=> {
    axios(`./json/data.json${id}`).then((res)=>
      setComidas(res.data)
      );
  }, [id])
return (
  <div className='comidaDetail'>
      <div key={hamburguesa.id}>
          <ComidaCard data={hamburguesa}/>
      </div>
  </div>
)
}

export default ComidaDetail;

