import {
	GET_CURRENT_USER,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	AUTH_ERROR,
	REGISTRATION_SUCCESS,
	REGISTRATION_FAILED,
	CLEAR_LOGIN_ERRORS,
	LOGOUT,
} from "./user.types";

const INITIAL_STATE = {
	token: localStorage.getItem("token"),
	isAuthenticated: null,
	user: null,
	loading: true,
	error: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: true,
				user: action.payload,
				loading: false,
			};
		case REGISTRATION_SUCCESS:
		case LOGIN_SUCCESS:
			localStorage.setItem("token", action.payload.token);
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				loading: false,
			};

		case LOGIN_FAILED:
			return {
				...state,
				token: null,
				user: null,
				loading: false,
				error: action.payload,
			};
		case AUTH_ERROR:
		case REGISTRATION_FAILED:
		case LOGOUT:
			localStorage.removeItem("token");
			return {
				...state,
				isAuthenticated: false,
				loading: false,
				user: null,
				token: null,
			};
		case CLEAR_LOGIN_ERRORS:
			return {
				...state,
				error: [],
			};
		default:
			return state;
	}
};
export default userReducer;
