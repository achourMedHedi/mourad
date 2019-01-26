import React from 'react';
import { Container, Row,CardGroup ,Col } from 'reactstrap';
import ProductItem from '../productItem';

const DisplayProducts = (props) => {
  console.log(props.product , "ss")

    return (
      <Container>
          <Row>
            {
              props.product.map((el , index) => {
                return (
                  <ProductItem key={index} product={el} handleSearch={props.handleSearch} />       
                )
              }) 
            }
          </Row>
      </Container>
    );
  }

export default DisplayProducts