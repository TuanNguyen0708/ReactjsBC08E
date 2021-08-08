


const stateDefault = {
    mangNguoiDung: [
        {taiKhoan:'nguyenvana',hoTen:'Nguyễn Văn A',matKhau:'123456789',email:'nguyenvana@gmail.com',soDienThoai:'0909090909',maLoaiNguoiDung:'KhachHang'},
        {taiKhoan:'nguyenvanb',hoTen:'Nguyễn Văn b',matKhau:'987654321',email:'nguyenvanb@gmail.com',soDienThoai:'0808080808',maLoaiNguoiDung:'KhachHang'}
    ],
    nguoiDungChinhSua: {
        taiKhoan:'nguyenvana',
        hoTen:'Nguyễn Văn A',
        matKhau:'123456789',
        email:'nguyenvana@gmail.com',
        soDienThoai:'0909090909',
        maLoaiNguoiDung:'KhachHang'
    },
    nguoiDung: {
        value: {
            taiKhoan:'',
            matKhau:'',
            email:'',
            hoTen:'',
            soDienThoai:'',
            maLoaiNguoiDung:'KhachHang',
            },
            errors : {
                taiKhoan:'',
                matKhau:'',
                email:'',
                hoTen:'',
                soDienThoai:'',
                maLoaiNguoiDung:'',
            }
    }

}

export const baiTapQuanLyNguoiDungReducer = (state=stateDefault,action) => {
    switch(action.type) {
        case 'THEM_NGUOI_DUNG': {
            state.mangNguoiDung = [...state.mangNguoiDung,action.nguoiDung]
            //state.mangNguoiDung.push(action,nguoiDung)
            return {...state}
        }
        case 'XOA_NGUOI_DUNG': {
            const mangNguoiDungCapNhat = [...state.mangNguoiDung]

            state.mangNguoiDung = mangNguoiDungCapNhat.filter(nguoiDung =>nguoiDung.taiKhoan !== action.taiKhoan);
            return {...state}
        }
        case 'CHINH_SUA': {
            console.log('yess');
            state.nguoiDung.value = action.nguoiDungChinhSua;
            state.nguoiDung = {...state.nguoiDung}
            return {...state}
        }
        case 'HANDLE_CHANGE_INPUT' :{
            state.nguoiDung = action.nguoiDung;


            return {...state}
        }
        case 'CAP_NHAT_NGUOI_DUNG': {
            const mangNguoiDungCapNhat = [...state.mangNguoiDung];
            //tìm ra người dùng cập nhật
            let nguoiDungCapNhat = mangNguoiDungCapNhat.find(nguoiDung=>nguoiDung.taiKhoan === action.nguoiDungCapNhat.taiKhoan);
            if (nguoiDungCapNhat) {
                nguoiDungCapNhat.hoTen = action.nguoiDungCapNhat.hoTen;
                nguoiDungCapNhat.email = action.nguoiDungCapNhat.email;
                nguoiDungCapNhat.soDienThoai = action.nguoiDungCapNhat.soDienThoai;
                nguoiDungCapNhat.matKhau = action.nguoiDungCapNhat.matKhau;
                nguoiDungCapNhat.maLoaiNguoiDung = action.nguoiDungCapNhat.maLoaiNguoiDung;
            }
            state.mangNguoiDung = mangNguoiDungCapNhat;
            return {...state}
        }
        default: return state
    }
}