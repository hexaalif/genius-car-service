import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import useServiceDetail from "../../Hooks/useServiceDetail";
import auth from "../../firebase.init";
import axios from "axios";
import { toast } from "react-toastify";

const CheckOut = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);
  // const [user, setUser] = useState({
  //   name: "lol vi",
  //   email: "lol@gmail.com",
  //   address: "tajmohod road, mdpur",
  //   phone: "012345345",
  // });

  // const handleAddressChange = (event) => {
  //   console.log(event.target.value);
  //   const { address, ...rest } = user;
  //   const newAddress = event.target.value;
  //   const newUser = { address: newAddress, ...rest };
  //   console.log(newUser);
  // };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: e.target.address.value,
      phone: e.target.phone.value,
    };
    // axios.post("http://localhost:5000/order", order).then((response) => {
    //   const { data } = response;
    //   if (data.insertedId) {
    //     toast("Your order is booked");
    //     e.target.reset();
    //   }
    //   console.log(response);
    // });
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h4>Please Checkout Your Booking: {service.name}</h4>
      <form onSubmit={handlePlaceOrder} className="w-50 mx-auto text-center">
        <input
          className="w-100 mb-2"
          type="text"
          name="name"
          value={user?.displayName}
          placeholder="Name"
          required
          readOnly
        />
        <br />
        <input
          className="w-100 mb-2"
          type="email"
          value={user?.email}
          name="email"
          placeholder="email"
          required
          disabled
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          value={service.name}
          name="service"
          placeholder="service"
          required
          readOnly
        />
        <br />
        <input
          className="w-100 mb-2"
          // onChange={handleAddressChange}
          type="text"
          // value={user.address}
          name="address"
          placeholder="address"
          required
          autoComplete="off"
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="phone"
          placeholder="phone"
          required
        />
        <br />
        <input className="btn btn-primary" type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default CheckOut;
