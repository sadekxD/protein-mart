import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
	addToCart,
	updateProductQty,
	removeFromCart,
} from "../store/actions/cart";

const animation = {
	initial: {
		opacity: 0,
		x: 200,
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const animateNext = {
	initial: {
		opacity: 0,
		y: 50,
	},
	animate: {
		opacity: 1,
		y: 0,
	},
};

const Detail = () => {
	const [detail, setDetail] = useState({});
	const [loading, setLoading] = useState(true);
	const [quantity, setQuantity] = useState(0);
	const { id } = useParams();
	const { products } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchDetail = async (id) => {
			const res = await axios.get(
				`https://my-json-server.typicode.com/sadekxD/json-for-test/products/${id}`
			);
			if (res.status === 200) {
				setDetail(res.data);
				setLoading(false);
			}
		};

		fetchDetail(id);
	}, [id]);

	useEffect(() => {
		const product = products.filter((p) => p.id === detail.id);
		console.log(product);
		if (product.length) {
			setQuantity(product[0].qty);
		}
	}, [products]);

	useEffect(() => {
		dispatch(updateProductQty(detail.id, quantity));
		if (quantity === 0) {
			dispatch(removeFromCart(detail.id));
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

	const handleAddtoCart = () => {
		dispatch(addToCart(detail));
	};

	const handleRemoveItem = () => {
		dispatch(removeFromCart(detail.id));
		setQuantity(0);
	};

	return (
		<AnimatePresence>
			{!loading && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1 }}
					className="details-row"
				>
					<div className="col">
						<motion.img
							initial={{ opacity: 0, x: 200 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.7 }}
							src={detail.image}
							alt={detail.title}
						/>
					</div>
					<div className="col">
						<div className="info-wrap">
							<Link to="/" className="link">
								Back to products
							</Link>
							<motion.div
								variants={animation}
								initial="initial"
								animate="animate"
								className="product-info"
							>
								<motion.h4 variants={animateNext} className="header">
									Protein
								</motion.h4>
								<motion.h3 variants={animateNext} className="product-title">
									{detail.title}
								</motion.h3>
								<motion.p variants={animateNext} className="product-desc">
									Broooo you're killing YouTube with this content. This is the
									punch I needed for my portfolio I was looking for. Man I'm
									glad I found ur channel keep up the dope content. Still your
									1# fan on YouTube for code an design!!!
								</motion.p>
								<motion.div variants={animateNext} className="additionals">
									Sugar free
								</motion.div>

								{products.filter((p) => p.id === detail.id).length === 0 ? (
									<motion.button
										variants={animateNext}
										className="add-to-cart"
										onClick={handleAddtoCart}
										style={{ marginTop: "1rem" }}
									>
										Add to cart
									</motion.button>
								) : (
									<>
										<motion.div
											variants={animateNext}
											className="product-action"
										>
											<div className="qyt-wrap">
												<span
													className="inc"
													onClick={() => handleQuantity("dec")}
												>
													-
												</span>
												<span className="quantity">{quantity}</span>
												<span
													className="dec"
													onClick={() => handleQuantity("inc")}
												>
													+
												</span>
											</div>
											<span className="price">${detail.price}</span>
										</motion.div>
										<motion.button
											variants={animateNext}
											className="add-to-cart"
											onClick={handleRemoveItem}
										>
											Remove from cart
										</motion.button>
									</>
								)}
							</motion.div>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Detail;
