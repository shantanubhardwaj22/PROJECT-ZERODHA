import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    axios
      .get(`${backendUrl}/orders`)
      .then(res => setOrders(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="orders">
      <h3>Orders ({orders.length})</h3>

      {orders.length === 0 ? (
        <p>You haven't placed any orders today</p>
      ) : (
        <table>
          <tr>
            <th>Stock</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Type</th>
          </tr>

          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.name}</td>
              <td>{order.qty}</td>
              <td>{order.price}</td>
              <td className={order.mode === "BUY" ? "profit" : "loss"}>
                {order.mode}
              </td>
            </tr>
          ))}
        </table>
      )}
    </div>
  );
};

export default Orders;
