import React, { useState } from 'react';
import Base from '../core/Base';
import { Link, Redirect } from "react-router-dom";
import {signin, authenticate, isAuthenticated} from '../auth/helper';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
const Signin = () =>{

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false,
        loading: false,
        didRedirect: false,
      });
      const { name, email, password, error, success, loading, didRedirect } =
        values;

        const handleChange = (name) =>
    (event) => {
      setValues({ ...values, error: false, [name]: event.target.value });
    };

    const onSubmit = (event) =>{
        event.preventDefault();
        setValues({...values, error:false, loading: true});
        signin({email,password})
        .then((data)=>{
            console.log("DATA",data);
            if(data.token){
                // let sessionToken = data.token;
                authenticate(data,() =>{
                    console.log("Token Added");
                    setValues({
                        ...values,
                        didRedirect: true,
                    });
                });
                toast.success("Login Success");
            }
            else
            {
                setValues({
                    ...values,
                    loading: false,
                });
                toast.error("Please enter correct data");
            }
        })
        .catch((e)=>console.log(e));
    };

    const performRedirect = () =>{
        if(isAuthenticated()){
            return <Redirect to="/"/>
        }
    };

    const loadingMessage = () =>{
        return(
            loading && (
                <div className="alert alert-info">
                    <h2>Loading...</h2>
                </div>
            )
        );
    };
    const signInForm = () =>{
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form class="text-center border border-light p-5 bg-white jumbotron ">
                            <input
                                class="form-control mb-4"
                                value={email}
                                onChange={handleChange("email")}
                                type="text"
                                placeholder="Enter email" />
                            <input
                                class="form-control"
                                value={password}
                                onChange={handleChange("password")}
                                type="password" 
                                placeholder="Enter password"/>
                        <button class="btn btn-info my-4 btn-block"  onClick={onSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        );
    };

    
    return(
        <Base title="Welcome to Signin Page" description="">
            {loadingMessage()}
            {signInForm()}
            <p className="text-center">
      </p>
      {performRedirect()}
        </Base>
    );
    
};
export default Signin;