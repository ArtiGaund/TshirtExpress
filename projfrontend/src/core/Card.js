import React, {useState} from 'react';
import ImageHelper from "./helper/ImageHepler";
import {Redirect} from 'react-router-dom';
import { addItemToCart, removeItemFromCart } from './helper/cartHelper';
import { isAuthenticated } from '../auth/helper';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Card = ({
    product,
    addtoCart = true,
    removeFromCart = false,
    reload = undefined,
    setReload = (f) => f,
}) =>{
    const [ redirect, setRedirect ] = useState(false) 
    const cartTitle = product ? product.name :"A photo from pexels"
    const cartDescription = product ? product.description : "Default description"
    const cartPrice = product ? product.price : "Default"

    const addToCart = () =>{
        if (isAuthenticated())
        {
            addItemToCart(product, () => setRedirect(true));
            toast.success('Product added into the card');
            console.log("Added to cart");
        }
        else{
            toast.error('Login Please');
            console.log("Login Please!");
        }
    };

    const successMessage = () =>{
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div 
                    className="alert alert-success"
                    >
                       Product is added to your card!

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
                    >
                        Please Login First
                    </div>
                </div>
            </div>
        );
    };

    const getAredirect = (redirect) =>{
        if(redirect){
            return <Redirect to="/cart"/>
        }
    };

    const showAddToCart = (addToCart) =>{
        return(
            addtoCart && (
                <button
                    onClick={addToCart}
                    class="btn btn-primary"
                >
                    Add to Cart
                </button>
            )
        );
    };

    const showRemoveFromCart = (removeFromCart) =>{
        return(
            removeFromCart && (
                <button
                    onClick={() => {
                       //TODO:handle
                       removeItemFromCart(product._id);
                       setReload(!reload);
                         console.log("Product Removed from cart")
                         toast.warning("Product Removed from the cart");
                     }}
                    className="btn btn-danger"
                >
                    Remove from cart
                </button>
            )
        );
   };

    return (
                <div class="card">
                    <ImageHelper product={product}/>
                    <div class="card-body text-center">
                    <h2 class="card-text"><b><a>{cartTitle}</a></b></h2>
                    <p class="card-text"> {cartDescription}</p>
                    <p class="card-text">Cost is Rs. {cartPrice}</p>
                    </div>
                    <div className="row">
                    <div className="col-12" style={{marginLeft:'6rem'}}>
                            {showAddToCart(addToCart)}
                    </div>
                    <div className="col-12" style={{marginLeft:'8rem'}}>
                        {showRemoveFromCart(removeFromCart)}
                    </div>
                    </div>
                </div>
      );
    };
export default Card;