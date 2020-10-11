import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../Register/Register.css'
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';


import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { UserContext } from '../../App';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  

const Register = () => {
    const classes = useStyles();
    const {id} = useParams();  
    const event = fakeData.find(event => event.id == id)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); 
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => {
    setSelectedDate(date);
  };

// Submit Handling
const handleSubmit = () => {
  const newReg = {
      name: loggedInUser.name,
      email: loggedInUser.email,
      eventId: event.id,
      eventName: event.name,
      eventPic: event.pic,
      date: selectedDate
  };
  fetch('http://localhost:3001/submitted', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newReg)
  })
  .then(res => res.json())
  .then(data => console.log(data))
}
  
    return (
        <div className="rego">
            <form className={classes.root} id="form">
            <Form.Control type="name" placeholder="User Name" defaultValue={loggedInUser.name} style={{width: 600}}/>
            <Form.Control type="email" placeholder="Email" defaultValue={loggedInUser.email} style={{width: 600}}/>
            <Form.Control type="desc" placeholder="Description"  style={{width: 600}}/>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        style={{width:600}}
                        id="date-picker-inline"
                        label="Date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />  
                  </MuiPickersUtilsProvider> <br/>
              <br/>
              <Form.Control type="event" placeholder="Event" defaultValue={event.name} style={{width: 600}}/>
              <Link to="/eventDetail"><Button variant="primary" onClick={handleSubmit} >Submit</Button></Link>
            </form>
        </div>
    );
};

export default Register;