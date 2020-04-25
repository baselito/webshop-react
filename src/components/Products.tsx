import React, { useState, useEffect } from "react";
import axios from "axios";
import { IProduct } from "../models/IProduct";

export function Products(product: IProduct) {
	const allProducts: IProduct[] = [];
	const [displayProducts, setProducts] = useState(allProducts);

	useEffect(() => {
		axios
			.get(
				"https://medieinstitutet-wie-products.azurewebsites.net/api/products"
			)
			.then((product) => {
				setProducts(product.data);
				console.log(product.data);
			});
	}, []);

	return (
		<React.Fragment>
			{displayProducts.map((product: IProduct) => {
				return (
					<div className="productContainer" key={product.id}>
						<h4>{product.name}</h4>
					</div>
				);
			})}
		</React.Fragment>
	);
}
