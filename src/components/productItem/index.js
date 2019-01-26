import React from 'react';
import {  Col,Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody  } from 'reactstrap';
import {Link} from 'react-router-dom'
import style from '../../style'

class productItem extends React.Component {
    
    render() {
      const {product , handleSearch} = this.props
      return (
        <Col md="3" sm="6" xs="12">
          <Link to={`${product._id}`} style={style.link}  >
            <Card onClick={()=> handleSearch("")} > 
              <CardImg top width="100%" src={product && product.image ? product.image : "data:image/png;base64,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"} alt="Card image cap" />
              <CardBody>
                <CardTitle style={{fontSize : "18px"}} >{product && product.name.substr(0,20)}</CardTitle>
                <CardSubtitle>{product && product.price} DT</CardSubtitle>
                <CardText>{product && product.description && product.description.substring(0,60)}...</CardText>
                <Button>More</Button>
              </CardBody>
            </Card>
          </Link>
        </Col>
      );
    }
  }

export default productItem