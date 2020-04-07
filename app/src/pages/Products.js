import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

import axios from "axios";

import { CartContext } from "../Contexts/Cart";

class ProDucts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    axios.get("https://mj6j4.sse.codesandbox.io/products").then((res) => {
      this.setState({
        products: res.data,
      });
    });
  }
  render() {
    const { products } = this.state;
    return (
      <Container>
        <Row gutter={[8, 8]}>
          {products.map((product) => (
            <Col sm={4} key={product.id}>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src={product.imageUrl}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>{product.name}</CardTitle>
                  <CardText>{product.description} </CardText>
                  <CartContext.Consumer>
                    {({addToCart}) => (
                      <Button onClick={() => addToCart(product)}>Add</Button>
                    )}
                  </CartContext.Consumer>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default ProDucts;
