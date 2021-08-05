import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducers/gioHangReducer";
import { baiTapXucXacReducer } from "./reducers/baiTapGameXucXacReducer";
import baiTapOanTuTiReducer from "./reducers/baiTapOanTuTiReducer";
import baiTapDatVeReducer from "./reducers/baiTapDatVeReducer";

//state trong redux là reducer
const rootReducer = combineReducers({ //store tổng của ứng dụng
    // các state của ứng dụng sẽ được lưu tại đây
    gioHangReducer: gioHangReducer, //store giỏ hàng
    baiTapXucXacReducer, //store bài tập xúc xắc
    baiTapOanTuTiReducer,
    baiTapDatVeReducer,
});


export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    );