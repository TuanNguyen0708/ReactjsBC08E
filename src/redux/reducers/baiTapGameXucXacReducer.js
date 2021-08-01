


//liệt kê các state của ứng dụng bài tập game
const stateDefault = {
    soBanChoi:0,
    soBanThang:0,
    banChon:true,
    mangXucXac: [
        {hinhAnh:'./img/gameXucXac/2.png',diem:2},
        {hinhAnh:'./img/gameXucXac/1.png',diem:1},
        {hinhAnh:'./img/gameXucXac/1.png',diem:1},
    ]
}

export const baiTapXucXacReducer = (state = stateDefault,action) => {
    switch(action.type) {
        case 'DAT_CUOC' : {
            console.log('yes');
            state.banChon = action.banChon;
            return {...state}
        }
        case 'PLAY_GAME': {
            //tạo ra xúc xắc ngẫu nhiên từ random
            let mangXucXacNgauNhien = [];
            for(let i = 0; i < 3; i++) {
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                
                let xxnn = {hinhAnh: `./img/gameXucXac/${soNgauNhien}.png`,diem:soNgauNhien};

                mangXucXacNgauNhien.push(xxnn);
            }
            //sét lại state.mangXucXac = mangXucXacNgauNhien
            state.mangXucXac = mangXucXacNgauNhien;

            //xử lý thắng cuộc
            let tongDiem = mangXucXacNgauNhien.reduce((tong,xxnn,index) => {
                return tong += xxnn.diem;
            },0);
            if((state.banChon && tongDiem > 10) || (!state.banChon && tongDiem <=10)){
                state.soBanThang +=1
            }
            state.soBanChoi +=1;
            return{...state}
        }
        default: return state;
    }
}