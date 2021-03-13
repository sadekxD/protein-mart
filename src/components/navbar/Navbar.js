import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const navAnim = {
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

const Navbar = () => {
	return (
		<AnimatePresence>
			<motion.div
				variants={navAnim}
				initial="initial"
				animate="animate"
				exit="exit"
				className="nav-container"
			>
				<h1 className="nav-icon">
					<Link to="/">Protein</Link>
				</h1>
				<ul className="nav-menu">
					<li className="nav-item">
						<a href="" className="nav-link"></a>
					</li>
					<li className="nav-item">
						<Link to="/signin" className="nav-link">
							Signin
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/register" className="nav-link">
							Register
						</Link>
					</li>
				</ul>
			</motion.div>
		</AnimatePresence>
	);
};

export default Navbar;
