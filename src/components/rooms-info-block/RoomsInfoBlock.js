import React, { useState } from "react";
import "./rooms-info-block.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faCheckSquare,
    faSprayCan,
    faUser,
    faStar,
    faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import Collapse from "react-bootstrap/Collapse";

const RoomsInfoBlock = ({ info }) => {
    const [open, setOpen] = useState(false);
    const { title, placeName, roomsInfo, description } = info;
    return (
        <div className="rooms-info-block">
            <div className="rooms-heading">
                <h4>{title}</h4>
            </div>
            <div className="rooms-meta-info">
                <p>{placeName}</p>
                <p>{roomsInfo}</p>
            </div>
            <div className="rooms-info-key">
                <ul>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faHome} />
                        </span>
                        <div>
                            <h6>Entire home</h6>
                            <p>You'll have the condominium to yourself</p>
                        </div>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faCheckSquare} />
                        </span>
                        <div>
                            <h6>Entire home</h6>
                            <p>You'll have the condominium to yourself</p>
                        </div>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faSprayCan} />
                        </span>
                        <div>
                            <h6>Entire home</h6>
                            <p>You'll have the condominium to yourself</p>
                        </div>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                        <div>
                            <h6>Entire home</h6>
                            <p>You'll have the condominium to yourself</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="rooms-description">
                <p>
                    {description && description.slice(0, description.length - 300)}
                    {!open ? (
                        <button
                            className="desc-collapse-btn"
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}>
                            Read more about this space
                            <FontAwesomeIcon icon={faAngleDown} />
                        </button>
                    ) : (
                            ""
                        )}
                    <Collapse in={open}>
                        <div id="example-collapse-text">
                            {description &&
                                description.slice(description.length - 300, description.length)}
                        </div>
                    </Collapse>
                </p>
            </div>
            <div className="rooms-reviews">
                <h4>Reviews</h4>
                <FontAwesomeIcon icon={faStar} />
                <p>
                    <strong>4.9</strong> (20) people
				</p>
            </div>
        </div>
    );
};

export default RoomsInfoBlock;
