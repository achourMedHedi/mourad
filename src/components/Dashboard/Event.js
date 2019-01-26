import React from 'react'
import { Table } from 'reactstrap';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Axios from 'axios';
import TextField from '@material-ui/core/TextField';


  function Transition(props) {
    return <Slide direction="up" {...props} />;
  }
class Event extends React.Component {
    state = {
        open: false,
        allEvents : [] ,
        product : {}
      };

      componentDidMount ()  {
        Axios.get('http://localhost:3000/event').then(res => this.setState({allEvents  : res.data.event}))
    }

      handleClickOpen = (el) => {
        this.setState({ open: true , product : el });
      };
      

    
      handleClose = () => {
        this.setState({ open: false });
      };

      updateProduct = async() => {
        var {product} = this.state
        await Axios.put(`http://localhost:3000/event/` , product ).then(res => this.setState({open : false , allEvents : this.state.allEvents.map(el => el._id == product._id ? product : el ) }))

      }
      handleDelete = async (id) => {
          await Axios.delete(`http://localhost:3000/event/${id}`).then(res => this.setState({allEvents : this.state.allEvents.filter(el => el._id != id)})).catch(e => console.log(e))
        }

      handleNameChange = (name) => {
        this.setState({
            product : {...this.state.product , name}
        })
      }
    
    render () {
        const {allEvents , product} = this.state
        return (
            <div>
                <Table hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Nom</th>
                        <th>Description</th>
                        <th>Prix</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        allEvents.map((el,index) => {
                            return(
                                <tr key={index}>
                                    <th scope="row">{++index}</th>
                                    <td> <img src={el.image} width="100px" height="100px" /> </td>
                                    <td>{el.name}</td>
                                    <td>{el.description}</td>
                                    <td>{el.price}</td>
                                    <td> <Button style={{backgroundColor:'orange' , color : "white"}} variant="contained" onClick={() => this.handleClickOpen(el)} >Update</Button> </td>
                                    <td> <Button color="secondary" variant="contained" onClick={() => this.handleDelete(el._id)} >Delete</Button> </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </Table>
                <Dialog
                    fullScreen
                    open={this.state.open}
                    onClose={this.handleClose}
                    TransitionComponent={Transition}
                    >
                    <AppBar >
                        <Toolbar>
                        <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            Sound
                        </Typography>
                        <Button color="inherit" onClick={this.handleClose}>
                            save
                        </Button>
                        </Toolbar>
                    </AppBar>
                    <br/>
                    <br/>
                    <br/>
                    <List>
                        <TextField
                        id={product.name}
                        label="Name"
                        value={product.name}
                        onChange={(e) => this.handleNameChange(e.target.value)}
                        style={{width : "100%"}}
                        margin="normal"
                        />
                        <Divider />
                        <ListItem button>
                            <ListItemText primary={`${product.name}`} secondary="Tethys" />
                        </ListItem>
                        <Button color="primary" variant="contained" style={{width : "100%"}}  onClick={this.updateProduct}>UPDATE</Button>
                    </List>
                    </Dialog>
            </div>
        )
    }
}
export default Event