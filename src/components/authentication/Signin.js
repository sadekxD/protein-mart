import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const signinAnim = {
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

const Signin = () => {
	return (
		<motion.div
			variants={signinAnim}
			initial="initial"
			animate="animate"
			className="signin-container"
		>
			<div className="signin-wrapper">
				<h2 className="header">Signin</h2>
				<img
					className="img-top"
					src="https://images-static.nykaa.com/media/catalog/product/n/y/nyrginf000001020_1_1.jpg"
					alt="protein"
				/>
				<form className="signin-form">
					<div className="form-group">
						<label htmlFor="username">Username*</label>
						<input
							type="text"
							className="form-control"
							placeholder="Username"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password*</label>
						<input
							type="password"
							className="form-control"
							placeholder="Password"
							required
						/>
					</div>
					<button className="signin-btn">Sign in</button>
				</form>
				<div className="helper">
					<p>
						Not have an account yet? <Link to="/register">register here</Link>
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default Signin;
