import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { updateProductQty, removeFromCart } from "../../store/actions/cart";

const Item = ({ id, title, image, qty, price }) => {
	const [quantity, setQuantity] = useState(qty);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(updateProductQty(id, quantity));
		if (quantity === 0) {
			dispatch(removeFromCart(id));
		}
	}, [quantity]);

	const handleQuantity = (type) => {
		if (type === "inc") {
			setQuantity((pre) => pre + 1);
		}

		if (type === "dec" && quantity > 0) {
			setQuantity((pre) => pre - 1);
		}
	};

	return (
		<li className="item">
			<div className="info">
				<img src={image} alt={title} />
				<h4 className="title">
					{title} | {qty} X ${price}{" "}
					<span className="total">${parseInt(qty) * parseInt(price)}</span>
				</h4>
				<div className="qyt-wrap">
					<span className="dec" onClick={() => handleQuantity("dec")}>
						-
					</span>
					<span className="quantity">{quantity}</span>
					<span className="inc" onClick={() => handleQuantity("inc")}>
						+
					</span>
				</div>
			</div>
			<span className="cancel" onClick={() => dispatch(removeFromCart(id))}>
				<IoMdClose />
			</span>
		</li>
	);
};

export default Item;
