import {
    GET_ROOMS,
    SORT_BY_CANCEL_STATUS,
    CLEAR_SORT,
    SORT_BY_PRICE,
    GET_SINGLE_ROOM,
} from "./room.types";
import axios from "axios";

//Get all rooms
export const getRooms = () => async (dispatch) => {
    try {
        const res = await axios.get("https://aircnc-backend011.herokuapp.com/api/room");
        dispatch({
            type: GET_ROOMS,
            payload: res.data,
        });
    } catch (e) {
        console.log(e.message);
    }
};

//Get single room by id
export const getSingleRoom = (id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_SINGLE_ROOM,
            payload: id,
        });
    } catch (e) {
        console.log(e.message);
    }
};

//Sort
export const cancellationFlexibility = () => async (dispatch) => {
    try {
        dispatch({
            type: SORT_BY_CANCEL_STATUS,
        });
    } catch (e) {
        console.log(e.message);
    }
};
export const priceFilter = () => async (dispatch) => {
    try {
        dispatch({
            type: SORT_BY_PRICE,
        });
    } catch (e) {
        console.log(e.message);
    }
};

export const clearFilter = () => async (dispatch) => {
    try {
        dispatch({
            type: CLEAR_SORT,
        });
    } catch (e) {
        console.log(e.message);
    }
};
