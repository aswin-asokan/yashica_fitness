import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Checkout.module.css";
import { useCart } from "../../context/CartContext";

interface CheckoutItem {
  title: string;
  duration: string;
  price: number;
}

const Checkout: React.FC = () => {
  const location = useLocation();
  const { cartItems } = useCart(); // fallback if nothing passed via location
  const singleItem = location.state?.item;

  const [email, setEmail] = useState("");
  const [billing, setBilling] = useState({
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    pin: "",
    phone: "",
  });

  // Items to show (either single "Buy Now" item or full cart)
  const itemsToCheckout: CheckoutItem[] = singleItem
    ? [
        {
          title: singleItem.title,
          duration: singleItem.duration,
          price: singleItem.price,
        },
      ]
    : cartItems.map((item) => ({
        title: item.name,
        duration: item.duration,
        price: item.price * item.quantity,
      }));

  const total = itemsToCheckout.reduce((acc, item) => acc + item.price, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBilling({ ...billing, [e.target.name]: e.target.value });
  };

  const handlePayment = () => {
    console.log("Initiating Razorpay with:", itemsToCheckout, billing, email);
    // Razorpay logic goes here
  };

  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.checkoutGrid}>
        {/* LEFT SIDE */}
        <div className={styles.leftColumn}>
          <h2>Contact Information</h2>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />

          <h2>Payment</h2>
          <p>Pay securely with Razorpay</p>
          <div className={styles.razorpayBox}>[ Razorpay Checkout Here ]</div>

          <h2>Billing Address</h2>
          <input
            type="text"
            placeholder="Country"
            name="country"
            value={billing.country}
            onChange={handleChange}
            className={styles.input}
          />
          <div className={styles.flexRow}>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={billing.firstName}
              onChange={handleChange}
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={billing.lastName}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={billing.address}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Apartment, suite, etc."
            name="apartment"
            value={billing.apartment}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="City"
            name="city"
            value={billing.city}
            onChange={handleChange}
            className={styles.input}
          />
          <div className={styles.flexRow}>
            <input
              type="text"
              placeholder="State"
              name="state"
              value={billing.state}
              onChange={handleChange}
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Pin Code"
              name="pin"
              value={billing.pin}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={billing.phone}
            onChange={handleChange}
            className={styles.input}
          />

          <button className={styles.payButton} onClick={handlePayment}>
            Pay Now ₹{total}
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.rightColumn}>
          <h2>Order Summary</h2>
          {itemsToCheckout.map((item, index) => (
            <div key={index} className={styles.checkoutItem}>
              <div>
                <strong>{item.title}</strong>
                <div className={styles.itemDuration}>{item.duration}</div>
              </div>
              <div className={styles.itemPrice}>₹{item.price}</div>
            </div>
          ))}

          <div className={styles.totalRow}>
            <span>Total</span>
            <strong>₹{total}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
