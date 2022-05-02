import React, { useReducer, useState } from "react";
import { Navigate } from "react-router-dom";
import "./Signin.css";


    const initialState = {
        email: " ",
        password: " ",
    };

    const reducer = (state, action) => {
        switch(action.type){
            case "email" : return {...state, email: action.payload};
            case "password" : return {...state, password: action.payload}
        }
    }

const Signin = (props) => {
    const [state, setState] = useReducer(reducer, initialState);
    const [user, setUser] = useState(null);

   const onSubmitHandler = () => {
         const getUser =  localStorage.getItem(state.email);
         const parsedUser = JSON.parse(getUser);

         if (parsedUser) setUser(parsedUser)    
    }

    if (user) {
       return  <Navigate to={
           {
               pathname: "/user-profile",
               state: user
           }
       } />
    }

    return(
        <div className="sign-wrapper">
            <h3>SignIn</h3>
            <div className="sign-form">
            <label>email</label>
            <input name="email" value={state.email} placeholder="email" onChange={(e) => setState({type: "email", payload: e.target.value})} />
            <label>password</label>
            <input name="password" value={state.password} placeholder="password" onChange={(e) => setState({type: "password", payload: e.target.value})} />
            <button type="submit" onClick={onSubmitHandler}>Submit</button>
            </div>
        </div>
    )
}

export default Signin;