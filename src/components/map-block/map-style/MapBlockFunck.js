import React from "react";
import { useState } from "react";
import Pins from "./pins";
import CityInfo from "./city-info";
import CITIES from "./cities.json";
import mapStyle from "./map-style";
import MapGL, { Popup, FullscreenControl, ScaleControl } from "react-map-gl";
import { connect } from "react-redux";

const fullscreenControlStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    padding: "10px",
};

const scaleControlStyle = {
    position: "absolute",
    bottom: 36,
    left: 0,
    padding: "10px",
};
const mapStateToProps = (state) => ({
    rooms: state.rooms.allRooms,
});

const TOKEN =
    "pk.eyJ1Ijoib3Jub2IwMTEiLCJhIjoiY2tiMWE0eTc0MGcwMDJxbzN2eHIzaTNvcCJ9.gTtK5gZEgke0zhUawAhFpA";

const MapBlock = ({ rooms }) => {
    const [mapData, setMapData] = useState({
        viewport: {
            latitude: 23.811988,
            longitude: 90.411908,
            zoom: 12.5,
            bearing: 0,
            pitch: 0,
        },
        popupInfo: null,
    });

    const updateViewport = (viewport) => {
        setMapData({ viewport });
    };

    const onClickMarker = (city) => {
        setMapData({ popupInfo: city });
    };

    const renderPopup = () => {
        const { popupInfo } = mapData;
        return (
            popupInfo && (
                <Popup
                    tipSize={5}
                    anchor="top"
                    longitude={popupInfo.longitude}
                    latitude={popupInfo.latitude}
                    closeOnClick={false}
                    onClose={() => setMapData({ popupInfo: null })}>
                    <CityInfo info={popupInfo} />
                </Popup>
            )
        );
    };
    const { viewport } = mapData;
    return (
        <MapGL
            {...viewport}
            mapStyle={mapStyle}
            width="100%"
            height="100%"
            interactiveLayerIds={["sf-neighborhoods-fill"]}
            onViewportChange={updateViewport}
            mapboxApiAccessToken={TOKEN}>
            <Pins data={CITIES} onClick={onClickMarker} />
            {renderPopup()}
            <div style={fullscreenControlStyle}>
                <FullscreenControl />
            </div>

            <div style={scaleControlStyle}>
                <ScaleControl />
            </div>
        </MapGL>
    );
};

export default connect(mapStateToProps)(MapBlock);
