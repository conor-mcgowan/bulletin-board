import React, {useState, useEffect, useMemo} from "react";
import {useHistory } from "react-router-dom";
// import {connect} from "react-redux";
// import {setUser} from "../../redux/actions/UserActions";
// import axios from "axios";

const LoginPage = (props) => {
    // const history = useHistory();
    const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [error, setError] = useState("");

    function login() {
    }

    return (
        <>
        <h1 className="text-center">Login</h1>
        <div className="form">
            <div className="form-container">
                <label htmlFor="username" className="text-center label">
                    Username
                </label>
                <input 
                type="text" 
                id="username" 
                className="input" 
                value={username} 
                onChange={(e) => {setUsername(e.target.value); 
                console.log(username)}} />
            </div>
        </div>
        </>
    )
};
export default LoginPage;