import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../actions/orderActions";
import Error from "../components/Error";
import Loader from "../components/Loader";
export default function Orderinfo({ match }) {
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.getOrderByIdReducer);

  const { order, loading, error } = orderstate;

  useEffect(() => {
    dispatch(getOrderById(match.params.orderid));
  }, [dispatch]);
  return (
    <div>
      {error && <Error error="Something went wrong" />}
      {loading && <Loader />}
      {order && (
        <div>
          <div className="row justify-content-center">
            <div className="col-md-5 card">
              <h2>Items In Your Order</h2>
              <hr />
              {order.orderItems.map((item) => {
                return (
                  <div className="orderitem">
                    <h1>{item.name}</h1>
                    <h1>
                      Quantity : <b>{item.quantity}</b>
                    </h1>
                    <h1>
                      Price : {item.quantity} * {item.price} ={" "}
                      {item.price * item.quantity}
                    </h1>
                    <hr />
                  </div>
                );
              })}
            </div>
            <div className="col-md-5 text-right card">
              <h2>Order Details</h2>

              <hr />

              <h3>Order Id : {order._id}</h3>
              <h3>Total Amount : {order.orderAmount}</h3>
              <h3>Date Of order : {order.createdAt.substring(0, 10)}</h3>
              <h3>Transaction ID : {order.transactionId}</h3>

              {order.isDelivered ? (
                <h3>Order Delivered</h3>
              ) : (
                <h3>Order Placed</h3>
              )}

              <hr />

              <div className="text-right">
                <h2>Shipping Details</h2>

                <hr />

                <h1 className="text-right">
                  Address : <b>{order.shippingAddress.address}</b>
                </h1>
                <h1 className="text-right">
                  City : <b>{order.shippingAddress.city}</b>
                </h1>

                <h1 className="text-right">
                  Country : <b>{order.shippingAddress.country}</b>
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}

      <hr />

      <div className="row justify-content-center">
        <div className="col-md-10">
          <h2 className="text-left">Replacement Conditions</h2>
          <p>
            A free replacement cannot be created for an item which was returned
            and replaced once earlier. If your item is not eligible for free
            replacement due to any reason, you can always return it for a
            refund. If the item has missing parts or accessories, you may try to
            contact the manufacturer for assistance. Manufacturer contact
            information can usually be found on the item packaging or in the
            paperwork included with the item.
          </p>
        </div>
      </div>
    </div>
  );
}
