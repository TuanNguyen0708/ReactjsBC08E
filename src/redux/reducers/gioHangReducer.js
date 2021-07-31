const gioHang =[
    // {maSP:1,tenSP:'IPhone',giaBan:1000,soLuong:1,hinhAnh:'http://picsum.photos/200/200'}
]

export const gioHangReducer = (state= gioHang, action) => {
    switch(action.type) {
        case 'THEM_GIO_HANG':{
            const spGH = {...action.sanPhamClick,soLuong:1};

            //kiểm tra sản phẩm có trong giỏ hàng chưa
            let gioHangCapNhat = state;
            let spGioHang = gioHangCapNhat.find(sp => sp.maSP===spGH.maSP);
            if(spGioHang) {
                spGioHang.soLuong +=1;
            }else {
                gioHangCapNhat.push(spGH)
            }
            console.log(gioHangCapNhat)

            //immutable (tính bất biến: object phải trả về object mới, array trả về arr mới)
            return [...gioHangCapNhat]; //trả về state mới (lưu ý kiểu dữ liệu cảu state mới phải giống kiểu dứ liệu state cũ)
        }
        case 'XOA_GIO_HANG': {
            const gioHangCapNhat = state.filter(sp => sp.maSP !== action.maSPClick);
            return [...gioHangCapNhat];
        }
        case 'TANG_GIAM_SO_LUONG': {
            let gioHangCapNhat = [...state];
            let spGH = gioHangCapNhat.find(sp => sp.maSP === action.maSPClick);
            if (spGH) {
                spGH.soLuong += action.soLuong;
                if(spGH.soLuong<1) {
                    alert('Số lượng không được nhỏ hơn 1')
                    spGH.soLuong -= action.soLuong
                }
            }
            return [...gioHangCapNhat]
        }

        default : return state;
    }

}
