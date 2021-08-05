const stateDefault = {
    danhSachGheDangDat: [
        //{soGhe:1,gia:1000}
    ]
}


const baiTapDatVeReducer = (state = stateDefault,action) => {
    switch(action.type) {
        case 'DAT_GHE': {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
            //nếu ghế đang đặt đã có trong mảng => remove
            if (index != -1){
                danhSachGheDangDatUpdate.splice(index,1);
            }else { //nếu ghế chưa có trong mảng thì sẽ push vào
                danhSachGheDangDatUpdate.push(action.ghe)
            }
            //cập nhật lại state để giao diện render lại
            state.danhSachGheDangDat=danhSachGheDangDatUpdate

            return {...state}
        }
        case 'HUY_GHE': {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe);
            if (index != -1){
                danhSachGheDangDatUpdate.splice(index,1);
            }
        state.danhSachGheDangDat = danhSachGheDangDatUpdate
        return {...state}

        }
        

        default: return {...state}
    }
}

export default baiTapDatVeReducer;