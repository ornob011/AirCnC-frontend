import React from "react";
import "./rooms-thumbnail.styles.scss";

const RoomsThumbnail = ({ image }) => {
    return (
        <div className="rooms-thumbnails-wrapper">
            <div className="container">
                <div className="rooms-thumbnails">
                    <div className="rooms-thumbnail">
                        <img src={image && image.imageOne} alt="" />
                    </div>
                    <div className="rooms-thumbnail">
                        <img src={image && image.imageTwo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomsThumbnail;
