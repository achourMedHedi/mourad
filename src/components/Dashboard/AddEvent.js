import React from 'react'
import { Button } from '@material-ui/core';
import Axios from 'axios';

class AddEvent extends React.Component {

    state = {
        event : {name : "event add" }
    }

    handleAddevent = async () => {
        const  {event} = this.state
        await Axios.post("http://localhost:3000/event/" , event).then(res => {return (this.setState({event}) , console.log(res.data) )} ).catch(e => console.log("cant add product " ,e))
    }
    
    render() {
        return (
            <div>
                
                <Button onClick={this.handleAddevent} style={{backgroundColor : "green" , color : "white" , width : "100%"}} variant="contained" >Ajouter</Button>
            </div>
        )
    }
}

export default AddEvent