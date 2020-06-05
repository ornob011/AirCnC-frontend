import React from "react";
import RoomsInfoBlock from "../rooms-info-block/RoomsInfoBlock";
import Cartblock from "../cart-block/Cartblock";

const RoomsContent = ({ data }) => {
	return (
		<div className="rooms-content">
			<div className="container">
				<div className="row">
					<div className="col-md-7">
						<RoomsInfoBlock info={data} />
					</div>
					<div className="col-md-4 offset-1">
						<Cartblock info={data} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default RoomsContent;
