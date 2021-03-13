import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import onClickOutside from "react-onclickoutside";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";

const cartAnim = {
	initial: { x: "100%" },
	animate: {
		x: "0%",
		transition: {
			duration: 0.3,
			stiffness: 0,
		},
	},
	exit: {
		x: "100%",
		transition: {
			duration: 0.3,
			stiffness: 0,
		},
	},
};

function CartSidebar({ activeCart, setActiveCart, total }) {
	const history = useHistory();
	const { products } = useSelector((state) => state.cart);

	CartSidebar.handleClickOutside = () => setActiveCart(false);

	// useEffect(() => {
	// 	dispatch();
	// }, [dispatch]);

	return (
		<AnimatePresence>
			{activeCart && (
				<motion.div
					variants={cartAnim}
					initial="initial"
					animate="animate"
					exit="exit"
					className="cart-sidebar"
				>
					{products.length !== 0 ? (
						<>
							<div className="cart-header">
								Items <span>({products.length})</span>
							</div>
							<div className="cart-items">
								<ul>
									{products.map((product, index) => (
										<Item
											key={index}
											title={product.title}
											id={product.id}
											image={product.image}
											qty={product.qty}
											price={product.price}
										/>
									))}
								</ul>
							</div>
							<button
								className="cart-checkout"
								onClick={() => history.push("/checkout")}
							>
								Checkout <span>${total}</span>
							</button>
						</>
					) : (
						<Link
							to="/"
							style={{
								margin: "auto 0",
								padding: ".5rem 1rem",
								color: "#fff",
								backgroundColor: "blueviolet",
								borderRadius: ".3rem",
							}}
						>
							Products
						</Link>
					)}
				</motion.div>
			)}
		</AnimatePresence>
	);
}

const clickOutsideConfig = {
	handleClickOutside: () => CartSidebar.handleClickOutside,
};

export default onClickOutside(CartSidebar, clickOutsideConfig);
