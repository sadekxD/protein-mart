import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../components/product/Card";
import axios from "axios";

const parent = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 1,
		},
	},
};

const Home = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get("https://my-json-server.typicode.com/sadekxD/json-for-test/products")
			.then((res) => setData(res.data))
			.catch((err) => console.log(err));
	}, []);
	return (
		<AnimatePresence>
			<motion.div
				variants={parent}
				initial="initial"
				animate="animate"
				exit="exit"
				className="container"
			>
				<h2 className="title">Get your protein</h2>
				<motion.div className="product-row">
					{data.map((p, index) => (
						<Card
							id={p.id}
							image={p.image}
							title={p.title}
							price={p.price}
							key={p.id}
							index={index}
						/>
					))}
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
};

export default Home;
