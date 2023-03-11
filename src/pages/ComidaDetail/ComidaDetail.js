import {db} from "../../firebase/firebaseConfig";
import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import ComidaCard from "../../Components/ComidaCard/ComidaCard";
import { collection, query, where, getDocs, documentId } from "firebase/firestore";



const ComidaDetail = () => {
  const [comidaDat, setComidaDat] = useState ([]);

  const { id } = useParams ();

  useEffect(() => {
    const getComida = async () => {
      const q = query(collection(db, "food"), where (documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        docs.push({...doc.data(), id: doc.id});
      });
      setComidaDat(docs)
    };
    getComida();
  },[]);


  return (
     comidaDat.map((food) => {
      return <ComidaCard key={food.id} dataComida={food}/>
    })
    )
}

export default ComidaDetail;