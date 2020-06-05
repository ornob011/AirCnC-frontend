import React from "react";
import "./service-card.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const ServiceCard = ({ data: { place, title, price, rating, thumbnail } }) => {
    return (
        <div className="service-card">
            <div className="service-thumbnail">
                <img src={thumbnail} alt={title} />
            </div>
            <div className="service-content">
                <h5 className="place-title">{place}</h5>
                <h2 className="service-title">{title}</h2>
                <div className="service-meta">
                    <h5 className="price">$ {price} per person</h5>
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalfAlt} />
                        <span>{rating}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
