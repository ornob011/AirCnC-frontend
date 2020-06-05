import React, { useState } from "react";
import "./payment-block.styles.scss";
import CustomButton from "../custom-button/CustomButton";
import CardPay from "./CardPay";
import cardlogo from "../../assets/Screenshot_1.png";
import paypallogo from "../../assets/Screenshot_2.png";
import Popup from "reactjs-popup";
import Product from "./PaypalPay";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const PaymentBlock = ({ bookingInfo }) => {
    const [popUp, setPopUp] = useState(false);
    const [radio, setRadio] = useState(null);
    const onChageHandler = (e) => {
        setRadio(e.target.value);
    };
    const openModal = () => {
        setPopUp(true);
    };
    const closeModal = () => {
        setPopUp(false);
    };

    if (bookingInfo && bookingInfo.paymentMethod) {
        return <Redirect to={"/pay-success"} />;
    }

    //ddd
    const product = {
        price: bookingInfo.total,
        name: bookingInfo.title,
    };
    return (
        <div className="payment-block">
            <h6>Payment Selection</h6>
            <div className="payment-credit-card-box">
                <div className="payment-credit-card">
                    <h4>
                        <input
                            type="radio"
                            id="card"
                            name="paymentoption"
                            value="card"
                            onChange={onChageHandler}
                        />
						Credit card{" "}
                        <p>
                            Safe money transfer using your bank account. Visa , MasterCard
                            Discover, American Express
						</p>
                    </h4>
                    <div className="payment-card-img">
                        <img src={cardlogo} alt="" />
                    </div>
                </div>
                <CardPay radio={radio} />
            </div>
            <div className="payment-credit-card-box">
                <div className="paypal-payment">
                    <div>
                        <h6>
                            {" "}
                            <input
                                type="radio"
                                id="paypal"
                                name="paymentoption"
                                value="paypal"
                                onChange={onChageHandler}
                            />
							PayPal
						</h6>
                        <p>
                            You Will be redirected to paypal website to complete your purchase
						</p>
                    </div>
                    <div>
                        <img src={paypallogo} alt="" />
                    </div>
                </div>
                <Popup open={popUp} closeOnDocumentClick onClose={closeModal}>
                    <div>
                        <Product product={product} />
                    </div>
                </Popup>
            </div>
            {radio === "paypal" ? (
                <CustomButton right onClick={(e) => openModal()}>
                    Continue to pay
                </CustomButton>
            ) : (
                    ""
                )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    bookingInfo: state.booking.bookingData,
});

export default connect(mapStateToProps)(PaymentBlock);
