import React from "react";
import "./house-rules.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShoppingCart,
    faChargingStation,
    faClosedCaptioning,
} from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";
import { getBookingData } from "../../redux/booking/booking.actions";
const mnt = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

const HouseRules = ({ getBookingData, bookingInfo }) => {
    const {
        dateDiff,
        room: { shift },
        arrival,
        departure,
        location,
    } = bookingInfo;
    const date1 = new Date(arrival);
    const date2 = new Date(departure);
    return (
        <div className="house-rules">
            <div className="house-rules-heading">
                <h3>Review house rules</h3>
                <h6>
                    {dateDiff} {shift} in {location}
                </h6>
                <div className="schedule-date">
                    <div className="schedule-date-box">
                        <div className="data-calendar">
                            <span>{mnt[date1.getMonth()]}</span>{" "}
                            <span>{arrival.split("-")[2]}</span>
                        </div>
                        <div className="time-status">
                            <p>{date1 && date1.toString().slice(0, 3)} check-in</p>
                            {/* <p>After 12:00 PM</p> */}
                        </div>
                    </div>
                    <div className="schedule-date-box">
                        <div className="data-calendar">
                            <span>{mnt[date2.getMonth()]}</span>{" "}
                            <span>{departure.split("-")[2]}</span>
                        </div>
                        <div className="time-status">
                            <p>{date2 && date2.toString().slice(0, 3)} check-in</p>
                            {/* <p>After 12:00 PM</p> */}
                        </div>
                    </div>
                </div>
                <p>Self check-in with building staff</p>
            </div>
            <div className="house-rules-content">
                <h3>Things to keep in mind</h3>
                <ul>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </span>{" "}
                        <p>Suitable for children and infants</p>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faChargingStation} />
                        </span>{" "}
                        <p>Pets allowed</p>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faClosedCaptioning} />
                        </span>{" "}
                        <p>No parties or events</p>
                    </li>
                </ul>
            </div>
            {/* <CustomButton>Agree and continue</CustomButton> */}
        </div>
    );
};
const mapStateToProps = (state) => ({
    bookingInfo: state.booking.bookingData,
});
export default connect(mapStateToProps, { getBookingData })(HouseRules);
