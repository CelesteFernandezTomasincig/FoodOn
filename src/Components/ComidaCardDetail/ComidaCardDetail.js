import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';
import { ItemsContext } from '../../context/ItemContext';

const ComidaCardDetail = ({dataComida}) => {
    
    
    const {addToCart}=useContext(ItemsContext)

    const onAdd= (cantidad) => {
        addToCart(dataComida, cantidad)
    }
    
  return (
    <Card>
    
        <CardMedia
          component="img"
         style={{width:'50%'}} 
          image={dataComida.img}
          alt="Hamburger"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {dataComida.hamburguesa}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${dataComida.price}
          </Typography>
        </CardContent>
    
     
       <ItemCount initial={1} stock={10} onAdd={onAdd}/>
     
    </Card>
  )
}

export default ComidaCardDetail