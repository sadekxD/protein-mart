import React from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

const child = {
	initial: {
		opacity: 0,
		y: 50,
	},
	animate: {
		opacity: 1,
		y: 0,
	},
};

const imageA = {
	initial: {
		opacity: 0,
		x: 100,
	},
	animate: {
		opacity: 1,
		x: 0,
	},
};

const Card = ({ id, title, image, price, index }) => {
	const history = useHistory();

	return (
		<motion.div
			variants={{
				initial: {
					opacity: 0,
					y: 200,
				},
				animate: () => ({
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.3,
						delay: index * 0.1,
					},
				}),
			}}
			initial="initial"
			animate="animate"
			// whileHover={{ scale: 1.01 }}
			whileTap={{ scale: 0.99 }}
			className="card"
			onClick={() => history.push(`/product/${id}`)}
		>
			<motion.h3 variants={child} className="header">
				Protein
			</motion.h3>
			<motion.img variants={imageA} src={image} alt={title} />
			<motion.div variants={child} className="product-info">
				<h3 className="product-title">{title}</h3>
				<span className="price">${price}</span>
			</motion.div>
		</motion.div>
	);
};

export default Card;
