import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import { Products } from "./components/Products";
import { IProduct } from "./models/IProduct";

function App() {
	return (
		<Router>
			<div className="grid-container">
				<div className="head">
					<h1>Webshop</h1>
					<nav>
						<Link to="/">
							<div>Home</div>
						</Link>
						<Link to="/products">
							<div>Products</div>
						</Link>
						<Link to="/admin">
							<div>Admin</div>
						</Link>
					</nav>
				</div>
				<div className="category"></div>
				<div className="container">
					<Switch>
						<Route path="/admin"></Route>
						<Route path="/products">
							<Products></Products>
						</Route>
						<Route path="/checkout"></Route>
						<Route path="/" exact></Route>
						<Route path="*">{/* <NoMatch /> */}</Route>
					</Switch>
				</div>
				<div className="cart"></div>
			</div>
		</Router>
	);
}

export default App;
