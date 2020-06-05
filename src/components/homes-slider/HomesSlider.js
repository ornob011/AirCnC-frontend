import React, { useState } from "react";
import ServiceCard from "../service-card/ServiceCard";

const HomesSlider = () => {
	const [faked] = useState([
		{
			id: 1,
			place: "Night- New work",
			title: "Unique cob cottage",
			price: 334,
			rating: 8,
			thumbnail:
				"https://i.ibb.co/vcWsLMc/interior-design-for-small-spaces-living-room-adddnd-kitchen-pic-14-2.jpg",
		},
		{
			id: 2,
			place: "Entertainment- vancouver",
			title: "The Joshua Tree House",
			price: 244,
			rating: 8,
			thumbnail:
				"https://i.ibb.co/BV4cLzp/interior-design-for-small-spaces-living-room-and-kitchen-pic-14-1.jpg",
		},
		{
			id: 3,
			place: "photo class- los angeles",
			title: "A Pirate's Life For Me - Houseboat!",
			price: 84,
			rating: 38,
			thumbnail: "https://i.ibb.co/KLFM5TG/pexels-photo-1918291.jpg",
		},
	]);
	return (
		<div className="home-slider">
			<div className="secondary-title">
				<h4>Homes</h4>
				<a href="/">See all</a>
			</div>
			<div className="home-slider-content">
				<div className="row">
					{faked.map((x, i) => (
						<div className="col-md-4" key={i}>
							<ServiceCard data={x} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default HomesSlider;
