import { useEffect, useState } from "react";
import "../App.css";
// import { Link } from "react-router-dom";

function CartList({ cart }) {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  return (
    <div className="result">
      <div className="cart_section">
        {CART?.map((cartItem, cartindex) => {
          return (
            <div className="row cart_item">
              <div className="col-md">
                <img src={cartItem.url} width={40} />
              </div>
              <div className="col-md">
                <span> {cartItem.name} </span>
              </div>
              <div className="col-md">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    const _CART = CART.map((item, index) => {
                      return cartindex === index
                        ? {
                            ...item,
                            quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                          }
                        : item;
                    });
                    setCART(_CART);
                  }}
                >
                  -
                </button>
                <span> {cartItem.quantity} </span>
                <button
                  className="btn btn-info"
                  onClick={() => {
                    const _CART = CART.map((item, index) => {
                      return cartindex === index
                        ? { ...item, quantity: item.quantity + 1 }
                        : item;
                    });
                    setCART(_CART);
                  }}
                >
                  +
                </button>
              </div>
              <div className="col-md">
                <span> Rs. {cartItem.price * cartItem.quantity} </span>
              </div>
            </div>
          );
        })}

        <p>
          <div className="cart_total">
            Total <span></span>
            {CART.map((item) => item.price * item.quantity).reduce(
              (total, value) => total + value,
              0
            )}
          </div>

          {/* <Link to="/"> */}
          <button className="btn btn-primary cart_checkout"><a href={"/"} className="checkout">Checkout</a></button>
          {/* </Link> */}
        </p>
      </div>
    </div>
  );
}

export default CartList;
