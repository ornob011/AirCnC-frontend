import { SET_ALERT, REMOVE_ALERT } from "./alert.types";

const initState = [];

const alertReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_ALERT:
			return [...state, action.payload];
		case REMOVE_ALERT:
			return state.filter((x) => x.id !== action.payload);

		default:
			return state;
	}
};

export default alertReducer;
