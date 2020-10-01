import React, { useState, useEffect } from 'react';
import Base from './Base';
import Card from './Card';
import { loadCart } from './helper/cartHelper';
import PaymentB from './PaymentB';
const Cart = () => {
    const [reload, setReload] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(() =>{
        setProducts(loadCart());
    }, [reload]);

    const loadAllProducts = (products) =>{
        return(
            <div className='row' >
             {products.map((product, index) => (
                 <div className='col-4' >
                    <Card
                    key={index}
                    product={product}
                    removeFromCart={true}
                    addtoCart={false}
                    reload={reload}
                    setReload={setReload}/>
                    </div>
            
                ))}
                </div>
        );
    };
    const loadCheckOut = () => {
        return (
            <div>
                <h1>Check out</h1>
            </div>
        );
    };
    return(
        <Base title="Cart Page" description="Welcome to checkout">
            <div>
                {loadAllProducts(products)}
            <div className='row'>
                <div className="col-12">
                    {products.length >0 ?
                    (
                        <PaymentB products={products} setReload={setReload}/> 
                    ) :
                    (
                        <h3>Please login or add something in cart</h3>
                    ) }
                </div>
                </div>
                </div>
        </Base>
    );
};
export default Cart;