import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Products = () => {
  const url = "https://api.escuelajs.co/api/v1/users";
  const [products, setProducts] = useState([]);

  const getDataProducts = async () => {
    const response = await fetch(url);
    const dataProduct = await response.json();
    setProducts(dataProduct);
  };

  useEffect(() => {
    getDataProducts();
  });

  return (
    <div className="container">
      <div className="row pt-5">
        <h1 className="fw-bold animate__animated animate__fadeInUp animate__delay-1s">Welcome To Handes Shop</h1>
        <p className="animate__animated animate__fadeInUp animate__delay-1s">Catalog</p>
        {products.map((produk) => {
          return (
            <div className="Card col-lg d-flex pt-3">
              <CardProduct
                name={produk.name}
                img={produk.avatar}
                price={produk.role}
                category={produk.email}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

function CardProduct(props) {
  return (
    <Card className="Card animate__animated animate__fadeInUp animate__delay-1s" style={{ width: "18rem"}}>
      <Card.Img
        variant="top"
        src={props.img}
        width="100"
        height="250"
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.category}<br></br>Price: {props.price}$</Card.Text>
        <Button className="ml-auto" href={props.img}variant="primary">Beli</Button>
      </Card.Body>
    </Card>
  );
}

export default Products;