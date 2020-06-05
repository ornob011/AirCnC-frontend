import * as React from "react";
import { PureComponent } from "react";
import "./map-block.styles.scss";
import { Link } from "react-router-dom";

export default class PopUp extends PureComponent {
    render() {
        const { info } = this.props;
        // const displayName = `${info.city}, ${info.state}`;

        return (
            <div>
                <Link to={`/house/${info.id}`}>
                    <div className="map-popup-wrapper">
                        <div className="map-popup-thumbnail">
                            <img src={info.image} alt={info.image} />
                        </div>
                        <div className="map-popup-content">
                            <h6>{info.title}</h6>
                            <h5>
                                ${info.price} / {info.shift}
                            </h5>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}
