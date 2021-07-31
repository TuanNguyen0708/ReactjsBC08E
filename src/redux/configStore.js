import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducers/gioHangReducer";




//state trong redux là reducer
const rootReducer = combineReducers({
    // các state của ứng dụng sẽ được lưu tại đây
    gioHangReducer: gioHangReducer
});


export const store = createStore(rootReducer);