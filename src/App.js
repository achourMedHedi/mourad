import React from 'react';
import NavBar from './components/navBar';
import Carousel from './components/carousel';
import DisplayProducts from './components/displayProducts';
import './App.css'
import { Route, Switch } from 'react-router'
import Search from './components/Search';
import style from './style'
import ProductPage from './components/productPage';
import Panier from './components/panier';
import Axios from 'axios';
import Dashboard from './components/Dashboard';
import Event from './components/Event'

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

class App extends React.Component {

  state = {
    search : "",
    panierQuantity : 0 ,
    product : [] ,
    loading : true
  }

  


  componentDidMount ()  {
    !localStorage.getItem('panier') && localStorage.setItem('panier' , JSON.stringify([]) ) 
    this.setState({panierQuantity : localStorage.getItem('panier') ? JSON.parse(localStorage.getItem('panier')).length : 0 })
    // console.log(GetProducts() ,"this")
    Axios.get('http://localhost:3000/product').then(res => {return this.setState({product : res.data.product})})
    
  }

  bseller = this.state.product || this.state.product.filter((el , index ) => el.bestSeller && index <= 4)
  pack = this.state.product ||  this.state.product.filter((el , index) => el.package && index <= 4)

  handleSearch = (s) => {
    return this.setState({search : s})
  }

  panierQuantity = () => {
    return this.setState({
      panierQuantity : this.state.panierQuantity + 1
    })
  }

  Home = () => {
    return (
      <div>
        <Carousel />
        <div className="header" style={style.header}> Package </div>
        <DisplayProducts product={this.state.product} handleSearch={this.handleSearch} />
        <div className="header" style={style.header} > Best Seller</div> 
        <DisplayProducts product={this.state.product} handleSearch={this.handleSearch} />
        {/* <DisplayProducts product={this.bseller} handleSearch={this.handleSearch} /> */}
        <div className="header" style={style.header} > Evenement</div> 
        <Event />
      </div> 
    )
  }

  NoMatch = () => {
    return <h1>hello nothing </h1>
  }

  handleProductUpdate = (newProducts) => {
    this.setState({product : newProducts})
  }

  
  Pages = () => {
    return (
      <Switch>
          <Route exact path="/" component={this.Home} />
          <Route exact path="/panier" render={() => <Panier />} />
          <Route exact path="/admin" render={() => <h1>admin</h1>} />
          <Route exact path='/dashboard' render={()=> <Dashboard handleProductUpdate={this.handleProductUpdate} allProduct={this.state.product} /> } />
          <Route path="/:product" render={(route) => <ProductPage handleSearch={this.handleSearch} productName={route.match.params.product}  allProduct={shuffle(this.state.product)} />} />
          {/* <Route path="/contact" component={Contact} /> */}
          {/* when none of the above match, <NoMatch> will be rendered */}
          <Route component={this.NoMatch} />
        </Switch>
    )
  }

  render() {
    const searchP = this.state.product.filter(el => el.name.toLowerCase().includes(this.state.search.toLowerCase())) // || el.category.toLowerCase().includes(this.state.search.toLowerCase()) )
    return (
      <div>
        <NavBar  quantity={this.state.panierQuantity}  search={this.state.search} handleSearch={this.handleSearch} />
        {
          this.state.search.trim() === "" ? <this.Pages  /> : <Search product={searchP} handleSearch={this.handleSearch}  search={this.state.search} />
        }
      </div>
    );
  }
};

export default App;