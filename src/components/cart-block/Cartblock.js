import React from "react";
import "./cart-block.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../custom-button/CustomButton";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { today } from "../utils/getData";
import { connect } from "react-redux";
import { getBookingData } from "../../redux/booking/booking.actions";
import { withRouter } from "react-router-dom";

const Cartblock = ({
    hideReverseButton,
    bookingInfo,
    room,
    getBookingData,
    history,
}) => {
    const { price, shift, reviews } = room;
    const { adults, babies, child, dateDiff } = bookingInfo;
    const reserveHandler = () => {
        getBookingData({
            ...bookingInfo,
            room: room,
            total: price * dateDiff + 10 + 15,
        });
        history.push("/checkout");
    };
    return (
        <div className="cart-block">
            <div className="cart-heading">
                <h4>
                    <strong>${price}</strong>/ {shift}
                </h4>
                <p>
                    <FontAwesomeIcon icon={faStar} /> <strong>4.9</strong>(
					{reviews && reviews.length}) reviews
				</p>
            </div>
            <div className="cart-info-box">
                <p>Dates</p>
                <div className="cart-info-box-content">
                    <div className="date-input">
                        <input
                            type="date"
                            name="arrival"
                            value={bookingInfo.arrival}
                            min={today}
                            onChange={(e) =>
                                getBookingData({ ...bookingInfo, arrival: e.target.value })
                            }
                        />
                    </div>
                    <div className="date-input">
                        <input
                            type="date"
                            name="departure"
                            value={bookingInfo.departure}
                            min={bookingInfo.arrival}
                            onChange={(e) =>
                                getBookingData({ ...bookingInfo, departure: e.target.value })
                            }
                        />
                    </div>
                </div>
            </div>
            <div className="cart-info-box">
                <p>Guests</p>
                <div className="cart-info-box-content">
                    <Accordion defaultActiveKey="4">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                <span>{adults + child + babies} Guests</span>
                                <span>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <ul className="ht-guests-list">
                                        {adults > 0 && (
                                            <li>
                                                <span>Adults</span>
                                                <span>{adults}</span>
                                            </li>
                                        )}
                                        {child > 0 && (
                                            <li>
                                                <span>Child</span>
                                                <span>{child}</span>
                                            </li>
                                        )}
                                        {babies > 0 && (
                                            <li>
                                                <span>Babies</span>
                                                <span>{babies}</span>
                                            </li>
                                        )}
                                    </ul>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </div>
            <div className="cart-info-box">
                <ul>
                    <li>
                        <span>
                            ${price} x {dateDiff} {shift}
                        </span>{" "}
                        <span>${price * dateDiff}</span>
                    </li>
                    <li>
                        <span>Cleaning fee</span> <span>$10</span>
                    </li>
                    <li>
                        <span>Service fee</span> <span>$15</span>
                    </li>
                    <li>
                        <span>
                            <strong>Total</strong>
                        </span>{" "}
                        <span>${price * dateDiff + 10 + 15}</span>
                    </li>
                </ul>
            </div>
            {hideReverseButton ? (
                " "
            ) : (
                    <CustomButton fullWidth onClick={() => reserveHandler()}>
                        Reserve
                    </CustomButton>
                )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    room: state.rooms.room,
    bookingInfo: state.booking.bookingData,
});

export default withRouter(
    connect(mapStateToProps, { getBookingData })(Cartblock)
);
