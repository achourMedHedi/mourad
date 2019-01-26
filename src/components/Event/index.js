import React , {Fragment} from 'react'
import {Row , Col , Container} from 'reactstrap'
import Axios from 'axios';


const EventItem = ({event}) => {
    return (
        <Fragment>
            <Row style={{padding : "0 2px 0 0" , borderRadius : "1%" , border : "1px solid rgb(245, 245, 245)"}} >
                <Col md={6}style={{padding : "0 2px 0 0" }}  >
                    <img width="100%" height="250px"  src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/33164929_1694878643911895_5007071121330143232_n.jpg?_nc_cat=109&_nc_ht=scontent.ftun3-1.fna&oh=c76571c6c9681a1c2cba39ae7f54f087&oe=5CCDD739" />
                </Col>
                <Col md={6} style={{backgroundColor: "rgb(245, 245, 245)"}}  >
                    <h2 style={{fontFamily : "initial" , opacity: .8}} >
                        {event.name}
                    </h2>
                    <h2>
                        01/05/2019
                    </h2>
                    <p style={{fontFamily: "serif"}}>
                    { event.name != 'first event' &&  "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.".slice(0,200)
                    }
                    </p>

                    
                    
                </Col>
            </Row>
        </Fragment>
    )
}


class Event extends React.Component {

    state = {
        events : []
    }

    componentDidMount ()  {
        Axios.get('http://localhost:3000/event').then(res => this.setState({events  : res.data.event}))
    }

    render() {
        return (
            <Container>
                <Row >
                    {
                        this.state.events.map((el,index) => {return (
                            <Col md={6} key={index} style={{paddingLeft : index%2 > 0 && "20px" , paddingBottom : "18px", paddingRight : index%2 == 0 && "20px" }} >
                                <EventItem event={el} />
                            </Col>
                        )})
                    }
                    
                </Row>
            </Container>
        )
    }
}

export default Event