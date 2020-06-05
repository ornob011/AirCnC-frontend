import { GET_BOOKING_FORM_DATA, CLEAR_BOOKING_INFO } from "./booking.types";

const initState = {
	bookingData: null,
	loading: true,
	error: [],
};

const bookingReducer = (state = initState, action) => {
	switch (action.type) {
		case GET_BOOKING_FORM_DATA:
			return {
				...state,
				bookingData: action.payload,
			};
		case CLEAR_BOOKING_INFO:
			return {
				...state,
				bookingData: null,
			};
		default:
			return state;
	}
};

export default bookingReducer;
