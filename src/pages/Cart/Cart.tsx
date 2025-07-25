import React, { useState } from "react";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  CreditCard,
  Lock,
} from "lucide-react";
import { useCart } from "../../context/CartContext";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const [checkoutData, setCheckoutData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    billingAddress: "",
    city: "",
    zipCode: "",
  });

  const subtotal = getCartTotal();
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckoutData({
      ...checkoutData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Checkout data:", checkoutData);
    alert("Order placed successfully!");
  };

  if (cartItems.length === 0) {
    return (
      <div className={styles.cartContainer}>
        <div className={styles.emptyCart}>
          <div>
            <ShoppingBag className={styles.emptyCartIcon} />
            <h2 className={styles.emptyCartTitle}>Your cart is empty</h2>
            <p className={styles.emptyCartText}>
              Add some programs to get started on your fitness journey!
            </p>
            <button className={styles.emptyCartButton}>Browse Programs</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={styles.cartTitle}>Shopping Cart</h1>

          <div className={styles.cartGrid}>
            <div>
              <div className={styles.cartItems}>
                <h2 className={styles.cartItemsTitle}>Your Items</h2>

                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className={styles.cartItem}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className={styles.cartItemImage}
                      />

                      <div className={styles.cartItemDetails}>
                        <h3 className={styles.cartItemName}>{item.name}</h3>
                        <p className={styles.cartItemDescription}>
                          {item.description}
                        </p>
                        {item.duration && (
                          <p className={styles.cartItemMeta}>
                            Duration: {item.duration}
                          </p>
                        )}
                        {item.level && (
                          <p className={styles.cartItemMeta}>
                            Level: {item.level}
                          </p>
                        )}
                        <p className={styles.cartItemPrice}>${item.price}</p>
                      </div>

                      <div className={styles.cartItemQuantity}>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className={styles.cartItemQuantityButton}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className={styles.cartItemQuantityValue}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className={styles.cartItemQuantityButton}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className={styles.cartItemRemove}
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className={styles.orderSummary}>
                <h2 className={styles.orderSummaryTitle}>Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className={styles.orderSummaryRow}>
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className={styles.orderSummaryRow}>
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className={styles.orderSummaryTotal}>
                    <div className={styles.orderSummaryRow}>
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleCheckout} className={styles.checkoutForm}>
                  <div className={styles.checkoutInputGroup}>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={checkoutData.firstName}
                      onChange={handleInputChange}
                      required
                      className={styles.checkoutInput}
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={checkoutData.lastName}
                      onChange={handleInputChange}
                      required
                      className={styles.checkoutInput}
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={checkoutData.email}
                    onChange={handleInputChange}
                    required
                    className={styles.checkoutInput}
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={checkoutData.phone}
                    onChange={handleInputChange}
                    required
                    className={styles.checkoutInput}
                  />

                  <div className={styles.paymentSection}>
                    <h3 className={styles.paymentTitle}>
                      <CreditCard className="h-5 w-5" />
                      Payment Information
                    </h3>

                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card Number"
                      value={checkoutData.cardNumber}
                      onChange={handleInputChange}
                      required
                      className={styles.checkoutInput}
                    />

                    <div className={styles.checkoutInputGroup}>
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={checkoutData.expiryDate}
                        onChange={handleInputChange}
                        required
                        className={styles.checkoutInput}
                      />
                      <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={checkoutData.cvv}
                        onChange={handleInputChange}
                        required
                        className={styles.checkoutInput}
                      />
                    </div>
                  </div>

                  <button type="submit" className={styles.checkoutButton}>
                    <Lock className="h-5 w-5" />
                    <span>Secure Checkout</span>
                  </button>
                </form>

                <p className={styles.securityText}>
                  Your payment information is secure and encrypted
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
