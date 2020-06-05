import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
	CardElement,
	Elements,
	ElementsConsumer,
} from "@stripe/react-stripe-js";
import CustomButton from "../custom-button/CustomButton";

import { connect } from "react-redux";
import { getBookingData } from "../../redux/booking/booking.actions";
import { withRouter } from "react-router-dom";

let getBookingInfo;
let radioStatus;
let currentBookingInfo;
let historyPush;
const CheckoutForm = (props) => {
	const handleSubmit = async (event) => {
		event.preventDefault();
		const { stripe, elements } = props;
		if (!stripe || !elements) {
			return;
		}
		const cardElement = elements.getElement(CardElement);
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card: cardElement,
		});

		if (error) {
			console.log("[error]", error);
			getBookingInfo({ ...currentBookingInfo, error });
		} else {
			console.log("[PaymentMethod]", paymentMethod);
			getBookingInfo({ ...currentBookingInfo, paymentMethod });
		}
	};
	const { stripe } = props;
	return (
		<form onSubmit={handleSubmit}>
			<CardElement
				options={{
					style: {
						base: {
							fontSize: "16px",
							color: "#424770",
							"::placeholder": {
								color: "#aab7c4",
							},
						},
						invalid: {
							color: "#9e2146",
						},
					},
				}}
			/>
			{radioStatus === "card" ? (
				<CustomButton
					type="submit"
					disabled={!stripe}
					onClick={historyPush}
					right
					cardPay>
					Continue to pay
				</CustomButton>
			) : (
				""
			)}
		</form>
	);
};

const InjectedCheckoutForm = () => {
	return (
		<ElementsConsumer>
			{({ elements, stripe }) => (
				<CheckoutForm elements={elements} stripe={stripe} />
			)}
		</ElementsConsumer>
	);
};
const stripePromise = loadStripe("pk_test_Tcs5id0sHuiliQSYOCdEhbWN008lYcHxVF");

const CardPay = ({ radio, getBookingData, bookingInfo, history }) => {
	radioStatus = radio;
	getBookingInfo = getBookingData;
	currentBookingInfo = bookingInfo;
	historyPush = (e) => {
		if (bookingInfo.paymentMethod) {
			return history.push("/pay-success");
		}
	};
	return (
		<Elements stripe={stripePromise}>
			<InjectedCheckoutForm />
		</Elements>
	);
};

const mapStateToProps = (state) => ({
	bookingInfo: state.booking.bookingData,
});

export default withRouter(
	connect(mapStateToProps, { getBookingData })(CardPay)
);
