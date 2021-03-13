import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const registerAnim = {
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

const Register = () => {
	return (
		<motion.div
			variants={registerAnim}
			initial="initial"
			animate="animate"
			className="register-container"
		>
			<div className="register-wrapper">
				<h2 className="header">Register</h2>
				<img
					className="img-top"
					src="https://images-static.nykaa.com/media/catalog/product/n/y/nyrginf000001020_1_1.jpg"
					alt="protein"
				/>
				<form className="register-form">
					<div className="form-row">
						<div className="form-group">
							<label htmlFor="firstname">First name*</label>
							<input
								type="text"
								id="first_name"
								name="first_name"
								className="form-control"
								placeholder="First name"
								required
							/>
						</div>
						<div className="form-group">
							<label htmlFor="firstname">Last name*</label>
							<input
								type="text"
								id="last_name"
								name="last_name"
								className="form-control"
								placeholder="Last name"
								required
							/>
						</div>
						{/* <div className="form-group">
							<label htmlFor="firstname">Country</label>
							<CountryDropdown
								defaultOptionLabel="Select a country"
								value={location.country}
								onChange={selectCountry}
								className="form-control"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="firstname">City</label>
							<RegionDropdown
								blankOptionLabel="No country selected, man."
								defaultOptionLabel="Now select a region"
								country={location.country}
								value={location.region}
								onChange={selectRegion}
								className="form-control"
							/>
						</div> */}
					</div>
					<div className="form-group address">
						<label htmlFor="firstname">Email*</label>
						<input
							type="email"
							id="email"
							name="email"
							className="form-control"
							placeholder="Enter your email"
							required
						/>
					</div>

					{/* <h3 className="contact-header">Contact information</h3> */}

					<div className="form-row" style={{ marginTop: "1rem" }}>
						<div className="form-group">
							<label htmlFor="password1">password*</label>
							<input
								type="password"
								id="password1"
								name="password1"
								className="form-control"
								placeholder="password"
								required
							/>
						</div>
						<div className="form-group">
							<label htmlFor="firstname">Confirm password*</label>
							<input
								type="password"
								id="password2"
								name="password2"
								className="form-control"
								placeholder="Confirm password"
								required
							/>
						</div>
						{/* <div className="form-group">
							<label htmlFor="firstname">First name</label>
							<input
								type="text"
								id="first_name"
								name="first_name"
								className="form-control"
								placeholder="City"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="firstname">First name</label>
							<input
								type="text"
								id="last_name"
								name="last_name"
								className="form-control"
								placeholder="Delivery area"
							/>
						</div> */}
					</div>
					<button className="btn-submit" type="submit">
						Register
					</button>
				</form>
				<div className="helper">
					<p>
						Already have an account? <Link to="/signin">Signin here</Link>
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default Register;
