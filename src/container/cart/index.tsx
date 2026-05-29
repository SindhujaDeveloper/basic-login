import React from "react";
import { Offcanvas, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { RootState, IMenuItem } from "types";
import { setMenuCount } from "reducer";
import "assets/stylesheets/cart.scss";

interface CartProps {
  show: boolean;
  handleClose: () => void;
}

const extractPrice = (priceString: string): number => {
  const match = priceString.match(/Rs\.(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
};

export const Cart: React.FC<CartProps> = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const menuList = useSelector((state: RootState) => state.menu.menuList);

  const cartItems = menuList.filter((item) => item.count > 0);

  const totalAmount = cartItems.reduce((acc, item) => {
    return acc + extractPrice(item.price) * item.count;
  }, 0);

  const handleCheckout = () => {
    let message = "Hello NSP FOODS!%0A%0AI would like to place an order:%0A";
    cartItems.forEach((item) => {
      const itemTotal = extractPrice(item.price) * item.count;
      message += `- ${item.count} x ${item.name} (Rs.${itemTotal})%0A`;
    });
    message += `%0ATotal Amount: Rs.${totalAmount}`;

    const whatsappUrl = `https://wa.me/917868049366?text=${message}`;
    window.open(whatsappUrl, "_blank");
    handleClose();
  };

  const handleRemove = (item: IMenuItem) => {
    dispatch(setMenuCount({ ...item, count: 0 }));
  };

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      className="cart-offcanvas"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your Order</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h5>Your cart is empty</h5>
            <p>Add some delicious food to get started!</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <div className="item-info">
                    <span className="item-name">
                      {item.name} x {item.count}
                    </span>
                    <span className="item-price">{item.price}</span>
                    <Button
                      variant="link"
                      size="sm"
                      className="text-danger p-0 mt-1 text-start"
                      onClick={() => handleRemove(item)}
                    >
                      Remove
                    </Button>
                  </div>
                  <div className="item-total">
                    Rs. {extractPrice(item.price) * item.count}
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total-row">
                <h4>Total</h4>
                <span className="total-amount">Rs. {totalAmount}</span>
              </div>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout on WhatsApp
              </button>
            </div>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};
