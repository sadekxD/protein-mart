import React, { useState, useEffect } from "react";
import "./style/style.scss";
import { Switch, Route, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

// components
import CartSidebar from "./components/cart/CartSidebar";
import CartButton from "./components/cart/CartButton";
import Checkout from "./pages/Checkout";
import Signin from "./components/authentication/Signin";
import Register from "./components/authentication/Register";
import Navbar from "./components/navbar/Navbar";

// pages
import Home from "./pages/Home";
import Detail from "./pages/Details";

function App() {
	const [activeCart, setActiveCart] = useState(false);
	const [navActive, setNavActive] = useState(false);
	const [total, setTotal] = useState(0);
	const { products } = useSelector((state) => state.cart);
	const history = useHistory();

	useEffect(() => {
		history.listen(() => {
			setActiveCart(false);
		});
	}, []);

	useEffect(() => {
		calculateTotal();
	}, [products]);

	const calculateTotal = () => {
		let sum = 0;
		for (var i = 0; i < products.length; i++) {
			sum = sum + parseInt(products[i].qty) * parseInt(products[i].price);
		}
		setTotal(sum);
	};

	return (
		<div className="App" style={{ margin: "72px 0" }}>
			<Navbar />
			{activeCart && <div className="overlay"></div>}
			<CartButton
				activeCart={activeCart}
				setActiveCart={setActiveCart}
				total={total}
			/>
			<CartSidebar
				activeCart={activeCart}
				setActiveCart={setActiveCart}
				total={total}
			/>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/product/:id">
					<Detail />
				</Route>
				<Route exact path="/checkout">
					<Checkout total={total} />
				</Route>
				<Route exact path="/signin">
					<Signin />
				</Route>
				<Route exact path="/register">
					<Register />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
