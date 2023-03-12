import {db} from "../../firebase/firebaseConfig";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";


const Contact = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitted(true);
    reset();

    const docRef = await addDoc(collection(db, "clientes"), {
      name: " ",
      email: " ", 
      edad: " ",
      telefono: " ",
      direccion: " "
    });
    console.log("Document written with ID: ", docRef.id);
    setIsSubmitted(true);
    reset();
    // Mostrar mensaje con el ID generado
    alert(`Sus datos se han enviado correctamente y su ID es: ${docRef.id}`);
  };

  return (
    <div style={{ width: '50%', margin: 'auto' }}>
      <h2>Formulario</h2>
      {isSubmitted && <p></p>}
      <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: '10px' }}>
          <label>Nombre</label>
          <input type="text"  {...register('nombre', {required: true})} style={{ width: '100%' }} />
          {errors.nombre?.type === 'required' && <p>El campo es requerido</p>}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Direccion de Email</label>
          <input type="text" {...register('email', {pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i })} style={{ width: '100%' }} />
          {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Edad</label>
          <input type="text" {...register('edad', {required: true})} style={{ width: '100%' }} />
          {errors.edad?.type === 'required' && <p>El campo es requerido</p>}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Telefono</label>
          <input type="number" {...register('telefono', {required: true})} style={{ width: '100%' }} />
          {errors.telefono?.type === 'required' && <p>El campo es requerido</p>}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Direccion</label>
          <input type="text" {...register('direccion')} style={{ width: '100%' }} />
        </div>
        <input type="submit" value="Enviar" style={{ width: '100%' }}></input>
      </form>
    </div>
  )
}

export default Contact;

