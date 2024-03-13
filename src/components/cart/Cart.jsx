import bottle from '../bottle/Bottle';
import './Cart.css'

import PropTypes from 'prop-types';

const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <div className=''>
                {
                    cart.map((item)=> <div key={item.id}>
                        <img src={item.img} alt="" />
                        <button onClick={()=>handleRemoveFromCart(item.id)}>Remove</button>
                    </div> )
                }
            </div>
        </div>
    );
};

Cart.propTypes={
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;