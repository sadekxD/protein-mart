import React from "react";
import { useSelector } from "react-redux";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import { motion } from "framer-motion";

const checkoutAnim = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 0.3,
		},
	},
};

const OrderItem = ({ title, qty, price }) => {
	return (
		<div className="order-item">
			<p className="item-info">
				Protein with honey 500g | {qty} x ${price}
			</p>
			<span className="item-total">${parseInt(qty) * parseInt(price)}</span>
		</div>
	);
};

const Checkout = ({ total }) => {
	const { products } = useSelector((state) => state.cart);
	return (
		<motion.div
			variants={checkoutAnim}
			initial="initial"
			animate="animate"
			className="checkout-container"
		>
			{/* <h2 className="header">Checkout now</h2> */}
			<CheckoutForm />
			<div className="order-wrapper">
				<h4 className="order-header">Your Orders</h4>
				{products.length !== 0 ? (
					<>
						<div className="order-items">
							{products.map((p, index) => (
								<OrderItem
									key={index}
									title={p.title}
									qty={p.qty}
									price={p.price}
								/>
							))}
						</div>
						<div className="sub-total">
							<h4>Sub total</h4>
							<span>${total}</span>
						</div>
						<div className="del-fee">
							<h4>Delivery fee</h4>
							<span>$10</span>
						</div>
						<div className="total">
							<h4>Total</h4>
							<span>${total + 10}</span>
						</div>
					</>
				) : (
					<div>You do not have an active order</div>
				)}
			</div>
		</motion.div>
	);
};

export default Checkout;
