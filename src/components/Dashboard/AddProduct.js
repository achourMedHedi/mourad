import React from 'react'
import { Button } from '@material-ui/core';
import Axios from 'axios';

class AddProduct extends React.Component {

    state = {
        product : {name : "test add" }
    }

    handleAddProduct = async () => {
        const  {product} = this.state
        await Axios.post("http://localhost:3000/product/" , product).then(res => {return (this.setState({product}) , this.props.handleProductUpdate(this.props.allProduct.concat(res.data)) , console.log(res.data) )} ).catch(e => console.log("cant add product " ,e))
        
        

    }
    
    render() {
        return (
            <div>
                
                <Button onClick={this.handleAddProduct} style={{backgroundColor : "green" , color : "white" , width : "100%"}} variant="contained" >Ajouter</Button>
            </div>
        )
    }
}

export default AddProduct