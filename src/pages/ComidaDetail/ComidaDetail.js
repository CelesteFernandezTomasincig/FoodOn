import {db} from "../../firebase/firebaseConfig";
import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import { collection, query, where, getDocs, documentId } from "firebase/firestore";
import ComidaCardDetail from "../../Components/ComidaCardDetail/ComidaCardDetail";



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
  },[id]);


  return (
     comidaDat.map((food) => {
      return <ComidaCardDetail key={food.id} dataComida={food}/>
    })
    )
}

export default ComidaDetail;