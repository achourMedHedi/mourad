import React from 'react' 
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Produit from './Produit';
import AddProduct from './AddProduct';
import Event from './Event';
import AddEvent from './AddEvent';


class Dashboard extends React.Component {

    state = {
        value: 'Allproduct'
    }
    handleChange = (event, value) => {
        this.setState({ value });
      };
    
    render() {
        const { value } = this.state;
        const {allProduct , handleProductUpdate} = this.props
        return (
            <div >
            <AppBar position="static">
              <Tabs value={value} onChange={this.handleChange}>
                <Tab value="Allproduct" label="Tout les produits" />
                <Tab value="createProduct" label="ajouter un produit" />
                <Tab value="event" label="Tout les Evenements " />
                <Tab value="createEvent" label="ajouter un Evenement" />
              </Tabs>
            </AppBar>
            {value === 'Allproduct' && <Produit  handleProductUpdate={handleProductUpdate} allProduct={allProduct}  /> }
            {value === 'createProduct' && <AddProduct handleProductUpdate={handleProductUpdate} allProduct={allProduct} /> }
            {value === 'event' && <Event  /> }
            {value === 'createEvent' && <AddEvent   /> }
            
          </div>
        );
      }
    }


export default Dashboard