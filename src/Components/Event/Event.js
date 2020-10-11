import React from 'react';
import Card from 'react-bootstrap/Card'
import '../Event/Event.css'
import { Link } from 'react-router-dom';
const Event = (props) => {    
    const {name, pic, id} = props.eventDetails;
    return (
        <div className="list" style={{textAlign:"center"}}>
         <Card style={{ width: '18rem', height: '25rem'}}> 
            <Card.Img variant="top" src={require(`../../images/${pic}`)} />
            <Card.Body>
                <Link to={"/event/"+id} > <Card.Title> {name}  </Card.Title> </Link>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Event;