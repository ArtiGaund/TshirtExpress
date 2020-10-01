import React, {Fragment} from 'react';
import {Link, withRouter} from "react-router-dom";
import {signout,isAuthenticated} from "../auth/helper";

const currentTab = (history,path) =>{
    if(history.location.pathname === path)
    {
        return {color: "#FFFFFF"}
    }
    else{
        return {color: "#FFFFFF"}
    }
};
const Menu = ({history, path}) => {
    return(
        <nav class="mb-1 navbar navbar-expand-lg navbar-dark special-color-dark" style={{position:'fixed',top:'0',left:'0',right:'0',zIndex:'100'}}>
             <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item ">
                    <Link style={currentTab(history,"/")} class="nav-link" to="/">Home</Link>
                </li>
                
                {isAuthenticated() && (
                    <li class="nav-item">
                        <Link style={currentTab(history, "/cart")} class="nav-link" to="/cart">Cart</Link>
                    </li>
                )}
                {isAuthenticated() && (
                    <li class="nav-item">
                        <Link style={currentTab(history, "/user/dashboard")} class="nav-link" to="/user/dashboard">DashBoard</Link>
                    </li>
                )}
                {!isAuthenticated() && (
                    <Fragment>
                        <li class="nav-item">
                            <Link style={currentTab(history, "/signup")} class="nav-link" to="/signup">Signup</Link>
                        </li>
                        <li class="nav-item">
                            <Link style={currentTab(history, "/signin")} class="nav-link" to="/signin">Signin</Link>
                        </li>
                    </Fragment>
                )}
                {isAuthenticated() && (
                    <li class="nav-item">
                        <span
                            onClick={() => {
                                signout(() => {
                                    history.push("/");
                                });
                            }}
                            class="nav-link text-danger">
                            Signout
                        </span>
                    </li>
                )}
            </ul>
            </div>
        </nav>
        
    );
}
export default withRouter(Menu);