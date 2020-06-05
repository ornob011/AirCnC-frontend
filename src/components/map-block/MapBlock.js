import * as React from "react";
import { Component } from "react";
import Pins from "./pins";
import PopUp from "./PopUp";
import mapStyle from "./map-style/map-style";
import MapGL, { Popup, FullscreenControl, ScaleControl } from "react-map-gl";
import { connect } from "react-redux";
import "./map-block.styles.scss";

const TOKEN =
    "pk.eyJ1Ijoib3Jub2IwMTEiLCJhIjoiY2tiMWE0eTc0MGcwMDJxbzN2eHIzaTNvcCJ9.gTtK5gZEgke0zhUawAhFpA";

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

class MapBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 23.808217,
                longitude: 90.411655,
                zoom: 11.5,
                bearing: 0,
                pitch: 0,
            },
            popupInfo: null,
        };
    }

    _updateViewport = (viewport) => {
        this.setState({ viewport });
    };

    _onClickMarker = (city) => {
        this.setState({ popupInfo: city });
    };

    _renderPopup() {
        const { popupInfo } = this.state;
        return (
            popupInfo && (
                <Popup
                    tipSize={5}
                    anchor="top"
                    longitude={popupInfo.longitude}
                    latitude={popupInfo.latitude}
                    closeOnClick={false}
                    onClose={() => this.setState({ popupInfo: null })}>
                    <PopUp info={popupInfo} />
                </Popup>
            )
        );
    }
    render() {
        const { viewport } = this.state;
        const data = this.props.rooms;
        const dataArray = [];
        data &&
            data.map((x) => {
                const ctmObj = {
                    id: x._id,
                    title: x.title,
                    shift: x.shift,
                    city: x.address.placeName,
                    image: x.thumbnail.imageOne,
                    state: x.address.placeName,
                    latitude: x.address.latitude,
                    longitude: x.address.longitude,
                    price: x.price,
                };
                return dataArray.push(ctmObj);
            });
        return (
            <MapGL
                {...viewport}
                mapStyle={mapStyle}
                width="100%"
                height="100%"
                interactiveLayerIds={["sf-neighborhoods-fill"]}
                onViewportChange={this._updateViewport}
                mapboxApiAccessToken={TOKEN}>
                <Pins data={dataArray} onClick={this._onClickMarker} />

                {this._renderPopup()}

                <div style={fullscreenControlStyle}>
                    <FullscreenControl />
                </div>

                <div style={scaleControlStyle}>
                    <ScaleControl />
                </div>
            </MapGL>
        );
    }
}

const mapStateToProps = (state) => ({
    rooms: state.rooms.allRooms,
});

export default connect(mapStateToProps)(MapBlock);

// export function renderToDom(container) {
// 	render(<App />, container);
// }
