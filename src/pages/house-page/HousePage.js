import React, { useEffect } from "react";
import RoomsThumbnail from "../../components/rooms-thumbnail/RoomsThumbnail";
import RoomsContent from "../../components/rooms-content/RoomsContent";
import { connect } from "react-redux";
import { getSingleRoom } from "../../redux/room/room.actions";
import { useParams } from "react-router-dom";
import { PulseLoaderSpinner } from "../../components/utils/Spinner";

const HousePage = ({ getSingleRoom, rooms }) => {
    const { id } = useParams();
    useEffect(() => {
        getSingleRoom(id);
    }, [getSingleRoom, id]);

    return rooms.loading && rooms.room ? (
        <PulseLoaderSpinner loading={rooms.loading} />
    ) : (
            <div className="house-page">
                <RoomsThumbnail image={rooms.room && rooms.room.thumbnail} />
                <RoomsContent data={rooms.room} />
            </div>
        );
};

const mapStateToProps = (state) => ({
    rooms: state.rooms
});

export default connect(mapStateToProps, { getSingleRoom })(HousePage);
