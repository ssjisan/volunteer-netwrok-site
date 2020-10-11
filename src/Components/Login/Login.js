import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button'
import '../Login/Login.css'
import logo from '../../logos/logo.png'
import {Link, useHistory, useLocation} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGoogle } from '@fortawesome/free-brands-svg-icons'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';
firebase.initializeApp(firebaseConfig);



const Login = () => {
    const history = useHistory();
    const location = useLocation();
    let {from} = location.state || {from : {pathName: "/"}};
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);  
    var googleProvider = new firebase.auth.GoogleAuthProvider();
    const signInHandler = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then(result =>{
            const {displayName,email} = result.user;
            const signedInUser = {
                name: displayName,
                email: email
            };
            setLoggedInUser(signedInUser);
            history.replace(from);
        })
        
    }

    return (
        <div>
            <div>
                <img src={logo} alt=""/>
            </div>
            <div className="box">
                <h2>Login With</h2>
                <Button variant="danger" onClick={signInHandler} className="button"> <FontAwesomeIcon icon={faGoogle} style={{marginRight:50}} /> Continue with Google</Button>
            </div>
        </div>
        
    );
};

export default Login;