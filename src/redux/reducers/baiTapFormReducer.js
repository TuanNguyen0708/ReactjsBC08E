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
        default: return state
    }

}