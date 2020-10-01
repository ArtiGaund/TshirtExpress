import React,{ useState, useEffect } from 'react';
import Base from '../core/Base';
import { getOrder } from '../core/helper/orderHelper';
import OrderCard from '../core/OrderCard';

const UserDashBoard = () =>{

    const[orders, setOrders] = useState([]);
    const [error, setError] = useState(false);
    const loadAllOrders = () => {
        getOrder()
        .then((data) => {
            if (data.error) {
                setError(data.error);
                console.log(error);
            }
            else {
                setOrders(data);
            }
        });
    };

    useEffect(() => {
        loadAllOrders();
    });

    return(
        <Base title="UseDashboard Page" description="Welcome to UserDashBoard">
                <div className="row">
                    {orders.map((order, index ) => {
                        return(
                            <div key={index} className="col-4 mb-4">
                                <OrderCard order={order}/>
                                </div>
                        );
                    })}
                </div>
        </Base>
    );
};
export default UserDashBoard;