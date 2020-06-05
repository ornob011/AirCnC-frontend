import React, { useEffect } from "react";
import "./PlaceMapPage.scss";
import MapResultBlock from "../map-result-block/MapResultBlock"
import MapBlock from "../../components/map-block/MapBlock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { getRooms } from "../../redux/room/room.actions";
import { Redirect } from "react-router-dom";
import { PulseLoaderSpinner } from "../../components/utils/Spinner";

const PlaceMapPage = ({
    bookingInfo,
    getRooms,
    rooms: { loading, allRooms },
}) => {
    useEffect(() => {
        getRooms();
    }, [getRooms]);
    if (!bookingInfo) {
        return <Redirect to="/" />;
    }

    const { location, adults, child, babies } = bookingInfo;
    return loading ? (
        <PulseLoaderSpinner loading={loading} />
    ) : (
            <div className="map-place-page">
                <div className="travel-search-info">
                    <div className="search-place-name">{location}</div>
                    <div className="search-booking-time">Apr 13-17</div>
                    <div className="search-guest-list">
                        {adults + child + babies} Guests <FontAwesomeIcon icon={faSearch} />{" "}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 offset-1">
                        <MapResultBlock />
                    </div>
                    <div className="col-md-7 custom-map-canvas">
                        <MapBlock />
                    </div>
                </div>
            </div>
        );
};

const mapStateToProps = (state) => ({
    bookingInfo: state.booking.bookingData,
    rooms: state.rooms
});

export default connect(mapStateToProps, { getRooms })(PlaceMapPage);
