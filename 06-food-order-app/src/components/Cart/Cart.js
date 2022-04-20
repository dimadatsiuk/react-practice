import { useContext } from "react"; 
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const onRemoveHandler = () => {
        console.log('removed');
    }
    const onAddHandler = () => {
        console.log('added');
    }

  const cartItems = cartCtx.items.map(
    (item) => <CartItem 
        key={item.id}
        price={item.price}
        name={item.name}
        amount={item.amount}
        onRemove={onRemoveHandler.bind(null, item.id)}
        onAdd={onAddHandler.bind(null, item)}
    />
  );

  return (
      <Modal hideCartModal={props.onHideCart}>
          <ul className={classes['cart-items']}>
              {cartItems}
          </ul>
          <div className={classes.total}>
              <span>Total Amount</span>
              <span>{totalAmount}</span>
          </div>
          <div className={classes.actions}>
              <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>

              {
                  hasItems && <button className={classes.button}>Order</button>
              }
              
          </div>
      </Modal>
  );
};

export default Cart;

