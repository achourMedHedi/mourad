import React from 'react' 
import { Container , Row, Col } from 'reactstrap'
import style from '../../style'
import DisplayProducts from '../displayProducts';
import ProductPage from '../productPage';

const Search = ({search, product,handleSearch}) => {
    return (
        <Container>
            <Row>
                <Col><div className="header" style={style.header}>{search}</div></Col>
            </Row>
            <Row>
                 <DisplayProducts handleSearch={handleSearch}  product={product} /> 
            </Row>
        </Container>
    )
}

export default Search