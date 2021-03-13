import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartButton = ({ activeCart, setActiveCart, total }) => {
	console.log(total);
	return (
		<div className="cart-btn" onClick={() => setActiveCart(!activeCart)}>
			<div className="cart-icon">
				<AiOutlineShoppingCart />
			</div>
			<div className="price-total">${total}</div>
		</div>
	);
};

export default CartButton;
