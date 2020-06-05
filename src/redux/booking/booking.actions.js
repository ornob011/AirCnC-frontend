import { GET_BOOKING_FORM_DATA, CLEAR_BOOKING_INFO } from "./booking.types";
import DateDiff from "date-diff";
import axios from "axios";

export const getBookingData = (data) => async (dispatch) => {
    var date1 = new Date(data.arrival);
    var date2 = new Date(data.departure);
    var diff = new DateDiff(date2, date1);
    try {
        dispatch({
            type: GET_BOOKING_FORM_DATA,
            payload: { ...data, dateDiff: diff.days() },
        });
    } catch (e) {
        console.log(e.message);
    }
};

// Save booking info into DB
export const saveIntoData = (data) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const body = JSON.stringify({ ...data });
        await axios.post("https://aircnc-backend011.herokuapp.com/api/book", body, config);
    } catch (e) {
        console.log(e.message);
    }
};

export const clearBookingInfo = () => async (dispatch) => {
    dispatch({
        type: CLEAR_BOOKING_INFO,
    });
};
