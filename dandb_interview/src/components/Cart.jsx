import React from 'react'

export default function Cart({cartItems, removeFromCart}) {
    return (
        <div>
            {cartItems.length === 0 ? 
                <div className="cart cart-header">Your cart is empty</div>
                : <div className="cart cart-header">
                    You have {cartItems.length} items in your cart {" "}
                </div>
            }
            <div>
                <div className="cart">
                    <ul className="cart-items">
                        {cartItems.map(item =>
                            <li key={item._id}>
                                <div>
                                    <img src={item.image} alt={item.title}/>
                                </div>
                                <div>
                                    <div>{item.title}</div>
                                    <div className="right">
                                        {item.count + " x $" + item.price + " "}
                                        <button className="button"
                                            onClick={()=>removeFromCart(item)}>Remove</button>
                                    </div>
                                </div>
                            </li>    
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}
