import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import bookingReducer from "./booking/booking.reducer";
import alertReducer from "./alert/alert.reducer";
import userReducer from "./user/user.reducer";
import roomReducer from "./room/room.reducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["booking"],
};

const rootReducer = combineReducers({
	booking: bookingReducer,
	alert: alertReducer,
	user: userReducer,
	rooms: roomReducer,
});
export default persistReducer(persistConfig, rootReducer);
