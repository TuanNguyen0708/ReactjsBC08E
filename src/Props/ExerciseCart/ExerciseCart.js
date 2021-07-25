import React, { Component } from 'react'
import Cart from './Cart'
import ProductListCart from './ProductListCart'



export default class ExerciseCart extends Component {
    dataPhone = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    state = {
        gioHang: [
            // {maSP:1, tenSP: 'Iphone', giaBan: 1000, soLuong: 1, hinhAnh: 'https://picsum.photos/200/200'}
        ]
    }
    //state nằm ở đâu thì phương thức setState sẽ được khai báo tại đó (component đó)
    themGioHang = (spClick) => {
        console.log(spClick)
        // khi click vào sp thêm vào thuộc tính số lượng
        let spGioHang = {...spClick,soLuong:1}
        //lấy sp đó thêm vào mảng giỏ hàng
        let gioHangCapNhat = [...this.state.gioHang];

        //kiểm tra sản phẩm vừa click có tồn tại trong giỏ hàng hay chưa
        let spGH = gioHangCapNhat.find(sp=>sp.maSP===spGioHang.maSP);
        if(spGH){
            spGH.soLuong += 1; //tăng số lượng
        } else {// không tìm thấy
            gioHangCapNhat.push(spGioHang) //thêm vào giỏ hàng
        }

        //setState=> cập nhật lại giá trị mới cho giỏ hàng
        this.setState({
            gioHang:gioHangCapNhat
        })
    }

    //xóa giỏ hàng
    xoaGioHang = (maSPClick) => {
        let {gioHang} = this.state;
        // let index = this.state.gioHang.findIndex(sp=>sp.maSP === maSPClick);
        // if(index !== -1) {
        //     gioHang.splice(index,1)
        // }

        gioHang= gioHang.filter(sp => sp.maSP !== maSPClick)
        //xử lý setState thay đổi giỏi hàng
            this.setState({
                gioHang:gioHang
            })
    } 


    tangGiamSoLuong = (maSPClick,soLuong) => {
        let {gioHang} = this.state;
        let spTangGiam = gioHang.find(sp => sp.maSP === maSPClick)
        // tìm ra sản phẩm bấm tăng giảm
        if (spTangGiam) {
            //2 + -1 = 1
            spTangGiam.soLuong += soLuong;
            if(spTangGiam.soLuong < 1) {
                alert('Số lượng tối thiểu là 1');
                // 2 - - 1 = 1
                spTangGiam.soLuong -= soLuong;
            }
        }
        //cập nhật giỏ hàng
        this.setState({
            gioHang:gioHang
        })
    }



    tinhTongSoLuong = () => {
        let {gioHang} = this.state;
        let tongSoLuong = gioHang.reduce((soLuong,sanPham,index) => {
            return soLuong += sanPham.soLuong;
        },0);
        return tongSoLuong.toLocaleString();
    }
    tinhTongTien = () => {
        let {gioHang} = this.state;
        let tongTien = gioHang.reduce((thanhTien,sanPham,index) => {
            return thanhTien += sanPham.soLuong*sanPham.giaBan;
        },0);
        return tongTien.toLocaleString();
    }


    render() {
        return (
            <div className='container'>
                <h3 className='text-center'>Bài Tập Giỏ Hàng</h3>
                <div className='text-right'>
                    <span style={{cursor:'pointer'}} className='text text-danger font-weight-bold' data-toggle='modal' data-target='#modelId'>Giỏ Hàng ({this.tinhTongSoLuong()}-{this.tinhTongTien()})</span>

                </div>
                <Cart gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong} />
                <ProductListCart themGioHang={this.themGioHang} mangSanPham={this.dataPhone} />
            </div>
        )
    }
}
