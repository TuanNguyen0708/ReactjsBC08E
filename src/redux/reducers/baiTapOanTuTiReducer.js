const stateDefault = {
    mangDatCuoc: [
        {ma:'keo',hinhAnh:'./img/gameOanTuTi/keo.png',datCuoc:false},
        {ma:'bua',hinhAnh:'./img/gameOanTuTi/bua.png',datCuoc:false},
        {ma:'bao',hinhAnh:'./img/gameOanTuTi/bao.png',datCuoc:true},
    ],
    ketQua: "I'm Tuan, I love you 3001 !!!",
    soBanThang:0,
    soBanChoi:0,
    computer: {ma:'keo',hinhAnh:'./img/gameOanTuTi/keo.png'}
}


const baiTapOanTuTiReducer = (state=stateDefault,action) => {
    switch(action.type) {
        case 'CHON_KEO_BUA_BAO': {
            //reset mảng cược
            let mangCuocUpdate = [...state.mangDatCuoc];
            //tạo ra mảng cược mới từ mảng cược cũ và action.macuoc do người dùng truyền lên
            mangCuocUpdate = mangCuocUpdate.map((item,index)=> {
                if(item.ma === action.maCuoc) {
                    return {...item,datCuoc:true}
                }

                return {...item,datCuoc:false}
            })

            state.mangDatCuoc = mangCuocUpdate;
            return {...state}
        }
        case 'RAN_DOM': {
            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];

            state.computer = quanCuocNgauNhien


            return {...state}
        }
       case 'END_GAME':
           let player = state.mangDatCuoc.find(item=>item.datCuoc === true)
           let computer = state.computer;
           
           switch(player.ma){
               case 'bua':
                   if(computer.ma === 'keo'){
                        state.soBanThang +=1;
                        state.ketQua = "I'm Tuan, I love you 3001 !!!";
                   }else if(computer.ma === 'bua') {
                       state.ketQua = 'Hòa Nhau !!!'
                   }else {
                       state.ketQua = "Thua SML rồi @@"
                   };
                   break;
                case 'keo':
                    if(computer.ma === 'bao'){
                        state.soBanThang +=1;
                        state.ketQua = "I'm Tuan, I love you 3001 !!!";
                    }else if(computer.ma === 'keo') {
                        state.ketQua = 'Hòa Nhau !!!'
                    }else {
                        state.ketQua = "Thua SML rồi @@"
                    };
                    break;
                case 'bao':
                    if(computer.ma === 'bua'){
                        state.soBanThang +=1;
                        state.ketQua = "I'm Tuan, I love you 3001 !!!";
                    }else if(computer.ma === 'bao') {
                        state.ketQua = 'Hòa Nhau !!!'
                    }else {
                        state.ketQua = "Thua SML rồi @@"
                    };
                    break;
                default: state.ketQua = "I'm Tuan, I love you 3001 !!!"
           }
           state.soBanChoi +=1
           return {...state}
        default: return{...state}
    }
}

export default baiTapOanTuTiReducer;