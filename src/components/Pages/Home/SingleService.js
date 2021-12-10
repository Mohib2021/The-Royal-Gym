import React from "react";
import { useParams } from "react-router";
import useData from "../../Hooks/useData/useData";
import ShowSIngleService from "./ShowSIngleService";

function SingleService() {
	// getting all data
	const datum = useData();
	const { serviceId } = useParams();
	// extracting selected data
	const selectedService = datum.filter(
		(data) => data.id === parseFloat(serviceId)
	);

	return (
		<div>
			{selectedService.map((selected) => (
				<ShowSIngleService key={selected.id} selected={selected} />
			))}
		</div>
	);
}

export default SingleService;
