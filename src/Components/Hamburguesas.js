import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const Hamburguesas = () => {
    return( 
        <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://www.pequerecetas.com/wp-content/uploads/2013/07/hamburguesas-caseras-receta.jpg" />
        <Card.Body>
          <Card.Title>Hamburguesa Alemana</Card.Title>
          <Card.Text>
            Ingredientes: pan, salsa, cebolla, carne, queso, tomate, lechuga y beicon 
          </Card.Text>
          <Button variant="outline-danger">Comprar</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://restauranteventapazo.es/wp-content/uploads/2020/05/carnes-hamburguesa-VP-x2.jpg" />
        <Card.Body>
          <Card.Title>Hamburguesa Rusa</Card.Title>
          <Card.Text>
          Ingredientes: pan brioche, bacon, huevo, queso chédar, carne, cebolla roja en aros, tomate, lechuga batavia y pepinillos.{' '}
          </Card.Text>
          <Button variant="outline-danger">Comprar</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.cardamomo.news/__export/1620923472669/sites/debate/img/2021/05/13/pan_negro_para_hamburguesas_crop1620922568360.jpeg_242310155.jpeg" />
        <Card.Body>
          <Card.Title>Hamburguesa Patagonica</Card.Title>
          <Card.Text>
          Ingredientes: Pan negro, bacon, queso azul, carne, cebolla roja en aros, tomate y morron
          </Card.Text>
          <Button variant="outline-danger">Comprar</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
    </CardGroup>
    );
}

export default Hamburguesas;