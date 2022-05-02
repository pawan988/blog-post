import React, { useReducer, useState } from "react";
import { Navigate, Switch } from "react-router-dom";
import "./Signup.css";


    const initialState = {
        userName: "",
        email: " ",
        password: " ",
    };

    const reducer = (state, action) => {
        switch(action.type){
            case "userName" : return {...state, userName: action.payload};
            case "email" : return {...state, email: action.payload};
            case "password" : return {...state, password: action.payload}
        }
    }

const Signup = (props) => {
    const [state, setState] = useReducer(reducer, initialState);
    const [isSubmitted, setIsSubmitted] = useState(false)

   const onSubmitHandler = () => {
       const isValidate = Object.values(state).every(item => item.length > 1)
       if(isValidate) {
           const strinifyUser = JSON.stringify(state)
           localStorage.setItem(state.email, strinifyUser);
           setIsSubmitted(true)
       } else {
          alert("please fill the all details!")
       }
    }

    if (isSubmitted) {
       return  <Navigate to={{pathname: '/profile'}} />
    }

    return(
        <div className="signup-wrapper">
            <h3>Signup</h3>
        <div className="signup-form">
            <label>email</label>
            <input name="email" value={state.email} placeholder="email" onChange={(e) => setState({type: "email", payload: e.target.value})} />
            <label>userName</label>
            <input name="userName" value={state.userName} placeholder="userName" onChange={(e) => setState({type: "userName", payload: e.target.value})} />
            <label>password</label>
            <input name="password" value={state.password} placeholder="password" onChange={(e) => setState({type: "password", payload: e.target.value})} />
            <button type="submit" onClick={onSubmitHandler}>Submit</button>
        </div>
        </div>
    )
}

export default Signup;