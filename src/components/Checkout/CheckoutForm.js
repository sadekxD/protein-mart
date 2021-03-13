import React, { useState } from "react";
import {
	CountryDropdown,
	RegionDropdown,
	CountryRegionData,
} from "react-country-region-selector";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const CheckoutForm = () => {
	const [location, setLocation] = useState({
		country: "",
		region: "",
	});
	const [phoneNumber, setPhoneNumber] = useState();

	const selectCountry = (val) => {
		setLocation({ ...location, country: val });
	};

	const selectRegion = (val) => {
		setLocation({ ...location, region: val });
	};
	return (
		<div className="checkout-form-wrapper">
			<h3 className="header">Shipping information</h3>
			<form className="checkout-form">
				<div className="form-row">
					<div className="form-group">
						<label htmlFor="firstname">First name*</label>
						<input
							type="text"
							id="firstname"
							name="firstname"
							className="form-control"
							placeholder="First name"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="firstname">Last name</label>
						<input
							type="text"
							id="lastname"
							name="lastname"
							className="form-control"
							placeholder="Last name"
						/>
					</div>
					<div className="form-group">
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
					</div>
				</div>
				<div className="form-group address">
					<label htmlFor="address">Address</label>
					<input
						type="text"
						id="address"
						name="address"
						className="form-control"
						placeholder="Address"
					/>
				</div>

				<h3 className="contact-header">Contact information</h3>

				<div className="form-row">
					<div className="form-group">
						<label htmlFor="firstname">Phone number</label>
						<PhoneInput
							placeholder="Enter phone number"
							value={phoneNumber}
							onChange={setPhoneNumber}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							className="form-control"
							placeholder="Email"
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
				<button className="btn-submit">Add Address</button>
			</form>
		</div>
	);
};

export default CheckoutForm;
