import React, { Component } from 'react'
import SanPham from './SanPham'

export default class BaiTapXemChiTiet extends Component {
    mangDienThoai = [
    {"maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9. 0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" 
    },
    {"maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" 
    },
    {"maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" 
    }
    ]

    state = {
        sanPhamChiTiet: {
            "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9. 0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg"
        }
    }

    renderSanPham = () => {
        //Callback function: là 1 hàm chưa đươc jgoij đóng vai trò là tham số truyền đi. và sẽ được gọi tại hàm hoặc component nhận hàm này
        return this.mangDienThoai.map((sanPham,index) => {
            return <div className="col-4" key={index}>
                <SanPham sp={sanPham} xemCT={this.xemChiTiet} />
            </div>
        })
    }
   
    xemChiTiet = (sanPhamClick) => {
        console.log('sanPhamClick',sanPhamClick)

        //set lại satte khi click
        this.setState({
            sanPhamChiTiet:sanPhamClick
        })
    
    }

    render() {
        let {sanPhamChiTiet} = this.state;
        return (
            <div className="container">
                <h3 className="text-center">Danh Sách Sản Phẩm</h3>
                <div className="row">
                    {this.renderSanPham()}
                    {/* <div className="col-4">
                        <div className="card">
                            <img src="https://picsum.photos/200/200" />
                            <div className="card-body">
                                <h3>Tên Sản Phẩm</h3>
                                <p>1000</p>
                                <button className="btn btn-success">Xem Chi Tiết</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img src="https://picsum.photos/200/200" />
                            <div className="card-body">
                                <h3>Tên Sản Phẩm</h3>
                                <p>1000</p>
                                <button className="btn btn-success">Xem Chi Tiết</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img src="https://picsum.photos/200/200" />
                            <div className="card-body">
                                <h3>Tên Sản Phẩm</h3>
                                <p>1000</p>
                                <button className="btn btn-success">Xem Chi Tiết</button>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="row mt-5">
                    <div className="col-4">
                        <h3>{sanPhamChiTiet.tenSP}</h3>
                        <img src={sanPhamChiTiet.hinhAnh} height={350} />
                    </div>
                    <div className="col-8">
                        <h3>Thông Số Kĩ Thuật</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <td>Màn Hình</td>
                                    <td>{sanPhamChiTiet.manHinh}</td>
                                </tr>
                                <tr>
                                    <td>Hệ Điều Hành</td>
                                    <td>{sanPhamChiTiet.heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <td>Camera Trước</td>
                                    <td>{sanPhamChiTiet.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <td>Camera Sau</td>
                                    <td>{sanPhamChiTiet.cameraSau}</td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>{sanPhamChiTiet.ram}</td>
                                </tr>
                                <tr>
                                    <td>Rom</td>
                                    <td>{sanPhamChiTiet.rom}</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
