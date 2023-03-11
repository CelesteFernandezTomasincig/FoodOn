import { Link } from "react-router-dom";
import {db} from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useState } from 'react';
import { useEffect } from 'react';
import ComidaCard from "../ComidaCard/ComidaCard"; 

const ComidaList= () => { 
  const [comidaData, setComidaData] = useState ([]);

  useEffect(() => {
    const getComida = async () => {
      const q = query(collection(db, "food"));
      const querySnapshot = await getDocs(q)
      const docs = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        docs.push({...doc.data(), id: doc.id})
      });
      setComidaData(docs)
    };
    getComida();
  },[]);


 return( 
  <div>
    {comidaData.map((food) => {
    return( 
    <Link 
    to={`details/${food.id}`}
    style={{ textDecoration: "none" }}
    key={food.id}>
    <ComidaCard key={food.id} dataComida={food}/>; 
    </Link>
    );
  })}
   </div>
 );
};
 

export default ComidaList;