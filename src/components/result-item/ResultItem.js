import React from "react";
import "./result-item.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ResultItem = ({ data }) => {
    const {
        _id,
        thumbnail: { imageOne },
        title,
        roomsInfo,
        extraFacility,
        cancelAvailable,
        price,
        shift,
    } = data;
    return (
        <Link to={`/house/${_id}`}>
            <div className="result">
                <div className="result-thumbnail">
                    <img src={imageOne} alt="" />
                </div>
                <div className="result-content">
                    <h5>{title}</h5>
                    <p>{roomsInfo}</p>
                    <p>{extraFacility}</p>
                    <span>
                        {cancelAvailable ? "Cancellation flexibility available" : ""}
                    </span>
                    <div className="result-meta">
                        <div className="result-rating">
                            <FontAwesomeIcon icon={faStar} />
                            <span>4.9 (20)</span>
                        </div>
                        <div className="result-price">
                            <h6>
                                <strong>${price}</strong> / {shift}
                            </h6>
                            <p>${parseFloat(price) + 12} total</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ResultItem;
