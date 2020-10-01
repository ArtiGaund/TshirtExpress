import React, {useState} from 'react';

const OrderCard = ({
    order,
    reload = undefined,
    setReload = (f) => f,
}) =>{
    const [ redirect, setRedirect ] = useState(false) 
    const OrderTitle = order ? order.product_name :"A photo from pexels"
    const OrderTotalProduct = order ? order.total_product : "Default description"
    const OrderTransactionId = order ? order.transaction_id : "Default"
    const OrderTotalAmount = order ? order.total_amount : "Default"

    return(
     <div class="card">
    <div class="card-body">
    <p class="card-text">Product name: {OrderTitle}</p>
    <p class="card-text">Total Product: {OrderTotalProduct}</p>
    <p class="card-text">Transaction id: {OrderTransactionId}</p>
    <p class="card-text">Total Amount: {OrderTotalAmount}</p>
    </div>
</div>
    );
}
export default OrderCard;