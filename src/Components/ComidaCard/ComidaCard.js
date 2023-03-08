import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



const ComidaCard = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345, display: 'inline-block', width: '50%', }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data.img}
          alt="Hamburger"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${data.precio}
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

