import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import Event from '../Event/Event';
const eventDetails = fakeData;


const EventPhoto = () => {
    
    return (
        <div>
            {
               eventDetails.map(eventDetails=><Event eventDetails={eventDetails} key={eventDetails.id} ></Event>)
            }
        </div>
    );
};

export default EventPhoto;