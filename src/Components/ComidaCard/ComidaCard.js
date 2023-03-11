import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



const ComidaCard = ({ dataComida }) => {
  return (
    <Card sx={{ maxWidth: 345, display: 'inline-block', width: '50%', }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
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
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
};



export default ComidaCard;

