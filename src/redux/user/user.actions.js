import axios from "axios";
import setAuthToken from "../../components/utils/setAuthToken";
import { alertAction } from "../alert/alert.actions";
import {
    GET_CURRENT_USER,
    AUTH_ERROR,
    REGISTRATION_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    CLEAR_LOGIN_ERRORS,
    LOGOUT,
} from "./user.types";

export const loadUser = () => async (dispatch) => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }
    try {
        const res = await axios.get("https://aircnc-backend011.herokuapp.com/api/user");
        dispatch({
            type: GET_CURRENT_USER,
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: AUTH_ERROR,
        });
    }
};

//Register new user
export const register = ({ displayName, email, password }) => async (
    dispatch
) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    const body = JSON.stringify({ displayName, email, password });
    try {
        const res = await axios.post("https://aircnc-backend011.herokuapp.com/api/user/register", body, config);
        dispatch({
            type: REGISTRATION_SUCCESS,
            payload: res.data,
        });
        dispatch(alertAction("Accounted created", "success"));
    } catch (e) {
        console.log(e.message);
        const errors = e.response.data.errors;
        if (errors) {
            errors.map((x) => dispatch(alertAction(x.msg, "danger")));
        }
    }
};

//Login
export const login = (email, password) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    const body = JSON.stringify({ email, password });
    try {
        const res = await axios.post("https://aircnc-backend011.herokuapp.com/api/user/login", body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });
        dispatch(loadUser());
        dispatch(alertAction("Logged In", "success"));
    } catch (e) {
        const errors = e.response.data.errors;
        if (errors) {
            errors.map((x) => dispatch(alertAction(x.msg, "danger")));
        }
        dispatch({
            type: LOGIN_FAILED,
        });
        dispatch(
            {
                type: CLEAR_LOGIN_ERRORS,
            },
            2000
        );
    }
};

// LOGOUT
export const logout = () => (dispatch) => {
    dispatch({
        type: LOGOUT,
    });
};
