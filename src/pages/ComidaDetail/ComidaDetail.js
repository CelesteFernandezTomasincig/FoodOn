import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import ComidaCard from '../../Components/ComidaCard/ComidaCard';


const ComidaDetail = () => {
    const [comidas, setComidas] = useState ({});

    let { id } = useParams();

    useEffect(()=> {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res)=>
        setComidas(res.data)
        );
    }, [id])
  return (
    <div className="ComidaDetail-list">
        <div key={comidas.id}>
            <ComidaCard data={comidas}/>
        </div>
    </div>
  )
}

export default ComidaDetail;