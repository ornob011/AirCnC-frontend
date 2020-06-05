import React from "react";
import "./checkout-page.styles.scss";
import CheckoutBlock from "../../components/checkout-block/CheckoutBlock";
import Cartblock from "../../components/cart-block/Cartblock";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Alert from "../../components/utils/Alert";

const CheckOutPage = ({ bookingInfo }) => {
    if (bookingInfo.paymentMethod) {
        return <Redirect to="/pay-success" />;
    }
    return (
        <div className="checkout-page">
            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-7">
                        <Alert />
                        <CheckoutBlock />
                    </div>
                    <div className="col-md-4 offset-1">
                        <Cartblock hideReverseButton />
                    </div>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => ({
    bookingInfo: state.booking.bookingData,
});

export default connect(mapStateToProps)(CheckOutPage);
