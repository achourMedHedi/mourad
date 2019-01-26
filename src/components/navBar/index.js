import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input } from 'reactstrap';
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import style from '../../style'



class navBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false , 
      panierQuantity : 0
    };
  }

  //initialize panier 
  // if exist it will return length of panier 
  // else initialize panier  

  // componentDidMount () {
  //   !localStorage.getItem('panier') && localStorage.setItem('panier' , JSON.stringify([]) ) 
  //   this.setState({panierQuantity : localStorage.getItem('panier') ? JSON.parse(localStorage.getItem('panier')).length : 0 })
  // }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const {quantity} = this.props
    return (
      <div>
        <Navbar color="light" light expand="md">

            <Link className="nav-link navbar-brand" to="/" style={{color : "black"}}  onClick={() => this.props.handleSearch('')} >Essences Et Plaisir</Link> 

                 
          <NavbarToggler style={{marginLeft:"auto"}} onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            
            <NavItem>
              <Link className="nav-link" to="/"  onClick={() => this.props.handleSearch('')} >accueil</Link> 
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/"  onClick={() => this.props.handleSearch('')} >accueil</Link> 
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/"  onClick={() => this.props.handleSearch('')} >accueil</Link> 
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/"  onClick={() => this.props.handleSearch('')} >accueil</Link> 
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/"  onClick={() => this.props.handleSearch('')} >accueil</Link> 
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/"  onClick={() => this.props.handleSearch('')} >accueil</Link> 
            </NavItem>

            <NavItem>
              <NavLink style={{cursor:'pointer'}} onClick={() => this.props.handleSearch('Componenent')}>Components</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret >
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem  onClick={() => this.props.handleSearch('options 1')}>
                  Option 1
                </DropdownItem>
                <DropdownItem  onClick={() => this.props.handleSearch('options 2')}>
                  option 2
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            </Nav>
          </Collapse>   


          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
              <Input value={this.props.search} type="text" name="search" id="searchProdect" onChange={(e)=>this.props.handleSearch(e.target.value)} placeholder="Search..." />
            </NavItem>
            </Nav>
          </Collapse>

          
          {
            !this.state.isOpen && <Link className="navbar-brand" to="/panier" onClick={()=>this.props.handleSearch("")} >
              <IconButton aria-label="Cart">
                <Badge badgeContent={quantity} color="primary" >
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
          }
         

        </Navbar>
      </div>
    );
  }
}
export default navBar