import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducers/gioHangReducer";
import { baiTapXucXacReducer } from "./reducers/baiTapGameXucXacReducer";
import {baiTapQuanLyNguoiDungReducer} from "./reducers/baiTapQuanLyNguoiDungReducer"


//state trong redux là reducer
const rootReducer = combineReducers({
    // các state của ứng dụng sẽ được lưu tại đây
    gioHangReducer: gioHangReducer,
    baiTapXucXacReducer,
    baiTapQuanLyNguoiDungReducer,
});


export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    );