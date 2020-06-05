import React, { useEffect } from "react";
import "./payment-sucess-page.styles.scss";
import CustomButton from "../../components/custom-button/CustomButton";
import successIcon from "../../assets/success-msg.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
    saveIntoData,
    clearBookingInfo,
} from "../../redux/booking/booking.actions";

const PaymentSuccessPage = ({
    bookingInfo,
    saveIntoData,
    clearBookingInfo,
}) => {
    useEffect(() => {
        saveIntoData({ ...bookingInfo });
    }, [bookingInfo, saveIntoData]);
    return (
        <div className="payment-success-page">
            <div className="payment-status-success">
                <img src={successIcon} alt="" />
                <h2 className="text-primary">Payment successful</h2>
                <h1>${bookingInfo.total}</h1>
                <h4>#ID {bookingInfo.paymentMethod.id}</h4>
                <Link to="/">
                    <CustomButton onClick={() => clearBookingInfo()}>
                        Back to Home
					</CustomButton>
                </Link>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => ({
    bookingInfo: state.booking.bookingData,
});

export default connect(mapStateToProps, { saveIntoData, clearBookingInfo })(
    PaymentSuccessPage
);
