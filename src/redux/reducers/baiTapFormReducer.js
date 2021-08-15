const stateDefault = {
    mangSinhVien: [
        {maSinhVien:'1',soDienThoai:'0123456789',email:'nguyenvana@gmail.com',hoTen:'Nguyễn Văn A'},
        {maSinhVien:'2',soDienThoai:'9876543210',email:'nguyenvanb@gmail.com',hoTen:'Nguyễn Văn B'}
    ],
    sinhVienChinhSua: {
        maSinhVien:'1',
        soDienThoai:'0123456789',
        email:'nguyenvana@gmail.com',
        hoTen:'Nguyễn Văn A'
    },
    sinhVienChinhSuaLoadLai: {
        value: {
            maSinhVien:'',
            soDienThoai:'',
            email:'',
            hoTen:'',
        },
        errors : {
            maSinhVien:'',
            soDienThoai:'',
            email:'',
            hoTen:'',
        }
    }
}
export const baiTapFormReducer = (state = stateDefault,action) => {
    switch(action.type){
        case 'THEM_SINH_VIEN': {
            state.mangSinhVien = [...state.mangSinhVien,action.sinhVien]
    
            return {...state}
        }
        case 'XOA_SINH_VIEN': {
            const mangSinhVienCapNhat = [...state.mangSinhVien]
            state.mangSinhVien = mangSinhVienCapNhat.filter(sinhVien => sinhVien.maSinhVien !== action.maSinhVien);

            return {...state}
        }
        case 'CHINH_SUA': {
            state.sinhVienChinhSuaLoadLai.value = action.sinhVienChinhSua
            state.sinhVienChinhSuaLoadLai = {...state.sinhVienChinhSuaLoadLai}
            return {...state}
        }
        case 'HANDLE_CHANGE_INPUT': {
            state.sinhVienChinhSuaLoadLai = action.sinhVienChinhSuaLoadLai
            return {...state}
        }
        case 'CAP_NHAT': {
            const mangSinhVienCapNhatLai = [...state.mangSinhVien];
            //tìm ra sinh viên cần cập nhật
            // let sinhVienCapNhatLai = mangSinhVienCapNhatLai.find(sinhVienChinhSuaLoadLai=>sinhVienChinhSuaLoadLai.value.maSinhVien === action.sinhVienCapNhatLai.maSinhVien);
             let sinhVienCapNhatLai = mangSinhVienCapNhatLai.find((sinhVien)=>{
                 return sinhVien.maSinhVien === action.sinhVienCapNhat.maSinhVien
             })
            console.log(sinhVienCapNhatLai);
            if(sinhVienCapNhatLai) {
                sinhVienCapNhatLai.maSinhVien = action.sinhVienCapNhat.maSinhVien
                sinhVienCapNhatLai.email = action.sinhVienCapNhat.email
                sinhVienCapNhatLai.hoTen = action.sinhVienCapNhat.hoTen
                sinhVienCapNhatLai.soDienThoai = action.sinhVienCapNhat.soDienThoai
            }
            state.mangSinhVien = mangSinhVienCapNhatLai;
            return {...state}
        }
        default: return state
    }

}