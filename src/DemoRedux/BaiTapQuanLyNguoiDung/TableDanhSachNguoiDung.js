import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableDanhSachNguoiDung extends Component {
    render() {
        return (
            <div className='card'>
                <div className='card-header' bg-dark text-white>
                    Danh Sách Người Dùng
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tài Khoản</th>
                            <th>Họ Tên</th>
                            <th>Mật Khẩu</th>
                            <th>Email</th>
                            <th>Số Điện Thoại</th>
                            <th>Mã Loại Người Dùng</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.props.mangNguoiDung.map((nguoiDung,index)=> {
                            return <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{nguoiDung.taiKhoan}</td>
                                    <td>{nguoiDung.hoTen}</td>
                                    <td>{nguoiDung.matKhau}</td>
                                    <td>{nguoiDung.email}</td>
                                    <td>{nguoiDung.soDienThoai}</td>
                                    <td>{nguoiDung.maLoaiNguoiDung}</td>
                                    <td>
                                        <button className='btn btn-outline-danger mr-2' onClick = {() => {
                                            const action = {
                                                type: 'XOA_NGUOI_DUNG',
                                                taiKhoan:nguoiDung.taiKhoan
                                            }
                                            this.props.dispatch(action)
                                        }}>Xóa</button>
                                        <button className='btn btn-outline-primary'>Chỉnh Sửa</button>
                                    </td>
                            </tr>
                        })
                        }
                    </tbody>
                </table>
                
            </div>
        )
    }
}
/*
    => {                            <=> ({})
        return {

        }
        }
*/

const mapStateToProps = (state) => {
    return {
        mangNguoiDung: state.baiTapQuanLyNguoiDungReducer.mangNguoiDung
    }
}

export default connect(mapStateToProps)(TableDanhSachNguoiDung)