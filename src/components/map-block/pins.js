import * as React from "react";
import { PureComponent } from "react";
import { Marker } from "react-map-gl";

// Important for perf: the markers never change, avoid rerender when the map viewport changes
export default class Pins extends PureComponent {
	render() {
		const { data, onClick } = this.props;

		return data.map((city, index) => (
			<Marker
				key={`marker-${index}`}
				longitude={city.longitude}
				latitude={city.latitude}>
				{/* <svg
					height={SIZE}
					viewBox="0 0 24 24"
					style={{
						cursor: "pointer",
						fill: "#d00",
						stroke: "none",
						transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
					}}
					onClick={() => onClick(city)}>
					<path d={ICON} />
				</svg> */}
				<div className="ct-pins" onClick={() => onClick(city)}>
					${city.price}
				</div>
			</Marker>
		));
	}
}
