import { useEffect, useState } from "react";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "../../context/CartContext";
import styles from "./Cart.module.css";

const CartDrawer = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const {
    cartItems,
    getCartTotal,
    incrementItem,
    decrementItem,
    removeFromCart,
  } = useCart();

  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  // Open logic
  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      setClosing(false);
    }
  }, [isOpen]);

  // Close with animation
  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      onClose(); // notify parent
    }, 300); // matches slideOut animation duration
  };

  if (!visible) return null;

  return (
    <>
      <div className={styles.overlay} onClick={handleClose}></div>

      <div
        className={`${styles.drawer} ${
          closing ? styles.slideOut : styles.slideIn
        }`}
      >
        <div className={styles.header}>
          <h2>CART</h2>
          <button onClick={handleClose}>
            <X />
          </button>
        </div>
        <hr />

        <ul className="flex-1 overflow-y-auto space-y-4 mt-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-sm">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <li
                key={item.id}
                className="border-b pb-4 flex flex-col gap-2 text-sm"
              >
                <div className="font-semibold text-base">{item.name}</div>

                <div className="flex justify-between text-gray-600 text-sm">
                  <span>{item.duration}</span>
                  <span>₹{item.price}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        if (item.duration) {
                          decrementItem(item.id, item.duration);
                        } else {
                          console.warn("Duration is missing for item", item);
                        }
                      }}
                      className="px-2 py-1 border rounded"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-medium">{item.quantity}</span>
                    <button
                      onClick={() => {
                        if (item.duration) {
                          incrementItem(item.id, item.duration);
                        } else {
                          console.warn("Duration is missing for item", item);
                        }
                      }}
                      className="px-2 py-1 border rounded"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      if (item.duration) {
                        removeFromCart(item.id, item.duration);
                      } else {
                        console.warn("Duration is missing for item", item);
                      }
                    }}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>

        <hr />
        <div className={styles.checkout}>
          <h3>Total: ₹{getCartTotal()}</h3>
          <button className={styles.checkoutBtn}>Checkout</button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
