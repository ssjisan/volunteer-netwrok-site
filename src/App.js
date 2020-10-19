import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Blog from './Components/Blog/Blog';
import Donation from './Components/Donation/Donation';
import EventPhoto from './Components/EventPhoto/EventPhoto';
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/Notfound';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import EventList from './Components/EventList/EventList';
import Admin from './Components/Admin/Admin';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({}); 
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}> 
        <Router>
        <Header></Header>
            <Switch>
                <Route exact path="/">
                  <EventPhoto></EventPhoto>
                </Route>
                <Route path="/donation">
                  <Donation></Donation>
                </Route>
                <Route path="/blog">
                  <Blog></Blog>
                </Route>
                <Route path="/admin">
                  <Admin></Admin>
                </Route>
                <PrivateRoute path="/event/:id">
                  <Register></Register>
                </PrivateRoute>
                <Route path="/signIn">
                  <Login></Login>
                </Route>
                <Route path="/register">
                  <Login></Login>
                </Route>
                <PrivateRoute path="/eventDetail">
                  <EventList></EventList>
                </PrivateRoute>
                <Route path="/">
                  <EventPhoto></EventPhoto>
                </Route>
                <Route path="*">
                  <NotFound></NotFound>
                </Route>
            </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
