import React, { useState, useRef, useEffect } from "react";

function Product({ product }) {
	const [paidFor, setPaidFor] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const [error, setError] = useState(null);
	const paypalRef = useRef();

	useEffect(() => {
		const script = document.createElement("script");
		script.src =
			"https://www.paypal.com/sdk/js?client-id=Afp61uHLm4iM7KZgELv2rMBNJTmcS_evoFv3Xhncfvy0D_8lBtrwfWJydAXN8tvbzHTswTbWjCXYHb9U";
		script.addEventListener("load", () => setLoaded(true));
		document.body.appendChild(script);
		if (loaded) {
			setTimeout(() => {
				window.paypal
					.Buttons({
						createOrder: (data, actions) => {
							return actions.order.create({
								purchase_units: [
									{
										amount: {
											currency_code: "USD",
											value: product.price,
										},
									},
								],
							});
						},
						onApprove: async (data, actions) => {
							const order = await actions.order.capture();
							setPaidFor(true);
						},
						onError: (err) => {
							setError(err);
						},
					})
					.render(paypalRef.current);
			}, 1500);
		}
	}, [loaded, product.price]);

	if (paidFor) {
		return (
			<div>
				<h1>Congrats, you just bought {product.name}!</h1>
			</div>
		);
	}

	return (
		<div>
			{error && <div>Uh oh, an error occurred! {error.message}</div>}
			<div ref={paypalRef} />
		</div>
	);
}

export default Product;
