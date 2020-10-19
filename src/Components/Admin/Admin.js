import React from 'react';
import './Admin.css'
import Form from 'react-bootstrap/Form'
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import {  faPlus } from '@fortawesome/free-solid-svg-icons'
import {  faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../App';
import { useContext } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import { useState } from 'react';
import { useEffect } from 'react';
const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },

    root: {
        width: 275,
        height: 275
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
  }));
const Admin = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [eventList, seteventList] = useState([]) 
  useEffect(()=>{
      fetch('https://powerful-chamber-56757.herokuapp.com/registeredEvent?email='+loggedInUser.email)
      .then(res=>res.json())
      .then(data=>seteventList(data))
  },[])
  
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };
    const classes = useStyles();
    const routes = [
/*******************************************Route For Event List Start************************************************************/
        {
            path: "/admin/",
            exact: true,
            sidebar: () => <div></div>,
            main: () =>
              <div className="place-admin">
                  <table class="table table-striped" style={{width:900}}>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Registerd Date</th>
                            <th scope="col">Event Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                  {
                    eventList.map(eventList=>
                   <tbody>
                      <tr>
                          <td>{eventList.name}</td>
                          <td>{eventList.email}</td>
                          <td>{eventList.eventName}</td>
                          <td>{(new Date(eventList.date).toDateString('dd-mm-yyyy'))}</td>
                          <td><button type="button" class="btn btn-danger">Delete</button></td>
                      </tr>
                  </tbody>)
                }
                </table>
              </div>
          },
/*******************************************Route For Event List End************************************************************/
          
/*******************************************Route For Add Event Start************************************************************/
          {
            path: "/admin/addservice",
            sidebar: () => <div></div>,
            main: () =>
              <div className="place-admin">
                  <h4 style={{textAlign:"left"}}>Add Event</h4>
                  <div className="form-field">
                  <form className={classes.root} id="form">
                    <Form.Control type="name" placeholder="Event Name"  style={{width: 600}}/> <br/>
                    <Form.Control type="desc" placeholder="Description"  style={{width: 600}}/> <br/>
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
                        <div>
                            <input type="file" id="file"/>
                            <label for="file" className='btn btn-success'> <FontAwesomeIcon icon={faCloudUploadAlt} style={{marginRight:10}} />Upload Image</label> <br/>
                        </div>    
                </form> <br/>
                  </div>
                  <button className="btn btn-dark">Submit</button>
              </div>
          }
         /*******************************************Route For Add Event End************************************************************/

    ];
    

    return (
        <main>
            <div className="d-flex justify-content-between">
                <img src='' style={{width:"15%"}} alt=""/>
                <div style={{marginRight:20}}>
                <h4 >{loggedInUser.name}</h4>
                <p>{loggedInUser.email}</p>
                </div>
            </div>
            <Router>
      <div style={{ display: "flex" }}>
        <div>
    {/*************************************************************SideBar Menu Start***************************************************/  }
        <ul style={{listStyle:"none", paddingTop:20}}>
                    <Link to="/admin/" style={{color:"black", textDecoration:'none'}}> <li > <FontAwesomeIcon icon={faShoppingBasket} style={{marginRight:10}} /> Service List</li></Link> <br/>
                    <Link to="/admin/addservice" style={{color:"black", textDecoration:'none'}}><li > <FontAwesomeIcon icon={faPlus} style={{marginRight:10}} /> Add Service</li></Link> <br/>
                    
                </ul>
    {/*************************************************************SideBar Menu End***************************************************/  }
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>     
        </main>
    );
};

export default Admin;