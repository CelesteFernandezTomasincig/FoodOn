import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ComidaCard from '../../Components/ComidaCard/ComidaCard';


const ComidaDetail = () => {
  const [hamburguesa, setComidas] = useState ({});

  let { id } = useParams();

  useEffect(()=> {
    axios(`../json/data.json`).then((res)=>
      setComidas(res.data.find((item)=>item.id===parseInt(id)))
      );
  }, [id])
return (
  <div className='comidaDetail'>
      <div>
          <ComidaCard data={hamburguesa}/>
      </div>
  </div>
)
}

export default ComidaDetail;

