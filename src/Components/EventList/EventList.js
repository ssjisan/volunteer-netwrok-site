import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import ShowEventList from '../ShowEventList/ShowEventList';

const EventList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); 
    const [events, setEvents] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3001/registeredEvent?email='+loggedInUser.email)
        .then(result=>result.json())
        .then(data=>setEvents(data))
    },[])
    console.log(events);
    return (
    
        <div>
            {
                events.map((events)=><ShowEventList events={events} key={events._id}></ShowEventList>) 
            }
        </div>
    );
};

export default EventList;