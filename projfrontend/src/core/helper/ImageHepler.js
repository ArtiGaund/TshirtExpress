import React from 'react';

const ImageHelper = ({product}) => {
    const imageurl = product ? product.image
    : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`; 
    
    return(
        <div style={{height:'25rem'}}>
                <img src={imageurl}
                style={{maxHeight:"100%", maxWidth:"100%"}}
                class="card-img-top"
                alt="Card image cap"/>
            </div>
    );
}
export default ImageHelper;