import React,{useState} from 'react';
import Base from '../core/Base';
import {Link} from "react-router-dom";
import {signup} from '../auth/helper';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
const Signup = () =>{

    const [values, setValues] =useState({
        name: "",
        email: "",
        password: "",
        error:"",
        success:false
    });

    const { name, email, password, error, success }= values;

    const handleChange = (name) =>
    (event) =>{
        setValues({ ...values, error:false, [name]: event.target.value});
    };

    const onSubmit = (event) =>{
        event.preventDefault();
        setValues({ ...values, error: false});
        signup({name, email, password})
        .then( data =>{
            console.log("DATA",data);
            if(data.email === email){
                setValues({
                    ...values,
                    name:"",
                    email:"",
                    password:"",
                    error:"",
                    success:true,
                });
            }
            else{
               setValues({
                   ...values,
                   error:true,
                   success:false,
               });

            }
        })
        .catch(e=> console.log(e));
    };

    const successMessage = () =>{
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div 
                    className="alert alert-success"
                    style={{display:success?"":"none"}}
                    >
                        New account created successfully. Please
                        <Link to="/signin"> login now!</Link>

                    </div>
                </div>
            </div>
        );
    };

    const errorMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div
                        className="alert alert-danger"
                        style={{ display: error ? "" : "none" }}
                    >
                        Check all fields again.
                    </div>
                </div>
            </div>
        );
    };

    const signUpForm = () =>{
        return(
            <div class="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form class="text-center border border-light p-5 bg-white jumbotron ">
                            <input
                            class="form-control mb-4"
                            value={name}
                            onChange={handleChange("name")}
                            placeholder="Enter name"
                            type="text"/>
                            <input
                                class="form-control mb-4"
                                value={email}
                                onChange={handleChange("email")}
                                placeholder="Enter email"
                                type="email" />
                            <input
                                class="form-control mb-4"
                                value={password}
                                onChange={handleChange("password")}
                                type="password" 
                                placeholder="Enter Password"/>
                            <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                                At least 8 characters and 1 digit
                            </small>
                        <button class="btn btn-info my-4 btn-block"  onClick={onSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        );
    };

    return(
        <Base title="Welcome to SignUp Page" description="">
            {errorMessage()}
            {successMessage()}
            {signUpForm()}
        </Base>
    );
}
export default Signup;