import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useParams } from 'react-router-dom';
import './ShoeEventList.css'
const ShowEventList = (props) => {
    const {eventPic,eventName} = props.events;
    
    return (
        
        <div className="list">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require(`../../images/${eventPic}`)} />
                    <Card.Body>
                        <Card.Title>{eventName}</Card.Title>
                        <Card.Text> </Card.Text>
                        <Button variant="danger">Cancel</Button>
                    </Card.Body>
            </Card>
        </div>
    );
};

export default ShowEventList;