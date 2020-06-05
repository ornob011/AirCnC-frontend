import React, { useState } from "react";
import ServiceCard from "../service-card/ServiceCard";

const ExperiencesShowcase = () => {
	const [fakedata] = useState([
		{
			id: 1,
			place: "Night- New work",
			title: "Discover the city's party",
			price: 34,
			rating: 8,
			thumbnail: "https://i.ibb.co/PxHmQjf/a0006298156-10.jpg",
		},
		{
			id: 2,
			place: "Entertainment- vancouver",
			title: "Tour with an enthusiastic local!",
			price: 24,
			rating: 8,
			thumbnail: "https://i.ibb.co/C1LNnwJ/img-2268-orig.jpg",
		},
		{
			id: 3,
			place: "photo class- los angeles",
			title: "Must have L.A pictures!",
			price: 84,
			rating: 38,
			thumbnail:
				"https://i.ibb.co/7N2VSZP/people-enjoying-party-53876-32853.jpg",
		},
		{
			id: 4,
			place: "Night- New work",
			title: "Retro photoshoot in NYC",
			price: 14,
			rating: 58,
			thumbnail:
				"https://i.ibb.co/yh62v4s/photo-1587221602242-6bba09bec88e.jpg",
		},
	]);
	return (
		<div className="experiences-showcase">
			<div className="secondary-title">
				<h4>Experiences</h4>
				<a href="/">See all</a>
			</div>
			<div className="experiences">
				<div className="row">
					{fakedata.map((x, i) => (
						<div className="col-md-3" key={i}>
							<ServiceCard data={x} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ExperiencesShowcase;
